'use strict';

const config = require('config');
const ABI = require('./config/ABI.json');
const Web3 = require('web3');

const _web3 = new Web3(new Web3.providers.HttpProvider(config.get('provider')));
const _contract = _web3.eth.contract(ABI).at(config.get('address'));

const actual = _contract.getProducts.call('0x'+config.get('wallet').address);
console.log('verify:', actual.length);

if (actual.length !== config.get('n')) {
    console.log('verify: ERROR actual != expected');
    process.exit(1);
}
console.log('verify: Ok');