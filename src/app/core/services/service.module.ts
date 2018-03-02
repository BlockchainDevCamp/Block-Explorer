import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';

import { allServices } from './index';

@NgModule({
  providers: [
    ...allServices
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ServiceModule { }