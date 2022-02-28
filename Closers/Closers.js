//  Closers-  yh js ka ek esa feature h , jisme  inner funtion , outer funtion ki value ko access kr skta he ..
// or jb bhi ek funtion create hota he, uske sath sath ek closer bhi create hota he

// The closure has three scope chains listed as follows:
// -----
// Access to its own scope.
// Access to the variables of the outer function.
// Access to the global variables.

// exaple

// function hello(x) {
//   var fname = "ganpat";
//   var lname = "koli";
// ----------------------------------------------------
// const  fname= "ganpat "
// const lname =" koli"
//  jb const ka use krenge tb starting me varibles value= uninitilize hogi lekin jb varible ko call krenge tb varible ki actual value assign ho jegi

//   return function () {
//     console.log(fname, lname, x);
//   };
// }

// const ans = hello("helo world");

// ans()

//  ans  hello funtion  k andr wala function call hoga , tb vh fname , lname k sath , hello function k default parameter( argumnent) ko call krega  jisme 'hello world' likha hua he

// Q-2

// function myfun(pow) {
//   // console.log(arguments);
//   return function myfun2(num) {
//     //   console.log(arguments);
//     return num ** pow;
//   };
// }

// const squre = myfun(2);
// const value2 = squre(5);
// console.log("squre :-" + value2);

// const cube = myfun(3);
// const value3 = cube(5);
// console.log("Cube :-" + value3);

//  jb  myfun call hoga, tb iske andar myfun2

// function mainFun() {
//   let counter = 0;
//   return function () {
//     if (counter < 1) {
//       console.log(" call first time");
//       counter++;
//     } else if (counter > 1 && counter < 2) {
//       console.log("call 2nd time ");
//     } else {
//       console.log("call agarin");
//       counter++;
//     }
//   };
// }

// const callMainFun = mainFun();
// callMainFun();
// callMainFun();
// callMainFun();

// ---------------------------------------------------------------------------------------------------------------------------------------

// Examples

// Q-1-

// let a = 0;

// function fun1() {
//     console.log(a);
//     if (a === 0) {
//         let a = 1;
//         console.log(a);
//   }
// }
// fun1();

// Q-2

// function numberGenerator() {
//     // Local “free” variable that ends up within the closure
//     var num = 1;
//     function checkNumber() {
//       console.log(num);
//     }
//     num++;
//     return checkNumber;
//   }

//   var number = numberGenerator();
//   number(); // 2

// function sayHello() {
//     var say = function () {
//     console.log(hello);
//   };
//   // Local variable that ends up within the closure

//   var hello = "Hello, world!";
//   return say;
// }
// var sayHelloClosure = sayHello();
// sayHelloClosure(); // ‘Hello, world!’

// Q-3

// var x = 10;

// function fun1() {
//   var y = 20;
// return   function fun2() {
//     var z = 30;
//     console.log(x + y + z);
//   }
// }
// var call=  fun1()
// console.log(call());



