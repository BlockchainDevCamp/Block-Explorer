import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { blocksComponents } from "./index";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { BlockService } from "../../core/services/block/block.service";

@NgModule({
    declarations: [
      ...blocksComponents,
    ],
    imports: [
      CommonModule, 
      RouterModule,
      HttpClientModule,
      BrowserAnimationsModule,
      ToastModule.forRoot()
    ],
    providers: [BlockService]
  })
  export class BlocksModule {  }