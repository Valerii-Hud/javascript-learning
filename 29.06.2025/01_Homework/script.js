// const now = new Date();
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDay());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

// console.log(now.setHours(18));
// console.log(now);

let start = new Date();

for (let i = 0; i < 100_000_000; i++) {
  let some = i ** 10;
}

let end = new Date();

console.log(`MS: ${end - start}`);
