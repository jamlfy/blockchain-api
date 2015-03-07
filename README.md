node-blockchain-wallet
======================

An unofficial node.js client for the [blockchain.info wallet api](http://blockchain.info/api/blockchain_wallet_api).

## Installation

```
npm install blockchain-api
```

## Usage

```javascript
var BlockchainApi = require('blockchain-wallet'),
    blockChain = new BlockchainApi(); // Basic

blockChain.receive('Adrress', 'url', function(err, data){
  
});

blockChain.createWallet({
  password :'myPassword' 
}, function(err, data){
  
});

blockChain.query().getreceivedbyaddres('address', function(err, data){
  
});

blockChain.chart('typeChart',{
  format :'json'
}, function(err, data){
  
});

blockChain.api().address([
  'addr1',
  'addr2',
  'addr3',
  'addr4',
], function(err, data){
  
});

// Wallet
var wallet = blockChain.wallet("YourGuid", "YourPassword", "SecondPassword");

wallet.list(function(err, data) {
  if(err) {
    throw err;
  }

  console.log(data);
});

// Send a donation to blockchain.info.
wallet.payment("1JArS6jzE3AJ9sZ3aFij1BmTcpFGgN86hA", 500, {"note": "Thanks"}, function(err, data) {
  if(err) {
    throw err;
  }

  console.log(data);
});
```

## Reference

A method-by-method [reference](https://github.com/pskupinski/node-blockchain-wallet/wiki/API-Reference) is available on the wiki.

