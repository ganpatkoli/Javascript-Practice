// Global Execution Context :-    jb chijo ko declaire krne phle call kia jata he , tb vh ek temperory memory me store hoti he, use globle  execurtion memory khte he,

// Example

// x=121;
// console.log(x);
// var x;

//  Hoisting :- GEC is Hoisting, means that , jb bhi varible ko declaire  krne se phle call kia jata h tb , buffer memory me as a varible store  ho jata he, fir jb vo varible code runing k time  mil jata h, tb vh value print ho jati he
   // &&

//  js Hoising ek esa Machenism h jo hme variable or funtion ko without  declaration kre use krne ki permition deta he, 
// note- yh sirf declairation me hota he , initilisation me nhi 


// console.log(myname);
// console.log(myFun);
// console.log("normal log");

// function myFun(){
//     console.log("calling My Fun");
// }

// var myname="ganpat"

// note , myname return undefind bcz , variable  log krne GEC me value phle hi undefined set ho gyi

// -------------------------------------------------


// jb anonimus function (function Expresion)  or funtion decaliration-

console.log(fun1);

var fun1=function(){
    console.log('calling fun1');
}

console.log(fun1);

//  return undefined bcz , GEC me fun1  as a variable store ho rha he

// console.log(fun1);

// var fun1 =()=>{
//     console.log('calling fun1');
// }

// console.log(fun1);

// ------------------------------------

// if private Scop variable hoto

// console.log(myName);
// console.log(fun1);

// let myName = "Ganpat";

//   in this state my name - return ININITILISE

// NOTE  -  jb bhi koi variable ki  value starting me Uninitilze  or  baad me useme value initilise kia jae tb, iske bich k time ko TDZ( Temporal Dead Zone) khte her

// ----------------------------------------------------------------------------------------------------------

// ------------------------------- Funtion Execution  Context

// let abc = "ganpat";
// console.log(abc);

// function getFun(firstname, lastname) {
//   console.log(arguments);
//   let myVar = "var inside function ";
//   console.log(myVar);
//   const  Fullname = firstname + " " + lastname;
//   return Fullname;
// }

// const person = getFun("Ganpat", "Koli") ;        // Function Excecution Context
// console.log(person);

//  Scop Chain

// const name= "ganpat"

// const fun2 = function(){
//     const second= "ram"
//     console.log(second);
//     console.log(name);

// }
// fun2()

// --------------------------------------- HOISTING PRACTICE QUESTION -------------------------------

// var a = 1;
// function b() {
//   a = 10;
//   return;
//   function a() {}
// }
// b();
// console.log(a);

// O/P    1

// Q-2

// var a = 1;
// function b() {
//   // Hoisted  function a() {}
//   a = 10;
//   return;
// }
// b();
// console.log(a);

// o/P   10

// Q-3

// function foo() {

//   function bar() {
//     return 3;
//   }

//   return bar();
//   function bar() {
//     return 8;
//   }

// }
// console.log(foo());

// op
// function foo() {
//   //Hoisted before
//   function bar() {
//     return 3;
//   } // Hoisted after
//   function bar() {
//     return 8;
//   }
//   return bar();
// }

// console.log(foo());

// Q-4

// function parent() {
//   var hoisted = "I'm a variable";
//   function hoisted() {
//     return "I'm a function";
//   }
//   return hoisted();
// }
// console.log(parent());

// Q-6

// var myVar = "foo";
// (function () {
//   console.log("Original value was: " + myVar);
//   var myVar = "bar";
//   console.log("New value is: " + myVar);
// })();

//  op-
//  Original value was - undefined
// New value is bar

// Q-7

// var z = 1;
// let z;
// console.log(z);
// // -----------------
// console.log(z);
// let z = 1;

// OP- SyntaxError: Identifier 'z' has already been declared

//  Q-8

// function hoistExample() {
//     var a;
//     console.log("Before: ", a);
//     a = 10;
//     console.log("After: ", a);
//     }
//     hoistExample();

// O/P       Before:  undefined
//              After:  10

// Q-9

// function hoistingExample() {
//     console.log("Value of a in local scope: ", a);
//     }

//     console.log("Value of a in global scope: ", a);
//     var a = 1;
//     hoistingExample();

// Op-   1 , undefined

// Q-9

// function hoistingExample() {
//     a = 1;
//     }
//     hoistingExample();
//     console.log(a);
// ----------------------------
// function hoistingExample() {
// var a = 1;
// }
// hoistingExample();
// console.log(a);

// OP-   refrence error ,  undefiede










// var a = undefined;
// function hoistingExample() {
//   a = 1;
// }
// hoistingExample();
// console.log(a); // 1,  Variables which are assigned without a var declaration are considered to be global variables
// ----------------------------
// function hoistingExample() {
//   var a = undefined;
//   a = 1;
// }
// hoistingExample();
// console.log(a); // ReferenceError: a is not defined, var a is defined inside local scope.


//  output -   1 ,  a is not defined