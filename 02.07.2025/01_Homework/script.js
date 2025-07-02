'use strict';

// 1) Обычная функция: this = window, но если 'use strict' - undefined

//* Пример No 1 *//
//// function showThis() {
////   console.log(this);
//// }
//// showThis();

//* Пример No 2 *//
//// function showThis(a, b) {
////   console.log(this);
////   function sum() {
////     console.log(this);
////     return a + b;
////   }
////   console.log(sum());
//// }
//// showThis(4, 5);

// 2) Контекст у методов объекта - сам объект
//* Пример No 1 *//
////const obj = {
////  a: 20,
////  b: 15,
////  sum: function () {
////    return this;
////  },
////};
////console.log(obj.sum());

// 3) this в конструкторах и классах - это новый экземпляр объекта
//* Пример No 1 *//
////function User(name, id) {
////  this.name;
////this.id;
////this.human = true;
////this.hello = () => {
////console.log(`Hello ${this.name}`);
////};
////}
////let ivan = new User('Ivan', 23);

// 3) Ручная привязка this: call, apply, bind
//* Пример No 1 *//

//// function sayName(surname) {
//// console.log(this);
//// console.log(`${this.name} ${surname}`);
//// }
//// const user = {
//// name: 'John',
//// };

//// sayName.call(user, 'Smith');
//// sayName.apply(user, ['Smith']);

//* Пример No 2 *//
////function count(num) {
////  return this * num;
////}
////const double = count.bind(2);
////
////console.log(double(3));
////console.log(double(13));
