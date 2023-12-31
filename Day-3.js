//loops
/* for (let i = 0; i < 10; i++) {
  console.log("Hello World!");
} */
// 7 types of loops in js--> for, for-in, for-of, while, do-while, forEach, and map.
//1.for loop
/* for (let i = 0; i < 10; i++) {
  console.log(i);
} */
//2. for-in loop
// -->A for-in loop is used to loop through the properties of an object.
/* const obj1 = {
  name: "Tonni",
  age: 23,
  hobby: "Programming",
};
for (const key in obj1) {
  console.log(key);
} */
//3. for-of loop
// -->A for-of loop is used to loop through the values of an iterable object (such as an array.)
/* const arr=[1,2,3,4,5,6]
for (const a of arr) {
    console.log(a)
} */
//4. while loop
// let i = 0;
/* while (i < 6) {
  console.log(i);
}
i++; */
//5. do-while loop
/* 
do {
    console.log(i)
    i++
} while (i<6); */
//6. forEach loop
// -->A forEach loop is a method on arrays that executes a function for each element in the array.
// const arr = [1, 2, 3];
// arr.forEach((val) => console.log(val));

//7 map
// -->A map loop is a method on arrays that creates a new array by executing a function on each element in the array.

// arr.map((a) => console.log(a));
//TRY CATCH
/* try {
    alert("Welcome Fellow Geek!");
}
catch (err) {
    console.log(err);
}

 */

//debugging
/* const x = 20;
const y = 5;
const z = x * y;
debugger;
document.getElementById("test").innerHTML = z; */
/* The try statement lets you test a block of code to check for errors.
The catch statement lets you handle the error if any are present.
The throw statement lets you make your own errors.
The finally statement lets you execute code after try and catch.  
The finally block runs regardless of the result of the try-catch block. */


try {
  throw new Error("Yeahh.. umm sorry")
} catch (err) {
  console.log(err)
}