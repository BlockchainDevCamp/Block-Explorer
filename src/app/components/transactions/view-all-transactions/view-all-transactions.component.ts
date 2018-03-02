import { Component, OnInit } from '@angular/core';
import { BlockService } from "../../../core/services/block/block.service";

@Component({
  selector: 'app-view-all-transactions',
  templateUrl: './view-all-transactions.component.html',
  styleUrls: ['./view-all-transactions.component.css']
})
export class ViewAllTransactionsComponent implements OnInit {
  public transactions: any = [];
  public blocks: any = [];

  constructor(private blockService: BlockService) { }

  ngOnInit() {
    this.blockService.getAllBlocks().subscribe(data => {
      this.blocks = data;
      this.getTransactions();

      console.log(this.transactions)
    })
  }

  getTransactions() {
    for (const block of this.blocks) {
      let transactions = block.transactions;
      if (transactions.length !== 0) {
        for (const transaction of transactions) {
          this.transactions.push(transaction)
        }
      }
    }
  }

}
