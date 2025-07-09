// Method No 1
const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];
const shortNames = names.filter((name) => {
  return name.length < 5;
});

// console.log(shortNames);

// Method No 2
const answers = ['IvAn', 'AnnA', 'KSENIA', 'VoLdEmArT'];
const result = answers.map((name) => name.toLowerCase());
// console.log(result);

// Method No 3
const passwords = [123456789, 'qwerty', 'qazwsx', 'zaq1@WSX'];
// console.log(passwords.some((passwd) => typeof passwd === 'number'));

// Method No 4
const numbers = [1, 2, 3, 4, 5, 7, 8, 9];
// console.log(numbers.every((num) => typeof num === 'number'));

// Method No 5
// const arr = [4, 5, 6, 7, 8, 2, 3, 2, 1];
// const res = arr.reduce((sum, currentNumber) => sum + currentNumber);
// console.log(res);
// const arr = ['s', 't', 'r', 'i', 'n', 'g'];
// const res = arr.reduce(
//   (output, currentSymbol) => (output += currentSymbol),
//   ''
// );
// console.log(res);

// Practic

const users = {
  ivan: 'person',
  ann: 'person',
  dog: 'animal',
  cat: 'animal',
};

const persons = Object.entries(users)
  .filter((item) => item[1] == 'person')
  .map((item) => item[0]);

console.log(persons);
