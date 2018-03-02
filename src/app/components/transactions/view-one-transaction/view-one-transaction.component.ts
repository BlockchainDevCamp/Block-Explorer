import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrasactionService } from "../../../core/services/transaction/transaction.service";

@Component({
  selector: 'app-view-one-transaction',
  templateUrl: './view-one-transaction.component.html',
  styleUrls: ['./view-one-transaction.component.css']
})
export class ViewOneTransactionComponent implements OnInit {
  public txHash: String;
  public txData: any;

  constructor(private route: ActivatedRoute, private trasactionService: TrasactionService,private router: Router) { 
    this.txHash = this.route.snapshot.params['txHash'];
    console.log(this.txHash)
  }

  ngOnInit() { 
    this.loadData();
  }

  loadData() {
    this.trasactionService.getTransaction(this.txHash).subscribe(data => {
      this.txData = data;
      console.log(data);
    })
  }

  viewAddress(address) {
    this.router.navigate(['/address/' + address])
  }

  viewBlock(index) {
    this.router.navigate(['/block/' + index])
  }

}
