const square = (x) => x * x;
console.log(square(9));

const user = {
  name: 'Young',
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi ${this.name}`);
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi ${this.name}`);
  }
};
user.sayHi();
