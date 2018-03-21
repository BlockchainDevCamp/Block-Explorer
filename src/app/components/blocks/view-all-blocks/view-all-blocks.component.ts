import { Component, OnInit } from '@angular/core';
import { BlockService } from "../../../core/services/block/block.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-blocks',
  templateUrl: './view-all-blocks.component.html',
  styleUrls: ['./view-all-blocks.component.css'],
  providers: [BlockService]
})
export class ViewAllBlocksComponent implements OnInit {
  public blocks: any = [];

  constructor(private blockservice: BlockService, private router: Router) { }

  ngOnInit() {
    this.blockservice.getAllBlocks().subscribe(data => {
      this.blocks = data;
      console.log(data);
    },
      err => {
        console.log(err);
      });
  }

  viewBlock(index) {
    this.router.navigate(['/block/' + index])
  }

  viewBlockTransactions(index) {
    this.router.navigate([`/block/${index}/transactions`]);
  }
  
  viewAddress(address) {
    this.router.navigate(['/address/' + address])
  }

}
