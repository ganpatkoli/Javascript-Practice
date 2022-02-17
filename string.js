                // String 


                

// The JavaScript string is an object that represents a sequence of characters.


// There are 2 ways to create string in JavaScript

// By string literal


// let str= "ganpat"
// console.log(str);

// By string object (using new keyword)

// let str= new String('ganpat')
// console.log(str);


//*******************************String Methods******************************

let str1 ="ganpat"
let str2 ="koli"


// 1. charAt()- return value given index

        //  console.log(str1.charAt(2));       

// 2. charCodeAt()- return unicode given charctore

// console.log(str1.charCodeAt("g"));


// 3. concat()- return unicode given charctore

// console.log(str1.concat(str2));


// 4. indexOf()- return first index value of given char

// console.log(str1.indexOf("g"));

// 5. lastIndexOf()- return last index value of given char ,

// console.log(str1.lastIndexOf("a"));



// 6. lastIndexOf()- return last index value of given char ,
// console.log(str1.lastIndexOf("a"));


// 7. replace() - replace first char of given condtion the string 
// console.log(str1.replace("a" ,"t"));


// 8. replaceAll() - replace first char of given condtion the string 
// console.log(str1.replaceAll("a" ,"t"));


// 9. slice() - cut string of given position

// console.log(str1.slice(0 ,3));

// 10.toLowerCase()- convert string into lower case

// let str = "GANPAT"
// console.log(str.toLowerCase());

// 11.toupperCase()- convert string into Upper case
// console.log(str.toUpperCase());



// 12.  split()- It splits a string into substring array, then returns that newly created array.


// let str= "ganpat koli"
// console.log(str.split());


// 12.  trim()- remove extra spaces from string


// let str= "      ganpatkoli   "
// console.log(str.trim());


// 00000000000000000000000000000000000000000000000000000000000000000000000909000009090909090



      // string Practice Question

// Q  = Write a JavaScript function to check whether a string is blank or not

// const value=( x )=>{
// if (x.length === 0) {
//     return console.log("string empty");
// }
// else {
// console.log(    `string are :- ${x} and length are :- ${x.length} `);
    

// }
// }

// // value('ganpat')
// value('')



// Q-2 Write a JavaScript function to split a string and convert it into an array of words.

// const str=(x)=>{
// return x.trim().split(" ")
// }
// console.log(str('ganpat koli'));


// Q3. Write a JavaScript function to extract a specified number of characters from a string.


// const str=(v , p)=>{
// return v.slice(0, p)
// }
// console.log(str('ganpat' , 4));



// Q4

// const str=(v)=>{

// return  v.trim().toLowerCase()
// }
// console.log(str('Ganpat Koli from bhilwara'));


// const str=(v)=>{

// return  v.trim().toLowerCase().split(" ")
// }
// console.log(str('Ganpat Koli from bhilwara'));



// Q-5 Write a JavaScript function to repeat a string a specified times.



// const str=(g, r)=>{
//     if(g===null|| r===undefined || r===null || r <=0)
//     {
//         console.log('we cant run');
//     }
//     else{
        
//         let l;
//     for(let i=0; i<r ; i++){
//         // l += g
// return new Array(r+1).join(g)
//     }
//     // return l
// }
// }
// console.log(str("ganpat" , 2));


// 6. Write a JavaScript function to truncate a string to a certain number of words



// var t;
// const str=(v , n)=>{
//   t +=  v.split(" ").splice(0,n).join(" ")
//  return t
// }
// console.log(str('Ganpat Koli from bhilwara'),2);







