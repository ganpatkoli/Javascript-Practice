// Arrey

//  create array

// 1 const arr= [1,2,3,4,6,7]

// 2 const arr1 = new Array()
// arr1[0]

// 3 const arr= new Array(1,2,3,4)

//  Array Methods

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [6, 7, 8, 9, 10];

// 1  concat - to add two or more array
//  console.log(arr1.concat(arr2));

// 2 CopyWithin() - capy value according to condition return modifyed  arrey
// (place , start, end)
// console.log(  arr2.copyWithin(3, 0, 3 ) );

// 3 Entries() - create itrater obj and loop that over each key and value pair

// var itr = arr1.entries()
// for( i of itr){
//   console.log(i);
// }

// 4 Every()  - check given condition stisfy array elements or not , return true or false

// const fun1=(check)=>{
// // return check>1
// return check>0
// }
// console.log(arr1.every(fun1) );

//  5 flat() - convert 2d arrey into 1d arr
//  var newarr= [...arr1, [...arr2] ]
//  console.log(newarr.flat() );

// 6 flatmap()-  it combination of flat and map methods, initialy maps each array element  through a mapping funtion , then flate array

//  var newarr= [...arr1, [...arr2] ]
//  console.log(newarr.flate().flatMap((x)=>{
//    console.log(x);
// return x*2 }));

// 8 filter() - filter element from arrays

// array.filter(callback(currentvalue,index,arr),thisArg)
// var newarr= [...arr1, ...arr2]
// console.log(newarr.filter((x)=>{return x%2!==0}))

//  9 Find() - it return first element where condtion setifyed

// stntext - array.find(callback(value,index,arr),thisArg)

// var newarr= [...arr1, ...arr2]
// console.log(newarr.find((x)=>{return x%2==0}))

// 10 forEach() - work for looping each of array element

// var products = [
//   {
//     id: 1,
//     title: "Samsung S21",
//     price: "2500",
//   },
//   {
//     id: 2,
//     title: "Samsung M21",
//     price: "2300",
//   },
//   {
//     id: 3,
//     title: "Redmi 9",
//     price: "3500",
//   },
//   {
//     id: 4,
//     title: "Iphone 12",
//     price: "90500",
//   },
//   {
//     id: 5,
//     title: "Samsung S21",
//     price: "2500",
//   },

// ];

// products.forEach((x)=>console.log(x.title ))

// 10 include()- check given value contain in array or not

// var arr1 = [1, 2, 3, 4, 5];
// var arr2 = [6, 7, 8, 9, 10];

// var narr= [...arr1, ...arr2]
// console.log(narr.includes(10));

//  11 isArray() - check given array    , is array or not
// var arr1 = [1, 2, 3, 4, 5];
// console.log(Array.isArray(arr1));

// 12 join()- joints the elements of array as a string

// var arr1 = [1, 2, 3, 4, 5];
// var arr2 = [6, 7, 8, 9, 10];

// console.log(arr1.join());

// 13 map() - work for looping each of array element

// var products = [
//   {
//     id: 1,
//     title: "Samsung S21",
//     price: "2500",
//   },
//   {
//     id: 2,
//     title: "Samsung M21",
//     price: "2300",
//   },
//   {
//     id: 3,
//     title: "Redmi 9",
//     price: "3500",
//   },
//   {
//     id: 4,
//     title: "Iphone 12",
//     price: "90500",
//   },
//   {
//     id: 5,
//     title: "Samsung S21",
//     price: "2500",
//   },

// ];

// products.map((x)=>console.log(x.title ))

//  13 pop- remove element end of the array

// var arr1 = [1, 2, 3, 4, 5];
// console.log(arr1.pop());

//  14 push-add element end of the array

// var arr1 = [1, 2, 3, 4, 5];
// var a =arr1.push('ganu')
// console.log(a);
// console.log(arr1);

// 15 reverse()- reverse of an array

// var arr1 = [1, 2, 3, 4, 5];
// console.log(arr1.reverse());

// 16 Reduce()- it reduce the array into single value by executing a reduce funtion

// syntex- arr.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)

// var re = [1,2,3,4,5,6]

// var arr = re.reduce((accum, cvalue )=>{
// return cvalue+accum

// })
// console.log(arr);

//   17 Some()- it check array atleast one single value setisfy the condition
// return true

// var re = [1,34,5,6]
// const fun=()=>{
//   return re>1
// }
// console.log(re.some(fun));

// 18 shift()- remove first element from array

// var arr1 = [1, 2, 3, 4, 5];
// var a =arr1.shift()
// console.log(a);
// console.log(arr1);

// 19 unshift() - add first element from array
// var arr1 = [1, 2, 3, 4, 5];
// var a =arr1.unshift('gannu')
// console.log(arr1);

// 21 slice() - break array accoring to your condition , return new array

// var arr1 = [1, 2, 3, 4, 5];
// console.log(arr1);
// var a =arr1.slice(2,4)
// console.log(a);

//  22 splice()- add and remove element from the array

// syntex - array.splice(start,delete,element1,element2,?,elementn)

// var arr1 = [1, 2, 3, 4, 5];

