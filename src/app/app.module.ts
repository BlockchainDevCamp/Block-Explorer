import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common/';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlocksModule } from "./components/blocks/blocks.module";
import { SharedModule } from "./components/shared/shared.module";
import { TransactionsModule } from "./components/transactions/transactions.module";
import { ServiceModule } from './core/services/service.module';
import { ToastModule } from 'ng2-toastr/ng2-toastr'

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
    ServiceModule,
    BlocksModule,
    SharedModule,
    TransactionsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ToastModule.forRoot()
  ],
  providers: [ServiceModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
