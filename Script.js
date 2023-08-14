//variable
/* function name() {
  let x = 10; //local variable
}
console.log(x);
name(); */

// var,let,const
/* var x=10;
x=20;
let y=10;
x=20; */

/* const z=10;
// z=20;
console.log(z) */

/* const x = 10;
const y = 20;
const z = x + y;
console.log(x + y);
console.log(z, x, y); */
// alert(x+y)
// document.write(x+y)
//  myAge --camelcase

/* let name1; //declaration
name1="Tonni" //initialization
name1="Ayat"
console.log(name1) */

// convert string to number/integer
/* // var sum = parseInt("10") + 23;
// console.log(sum);
 */

//Variables defined with let must be Declared before use
/* console.log(sum)
let sum=10 */

// we can not access block scope variables
function name() {
  let y = 20;
  console.log(y);
}
name();
// console.log(y);

// const =====
/* const junaeadWorld = "TONNI";
// junaeadWorld="Mursheda" ;  //error occurs--> we can not reAssign const variable
console.log(junaeadWorld);
 */

//arrays............
const arrayOfNum = [10, 20, 30, 40, 50, 60];
arrayOfNum.push(70); //add element in the last
console.log(arrayOfNum);
arrayOfNum.pop();
console.log(arrayOfNum);
