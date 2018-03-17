import { Component, OnInit } from '@angular/core';
import { TrasactionService } from "../../../core/services/transaction/transaction.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-transactions',
  templateUrl: './view-all-transactions.component.html',
  styleUrls: ['./view-all-transactions.component.css']
})
export class ViewAllTransactionsComponent implements OnInit {
  public transactions: any = [];

  constructor(private trasactionService: TrasactionService,private router: Router) { }

  ngOnInit() {
    this.trasactionService.getAllConfirmTransactions().subscribe(data => {
      console.log(data);
      this.transactions = data;
    })
  }

  viewTransaction(txHash) {
    this.router.navigate([`/transaction/${txHash}`]);
  }

}
