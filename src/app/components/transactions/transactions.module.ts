import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { transactionsComponents } from './index';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewOneTransactionComponent } from './view-one-transaction/view-one-transaction.component';
import { ViewAllTransactionsComponent } from './view-all-transactions/view-all-transactions.component';

@NgModule({
  declarations: [
    ...transactionsComponents,
    ViewOneTransactionComponent,
    ViewAllTransactionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule
  ]
})
export class TransactionsModule {  }