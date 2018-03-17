import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetBalanceService } from "../../core/services/get-balance/get-balance.service";

@Component({
  selector: 'app-view-acount',
  templateUrl: './view-acount.component.html',
  styleUrls: ['./view-acount.component.css']
})
export class ViewAcountComponent implements OnInit {
  public address: String;
  public addressData: any;
  public transactions: any = [];

  constructor(private route: ActivatedRoute, private getBalanceService: GetBalanceService,private router: Router) { 
    this.address = this.route.snapshot.params['address'];
  }

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    this.getBalanceService.getBalance(this.address).subscribe(data => {
      this.addressData = data;
    });

    this.getBalanceService.getTransactionFromAddress(this.address).subscribe(data => {
      this.transactions = data;
    })
  }

  viewTransaction(txHash) {
    this.router.navigate([`/transaction/${txHash}`]);
  }

}
