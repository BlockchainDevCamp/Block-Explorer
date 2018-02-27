import { Routes } from '@angular/router';

import { ViewAcountComponent } from './components/view-acount/view-acount.component';
import { ViewAllBlocksComponent } from "./components/blocks/view-all-blocks/view-all-blocks.component";
import { ViewOneBlockComponent } from "./components/blocks/view-one-block/view-one-block.component";
import { NotFoundComponent } from "./components/shared/not-found/not-found.component";
import { ViewAllTransactionsComponent } from "./components/transactions/view-all-transactions/view-all-transactions.component";
import { ViewOneTransactionComponent } from "./components/transactions/view-one-transaction/view-one-transaction.component";

export const routes: Routes = [
    { path: '', component: ViewAllBlocksComponent, pathMatch: 'full' },
    { path: 'blocks', component: ViewAllBlocksComponent },
    { path: 'block/:index', component: ViewOneBlockComponent },
    { path: 'transactions', component: ViewAllTransactionsComponent },
    { path: 'transaction/:index', component: ViewOneTransactionComponent },
    { path: 'address/:address', component: ViewAcountComponent },
    { path: '', component: NotFoundComponent }
]