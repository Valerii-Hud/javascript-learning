'use strict';

// пример No1
const user = {
  name: 'Alex',
  surname: 'Smith',
  birthday: '20/04/1993',
  showMyPublicData: () => {
    console.log(`${this.name} ${this.surname}`);
  },
};

// пример No2
const shops = [{ oil: 599 }, { rice: 1000 }, { bread: 1241 }];
const budget = [500, 105, 444];

const map = new Map();

const userMap = new Map(Object.entries(user));

const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);

shops.forEach((shop, i) => {
  map.set(shop, budget[i]);
});

console.log(map.get(shops[0]));
