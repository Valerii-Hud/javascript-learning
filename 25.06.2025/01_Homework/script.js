const salaries = {
  john: 500,
  ivan: 1000,
  ann: 5000,
  sayText: (text) => {
    console.log(text);
  },
};

salaries[Symbol.iterator] = function () {
  return {
    current: this.john,
    last: this.ann,
    next() {
      if (this.current < this.last) {
        this.current += 500;
        return { done: false, value: this.current };
      } else {
        return { done: true };
      }
    },
  };
};

for (let res of salaries) {
  console.log(res);
}
