# BlockExprorer

The `Block Exprorer` is an application which:
* [Explorer blockchan](#blockchain)
* [Explorer block](#block)
* [Eplorer block transactions](#block-transactions)
* [Eplorer all transactions](#all-transactions)
* [Explorer transaction](#transaction)
* [Explorer adrress balance](#address-balance)

## How to start

* First if you don't have angular cli 
```
npm install -g @angular/cli
```

* Get in the folder with console and type 
```
npm install
```
then
```
ng serve
```
 after a about minute it shoud start at http://localhost:4200/
 
 ## API
 
 ### Blockchain 
 
 port http://localhost:4200/
 
 ### Block 
 
 port http://localhost:4200/block/{Block index}
 
 ### Block Transactions
 
 port http://localhost:4200/block/{Block index}/transactions
 
 ### All transactions
 
 port http://localhost:4200/transactions
 
 ### Transaction
 
 port http://localhost:4200/transactions/{Transaction Hash}
 
 ### Address Balance
 
 port http://localhost:4200/address/{Address}
 
 
 


