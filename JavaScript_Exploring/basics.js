/* console.log("Hello tonni");
var name="Tonni Akter";
var age=23;
var pass=true; */

// mathmetical operation--------
/* var price1 = 31;
var price2 = 10;
var sum = price1 + price2;
var difference = price2 - price1;
var multiplication = price1 * price2;
var division = price1 / price2;

// console.log(sum);
// console.log(difference);
// console.log(multiplication);
// console.log(division);
var doublePrice = price2 * 20;
// var newPrice = price1 + 10;
// price1 = price1 + 10;
price1 += 44;
// price2 = price2 - 2;
price2 -= 2;
// console.log(newPrice)
// console.log(price1)
// console.log(price2);
var age = 14;
age = age + 1;
age += 1;
age++;
console.log(age);

var love = 100;
love = love - 1;
love -= 1;
love--;
console.log(love);
// ===============
var onionPrice = 43;
var eggPrice = 10;
var eggQuantity = 7;
var totalPrice = onionPrice + eggPrice;
var priceDifference = onionPrice - eggPrice;
var eggPriceMultiplication = eggPrice * eggQuantity;

// console.log(onionPrice);
// console.log(eggPrice);
// console.log(onionPrice + eggPrice);
// console.log(totalPrice);
// console.log(priceDifference);
// console.log(eggPriceMultiplication);

var moneyAvailable = 100;
var orangePrice = 5;
var orangeQuantity = moneyAvailable / orangePrice;
// console.log(orangeQuantity);

// special edition
var firstNumber = 0.1;
var secondNumber = 0.2;
var total = firstNumber + secondNumber;
total = total.toFixed(1);
total = parseFloat(total);
// console.log(total);

// modulus
var mangoes = 57;
var hungryPerson = 12;
var dividing = mangoes / hungryPerson;
console.log(dividing);
var remaining = mangoes % hungryPerson;
console.log(remaining);

// =============
var today = new Date();
console.log(typeof today);
// ====================
var onionPrice = '42.50';
var eggPrice = '41.33';
var onionPriceNumber = parseFloat(onionPrice);
var eggPriceNumber = parseFloat(eggPrice);
// console.log(onionPriceNumber)
console.log(eggPriceNumber + onionPriceNumber); */

// ==========================================================================
// Array---
/* var names=["tonni","ayat","bipo","mazharul"];
var indexes=names.indexOf("bipo")
names[1]="love";
console.log(indexes);
console.log(names[2]);
console.log(names[6]);
console.log(names.length);
console.log(names);
// ======================
// add elements to an array
var lastBench = ['kalam', 'balam', 'salam'];
lastBench.push('jalam');
lastBench.push('palam');
lastBench.push('nalam');
// console.log(lastBench);
var friendsAge = [11, 13, 17, 12];
// friendsAge.push(15);
console.log(friendsAge);
// remove an element from an array
var lastItem = friendsAge.pop();
// friendsAge.pop();
console.log(friendsAge);
console.log(lastItem);

// javascript remove first item from an array !!
// javascript array add element in the beginning !!! */
// =============================comparison================================
/* console.log(5 > 6);
console.log(5 < 6);
console.log(5 == 6);
console.log(6 == 6);
console.log(6 != 6); */



// ================================loop---------------------------
// 1.while loop
var number=0;
 while (number<7) {
    // console.log(number);
    number++;
 }
// even numbers
number = 0;
while (number <= 20) {
    // console.log(number);
    number = number + 2;
}
// for loop-----===========================================
// even numbers
for (var i = 0; i <= 10; i += 2) {
    // console.log(i);
}
var items = ['bottle', 'mobile', 'charger', 'watch', 'book', 'paper'];

for (let i = 0; i < items.length; i++) {
    const element = items[i];
    // console.log(element);
}
var numbers = [54, 35, 21, 98, 23, 101, 45, 67];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 90) {
        break;
    }
    // console.log(number);
}
// for (var i = 0; i < numbers.length; i++) {
//     var number = numbers[i];
//     if (number > 90) {
//         continue;
//     }
//     console.log(number);
// }


/* Functions--------------------------------- */
/* function fun(p1,p2) {
    return (p1+p2);

}
var ans=fun(20,30);
console.log(ans);
console.log(fun(20,80)); */
/* function bringSingara(taka) {
    console.log('singara er jonno dise ', taka);
    console.log('Mama singara den');
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}
var money = 90;
var singara = bringSingara(money);
console.log('Ai nen singara ', singara); */
// ================objects==================
/* var properties={
    name:"Tonni",
    age:23,
    fvrt_color:"black",
    hobby:"study and coding",
    fvrt_work:"Exploring new things"
}
var nameValue= properties.name;
console.log(nameValue);
console.log(properties);
console.log(properties.fvrt_work);
 */
// different way to set a value of an object property
/* var computer = {
    price: 29000,
    storage: '256gb',
    color: 'silver',
    processor: 'intel i5'
}
var priceproperty="price";
computer[priceproperty]=10000
computer.price=11000;
computer["price"]=12000;

var storageProperty = 'storage';
computer[storageProperty] = '512gb';
computer['storage'] = '1tb';
computer.storage = '5tb';
console.log(computer);
 */

// =======================switch===================
/* var color = 'yellow';
switch (color) {
    case 'blue':
        console.log('color is blue');
        break;
    case 'red':
        console.log('color is red');
        break;
    case 'white':
        console.log('color is white');
        break;
    case 'green':
        console.log('color is green');
        break;
    case 'yellow':
        console.log('color is yellow');
        break;
    default:
        console.log('color is black');
}
 */





``