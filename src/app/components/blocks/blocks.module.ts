import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { blocksComponents } from "./index";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewOneBlockComponent } from './view-one-block/view-one-block.component';
import { ViewAllBlocksComponent } from './view-all-blocks/view-all-blocks.component';

@NgModule({
    declarations: [
      ...blocksComponents,
      ViewOneBlockComponent,
      ViewAllBlocksComponent
    ],
    imports: [
      CommonModule, 
      RouterModule,
      HttpClientModule,
      BrowserAnimationsModule
    ]
  })
  export class BlocksModule {  }