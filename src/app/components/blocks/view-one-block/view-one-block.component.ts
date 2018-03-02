import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlockService } from "../../../core/services/block/block.service";

@Component({
  selector: 'app-view-one-block',
  templateUrl: './view-one-block.component.html',
  styleUrls: ['./view-one-block.component.css'],
  providers: [BlockService]
})
export class ViewOneBlockComponent implements OnInit {
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
      console.log(data);
    },
    err => {
      console.log(err);
    });
  }

  viewBlockTransactions() {
    this.router.navigate([`/block/${this.blockIndex}/transactions`]);
  }

}
