import { Component, OnInit } from '@angular/core';
import { TrasactionService } from "../../../core/services/transaction/transaction.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-pending-transactions',
  templateUrl: './pending-transactions.component.html',
  styleUrls: ['./pending-transactions.component.css']
})
export class PendingTransactionsComponent implements OnInit {
  public transactions: any = [];

  constructor(private trasactionService: TrasactionService,private router: Router) { }

  ngOnInit() {
    this.trasactionService.getAllPendingTransactions().subscribe(data => {
      console.log(data);
      this.transactions = data;
    })
  }

  viewTransaction(txHash) {
    this.router.navigate([`/transaction/${txHash}`]);
  }

}
