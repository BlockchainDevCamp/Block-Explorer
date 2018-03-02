import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlockService } from "../../../core/services/block/block.service";

@Component({
  selector: 'app-block-transactions',
  templateUrl: './block-transactions.component.html',
  styleUrls: ['./block-transactions.component.css']
})
export class BlockTransactionsComponent implements OnInit {
  public blockIndex: String;
  public blockData: any;

  constructor(private route: ActivatedRoute, private blockService: BlockService,private router: Router) { 
    this.blockIndex = this.route.snapshot.params['index'];
    console.log(this.blockIndex)
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.blockService.getBlockByIndex(this.blockIndex).subscribe(data => {
      this.blockData = data;
    })
  }


  viewTransaction(txHash) {
    this.router.navigate([`/transaction/${txHash}`]);
  }

}
