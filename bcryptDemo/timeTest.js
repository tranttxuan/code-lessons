// to see results of this file:
// go to the terminal and navigate to the `bcryptDemo`: cd bcryptDemo
// run: node timeTest.js
// check the results of the console.log() in the terminal

const bcrypt = require("bcryptjs");
const plainPassword1 = "HelloWorld";

for (let saltRounds = 10; saltRounds < 19; saltRounds++) {
  console.time(`bcrypt | cost: ${saltRounds}, time to hash`);
  bcrypt.hashSync(plainPassword1, saltRounds);
  console.timeEnd(`bcrypt | cost: ${saltRounds}, time to hash`);
}
