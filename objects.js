// -------------------------------------Object-----------------------------------------------


// Object is entity , which have state and behaivor(propertie and method)
// ex. car , moniter , mobile




//=---------------------------------  CREATING OBJECT

//  3 ways to create object


// 1- By object literal

// var obj={ id:0 , name:'ganpat'}
// console.log(obj);

// 2- using new Keyword directly

// var obj = new Object()
// obj.id= 0;
// obj.name= 'ganpat';
// console.log(obj);




// 3- using object constructor

// const fun1=()=>{
//     Object(id,name)
//         this.id = 0,
//         this.name= 'ganpat';
        
//     }
// e= new fun1(0, 'ganpat')

// console.log(fun1(e));

//-----------------------------------------------------------------------------------------------------------------
//    Defining method in JavaScript Object :- to define method need to add property in the function with same name as method.

//-----------------------------------------------------------------------------------------------------------------
// function student (id , name , marks ){
// this.id =id;
// this.name =name;
// this.marks= marks;

// this.subject=subject;

// function subject(sub){
//     this.subject=sub;
// }

// }


// e= new student(101, "ganpat" , 1000)
// console.log(e);

// // e.subject()


// exaple2

// function employe(id, name , city , sallary  ){
//     this.id = id;
// this.name= name;
// this.city=city;
// this.sallary=sallary;

// this.pf = pf;

// function pf(p){
// this.pf= p;
// console.log('hello world');
// }


// }
// let obj = new employe(10001, 'ganpat ', 'bhilwara' , 30000 )
// console.log(obj.pf(2100));
// console.log(obj);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------

//                                                                                                                                                          JAVASCRIPT METHODS-

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------


// 1.  Object.create()- to create New Object

// syntext- Object.create(prototype[, propertiesObject])  

// Object.create() 
// const obj={
//    abc :  function Obj(name , city){
//         console.log(` name = ${this.name} , city :- ${this.city} `);
//     }
// }
// let  a = Object.create(obj)
// a.name='ganpat'
// a.city='bhilwara'

// a.abc()


// 2. Object.entries()-  it return an array , which have own properties, (key , value) pairs

// const obj ={
// name :'ganpat',
// id: 1,
// city:"bhilwara"

// }

// console.log(Object.entries(obj)[0] );
// console.log(Object.entries(obj)[1] );
// console.log(Object.entries(obj)[2] );

// 3. Object.Keys()-  it return an array , keys of given object

// const obj ={
// name :'ganpat',
// id: 1,
// city:"bhilwara"

// }
// console.log(Object.keys(obj));


// 4. Object.Value()-  it return an array , value of given object

// const obj ={
//     name :'ganpat',
//     id: 1,
//     city:"bhilwara"
    
// }

// console.log(Object.values(obj));








// -------------------------------------------------  Practice Question  -----------------------------------------------------------

// 1. Write a JavaScript program to list the properties of a JavaScript object.

// var library = 
//      {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games', 
//         readingStatus: false,
//         rollNo:120
//     };

// console.log(Object.keys(library));



// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.


// var library = 
//      {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games', 
//         readingStatus: false,
//         rollNo:120
//     };


// console.log(library);
// delete library.rollNo
// console.log(library);

// 3.

// var library = [ 
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games', 
//         readingStatus: false
//     }];


// for(i=0; i<=library.length ; i++){
// if(library[i].readingStatus){
//     return console.log(`alredy read ${library[i].title} `);
// }
// else{
//     return console.log(`you still need to read  ${library[i].title}`);
// }
// }


// let programming = {
//     languages: ["JavaScript", "Python", "Ruby"],
//     isChallenging: true,
//     isRewarding: true,
//     difficulty: 8,
//     jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
// };

// Write the command to add the language "Go" to the end of the languages array.

// programming.languages.push('go')
// console.log(programming);


// Change the difficulty to the value of 7.

// programming.difficulty=7
// console.log(programming);



// Using the delete keyword, write the command to remove the jokes key from the programming object.

// delete  programming.jokes
// console.log(programming);


// Write the command to add a new key called isFun and a value of true to the programming object.

// programming.isFun= true
// console.log(programming);

// Using a loop, iterate through the languages array and console.log all of the languages.

// for(i=0; i<=programming.languages.length ; i++){
// return console.log(programming.languages[i]);    
// }

// &


// for( let i of  programming.languages){
//     console.log( i);
// }

// Using a loop, console.log all of the keys in the programming object.
 
// let a= Object.keys(programming)
// console.log(a);

// Using a loop, console.log all of the values in the programming object.


// let a= Object.values(programming)
// console.log(a);









