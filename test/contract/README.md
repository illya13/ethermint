NodeJS / Web3 based load runner for Ethereum / Ethermint

### Pre Requirements
ethermint node(s) started with Ethereum RPC and keystore setup for address `0x7eff122b94897ea5b0e2a9abf47b86337fafebdc`
```
ethermint --targetgaslimit ‭134217728‬ --node_laddr "tcp://127.0.0.1:46656" --rpc_laddr "tcp://127.0.0.1:46657" --addr "tcp://127.0.0.1:46658" --ipcdisable --rpc --rpcaddr "0.0.0.0" --rpccorsdomain "*" --rpcapi "db,eth,net,web3,personal,admin,txpool" --log_level error
```

Block size is limited by `700tx`
```
block_size = 700
```

Smart Contract deployed 
```
personal.unlockAccount('0x7eff122b94897ea5b0e2a9abf47b86337fafebdc','1234');
loadScript('deploy.js');
```

### Prepare

setup dependencies
```
npm install --save
```

review config
```
config/default.json

```

### Run
```
node main.js
```


### Other 

Send `Tx` from Geth console 
```
products.registerProduct.sendTransaction('0x03', 'three', {from: web3.eth.accounts[0], gas: 150000});
```

Check `Tx` processed / saved
```
products.getProduct.call('0x03');
products.getProducts.call(web3.eth.accounts[0]);
```


