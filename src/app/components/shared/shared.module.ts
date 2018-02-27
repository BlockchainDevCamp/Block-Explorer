import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { sharedComponents } from "./index";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
      ...sharedComponents
    ],
    imports: [
      CommonModule,
      RouterModule,
      HttpClientModule,
      BrowserAnimationsModule
    ],
    exports: [
      ...sharedComponents
    ]
  })
  export class SharedModule {  }