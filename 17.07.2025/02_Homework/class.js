class User {
  constructor(name, age) {
    this.userName = name;
    this._age = age;
  }
  #surname = 'Sigmachenko';
  say = () => {
    `User name: ${this.name} ${this.#surname}, Age: ${this._age}`;
  };
  get age() {
    return this._age;
  }
  set age(age) {
    if (typeof _age === 'number' && age > 0 && age < 120) {
      return (this._age = age);
    } else {
      console.error('Something went wrong.');
    }
  }
  get surname() {
    return this.#surname;
  }
  set surname(surname) {
    this.#surname = surname;
  }
}

const ivan = new User('Ivan', 27);
// console.log(ivan.age);
// ivan.age = 99;
// console.log(ivan.age);
console.log(ivan.surname);
ivan.say();
