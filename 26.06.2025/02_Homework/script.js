'use strict';
// console.log(Number.MAX_SAFE_INTEGER);

// const bigint = 8050758907318790255807912518290501059875n;
// const sameBigint = BigInt(8050758907318790255807912518290501059875n);
// console.log(typeof bigint == typeof sameBigint);

let bigint = 1n;
let number = 2;

console.log(bigint + BigInt(number));
