// function pow(base, power) {
//   return base ** power;
// }

// function pow(base, power) {
//   let res = 1;
//   for (let i = 0; i < power; i++) {
//     res *= base;
//     // res = res * base;
//   }
//   return res;
// }

function pow(base, power) {
  // debugger;
  if (power === 1) return base;
  else return base * pow(base, power - 1);
}

// =====-TESTS-===== //
console.log(`2 = ${pow(2, 1)}`); // 2
console.log(`4 = ${pow(2, 2)}`); // 4
console.log(`8 = ${pow(2, 3)}`); // 8
console.log(`16 = ${pow(2, 4)}`); // 16
