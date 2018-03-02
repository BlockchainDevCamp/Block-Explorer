import { HttpClientService } from "./http/http.service";
import { BlockService } from "./block/block.service";
import { TrasactionService } from "./transaction/transaction.service";
import { GetBalanceService } from "./get-balance/get-balance.service";

export const allServices = [
    HttpClientService,
    BlockService,
    TrasactionService,
    GetBalanceService
]