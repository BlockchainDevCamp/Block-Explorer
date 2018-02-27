import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common/';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlocksModule } from "./components/blocks/blocks.module";
import { SharedModule } from "./components/shared/shared.module";
import { TransactionsModule } from "./components/transactions/transactions.module";

import { routes } from "./app.routing";
import { AppComponent } from './app.component';
import { ViewAcountComponent } from './components/view-acount/view-acount.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewAcountComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    BlocksModule,
    SharedModule,
    TransactionsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
