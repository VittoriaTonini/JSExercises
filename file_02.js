let arr = [];
const numEl = 10;
const max = 100;
for (let i = 0; i < numEl; i++) {
  arr.push(Math.floor(Math.random() * max));
}
console.log(arr);

arr.forEach(element => {
  // if (element % 2 == 0) {
  //   console.log(`${element} è un numero pari`);
  // }
  // else {
  //   console.log(`${element} è un numero dispari`);
  // }
  const type = element % 2 == 0 ? "pari" : "dispari";
  console.log(`${element} è ${type}`)
});

