//object in js
const obj = new Object();
obj.name = "Tonni";
// console.log(obj)

let school = {
  name: "National bangla",
  location: "Mirpur-2",
  established: 2002,
  20: 1000,
  displayInfo: function () {
    console.log(
      `${this.name} was stablished in ${this.location} at ${this.established}`
    );
    console.log(`The value of the key 20 is ${school["20"]}`);
    console.log(`${school.name.split(" ")[0]}`);
  },
};
// school.displayInfo();
//hasOwnProperty -->obj.hasOwnProperty("property name ") jodi sei obj er moddhe oi property thake then return true otherwise false.
// console.log(school.hasOwnProperty("name"));
// accessin gobject property===========
// console.log(school.name);
// console.log(school["20"]);

//===================>
/* let person = {
  name: "Tonni",
  designation:"web developer"
};
let person1 = Object.create(person);
person1.age = 23;
person1.hobby = "Do coding";
console.log(person1); //{ age: 23, hobby: 'Do coding' }
for (const key in person1) {
  console.log(key); //age,hobby,name
  console.log(person1[key]); //23,Do coding,Tonni
}
delete  person1.age
console.log(person1) */

/* let obj1 = {
  propfirst: "Name",
};
// Output : Name
console.log(obj1.propfirst);
let obj2 = Object.create(obj1);
// Output : Name
console.log(obj2.propfirst);
// Output : true.
console.log(delete obj2.propfirst);
// Surprisingly Note that this will return true
// regardless of whether the deletion was successful
// Output : Name
console.log(obj2.propfirst); */

//=============//
/* let p1 = {
  fName: "Tonni",
  lName: "Akter",
  getFunction: function () {
    return `The name of the person is ${p1.fName} ${p1.lName}`;
  },
  phone_number: {
    mobile: "12345",
    landline: "6789",
  },
};
console.log(p1.getFunction());
console.log(p1.phone_number.landline);
function person(fName, lName) {
  this.fName = fName;
  this.lName = lName;
}
let p2 = new person("Tonni", "Akter");
let p3 = new person("Ayat", "Islam");
console.log(p2.fName);
console.log(`${p3.fName} ${p3.lName}`); */
//=============//
const coder = {
  isStudying: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I
        studying?: ${this.isStudying}.`);
  },
};
/* const me = Object.create(coder);
me.name = "Tonni";
me.isStudying = true; //bairer value nisse this.isStudying--> My name is Tonni. Am I studying?: true. ar aita na dile false dibe vitorer value
me.printIntroduction(); */

//=============//
//classes: classes are blueprints of an object. a class can have many objects because the class is a template while objects are instances of the class.

class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
  getDetails() {
    return `The name of the bike is ${this.name} maker.. ${this.maker} enginer.. ${this.engine}`;
  }
}
/* let bike1 = new Vehicle("Hayabusa", "Suzuki", "1340cc");
let bike2 = new Vehicle("Ninja", "Kawasaki", "998cc");
console.log(bike1.name);
console.log(bike1.maker);
console.log(bike1.engine);
console.log(bike2.getDetails()); */
//=============//
//abstraction: Data abstraction refers to providing only essential information about the data to the outside world,

//=============//
//encapsulation:The process of wrapping properties and functions within a single unit is known as encapsulation.
/* class Abstraction {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  add_address(add) {
    this.add = add;
  }
  getDetails() {
    console.log(`Name is ${this.name},Address is: ${this.add}`);
  }
} */

// let manus1 = new Abstraction("Tonni", 276);
// console.log(manus1);
// manus1.add_address("Mirpur-1");
// manus1.getDetails();

//=============//
// Abstraction example
/* function person(fname, lname) {
  let firstname = fname;
  let lastname = lname;

  let getDetails_noaccess = function () {
    return `First name is: ${firstname} Last
			name is: ${lastname}`;
  };

  this.getDetails_access = function () {
    return `First name is: ${firstname}, Last
			name is: ${lastname}`;
  };
} */
/* let person1 = new person("Mukul", "Latiyan");
console.log(person1.firstname); //undefined
console.log(person1.getDetails_noaccess); //undefined
console.log(person1.getDetails_access());
 */
//=============//
// Inheritance
/* class Manus {
  constructor(name) {
    this.name = name;
  }
  toString() {
    return `Name of person: ${this.name}`;
  }
}
class student extends Manus {
  constructor(name, id) {
    super(name);
    this.id = id;
  }
  toString() {
    return `${super.toString()},
    Student ID: ${this.id}`;
  }
}
let st1 = new student("Tonni", 276);
console.log(st1.toString()); */
//=============//
// polumorphism: Polymorphism means the same function with different signatures is called many times. we can write multiple methods with same name with different parameters

//JavaScript JSON Objects

let myOrder, i;
myOrder = {
  name_of_product: "Earbuds",
  cost: "799",
  warranty: "1 year",
};
// Accessing object using [] notation
i = myOrder["name_of_product"];
console.log(i);
