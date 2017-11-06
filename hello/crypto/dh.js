'use strict';

const crypto = require('crypto');
const assert = require('assert');

//DiffieHellman 类是一个用来创建Diffie-Hellman键交换的工具。DiffieHellman类实例可用
//crypto.createDiffieHellman()方法创建。

//Generate Alice's keys...
const alice = crypto.createDiffieHellman(1024);
const aliceKey = alice.generateKeys();

console.log('Prime:' + alice.getPrime().toString('hex'))
console.log('Generator:' + alice.getGenerator().toString('hex'));

//Generate Bob's keys...
const bob = crypto.createDiffieHellman(alice.getPrime(), alice.getGenerator());
const bobKey = bob.generateKeys();

//Exchange and generate the secret...
const aliceSecret = alice.computeSecret(bobKey);
const bobSecret = bob.computeSecret(aliceKey);

console.log(aliceSecret.toString('hex'));
console.log(bobSecret.toString('hex'));

assert.strictEqual(aliceSecret.toString('hex'), bobSecret.toString('hex'));