// ***************************************  Practice Question *************************************************************

// Remove the last item in the array.
// Add two new names to the end of the array.
// Go over each item in the array and add its index number after the name inside parentheses, for example Ryu (0). Note that we don't teach how to do this in the Arrays article, so you'll have to do some research.
// Finally, join the array items together in a single string called myString, with a separator of "-".

// let myArray = [
//   "Ryu",
//   "Ken",
//   "Chun-Li",
//   "Cammy",
//   "Guile",
//   "Sakura",
//   "Sagat",
//   "Juri",
// ];
// myArray.push("ganu");
// myArray.push("ganpat");
// myArray.pop("ganpat");
// console.log(myArray);

// myArray.map((x, id)=>{
// return console.log(` ${x}(${id})` );
// })
// console.log(myArray.join("-"));

// Q1 Define a function called cleanNames that accepts an array of strings containing additional space characters at the beginning and end. The cleanNames() function should use the array map method to return a new array full of trimmed names. For example:

// o/p  ["avengers", "captain_america", "ironman", "black panther"]

// const cleanNames = (a) => {
//   return a.map((x) => x.trim());
// };

// console.log(
//   cleanNames([
//     " avengers",
//     "   captain_america",
//     "ironman   ",
//     " black panther   ",
//   ])
// );

// Q3 Square and sum the array elements using the arrow function and then find the average of the array.

// const sqrt=(x)=>{

// return x.reduce((acc , cval)=>{
// return (acc+cval)/x.length
// })

// }

// console.log(sqrt([25, 45, 55, 77, 88, 919]));

// Create a new array using the map function whose each element is equal to the original element plus 4.

// Solution

//  const  no=(x)=>{
//      return   x.map((val)=>{
// return val+4
//  })

//  }
//  console.log(no([4,-4, 12,-112, 21,32]));

// Q5 From the array of numbers, choose even double even numbers and compute the sum using Array's filter, map and reduce methods.

// const no = (val) => {
//   return val
//     .filter((x) => {
//         return   x % 2 == 0;
//     })
//     .map((y) => y * y)
//     .reduce((a, cv) => a+ cv);
// };
// console.log(no([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));




// Q7 Use the .map() method on the heros array to return a new array.

// The new array should rename the 'name' key to 'hero'.
// The 'name' key should not appear in the new array.
// The new array should have a new key added called (id).
// The key 'id' should be based on the index.

const heros = [
  { name: 'Spider-Man' },
  { name: 'Thor' },
  { name: 'Black Panther' },
  { name: 'Captain Marvel' },
  { name: 'Silver Surfer' }
];
// EXPECTED OUTPUT (array of objects): 
// [
//   { id: 0, hero: 'Spider-Man' }, 
//   { id: 1, hero: 'Thor' }, 
//   { id: 2, hero: 'Black Panther' }, 
//   { id: 3, hero: 'Captain Marvel' }, 
//   { id: 4, hero: 'Silver Surfer' }
// ]

// const fun=(x, )=>{
// return x.map((y , id) =>{return ` id: ${id}  hero: ${y.name}`})
// }

// console.log(fun(heros));



// Q9 Starting with an array containing the numbers 1 through 10, use filter, map, and reduce to produce the following. Use console.log to display the results.

// An array of odd numbers.
// An array of numbers divisible by 2 or 5.
// An array of numbers divisible by 3 and then squared those numbers.
// The sum of the following: square the numbers divisible by 5.


// const fun=(value)=>{
//     return  value.filter((x)=>x %2!==0)}

//  div two or five
    // const fun=(value)=>{
    // return  value.filter((x)=>x %2==0  ||  x%5==0 ) }
 



// console.log(fun([1,2,3,4,5,6,7,8,9,10]));




var characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

// MAP
// Get an array of all names

// Get an array of all heights
// Get an array of objects with just name and height properties
// Get an array of all first names

// const mapcall=(x)=>{
// return x.map((y)=>{
// return ` name:${y.name} , height :${y.height} , { name:${y.name} hieght:${y.height}   } `

// })
// } 

// console.log(mapcall(characters));



// REDUCE
// Get the total mass of all characters
// Get the total height of all characters
// Get the total number of characters in all the character names
// Get the total number of characters by eye color (hint. a map of eye color to count)

// var l=0;


// const reducecall=(x)=>{
//     return x.reduce((a, cv)=>{
//         return      a + cv.mass


//     } , characters) 
// } 
    
//     console.log(reducecall(characters));
    



// FILTER
// Get characters with mass greater than 100
// Get characters with height less than 200
// Get all male characters
// Get all female characters


const Filtercall=(x)=>{
return x.filter((y)=>{
    return  console.log( ` ${y.mass >100}`);
})
} 

console.log(Filtercall(characters));




// SORT
// Sort by name
// Sort by mass
// Sort by height
// Sort by gender
// EVERY


// Does every character have blue eyes?
// Does every character have mass more than 40?
// Is every character shorter than 200?
// Is every character male?


// SOME
// Is there at least one male character?
// Is there at least one character with blue eyes?
// Is there at least one character taller than 200?
// Is there at least one character that has mass less than 50?

