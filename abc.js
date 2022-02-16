//  Clone Arrey

// const arr = [5, 6, 7, 8, 9, 2, 6, 3, -4, 0, -9, -6];
// const clonArr= arr
// const cloneArr2=arr.slice(0)
// console.log(cloneArr2);

//

// Convert arrey into string

// let  myColor = ["Red", "Green", "White", "Black"];
// let mystr = myColor + ' '
// let mystr2= myColor.toString()
// let mystr3= myColor.join(' ')
// console.log(mystr3);

// const sortArray = (arr) => {
//   let negtive = [ ];
//   let positive = [ ];
//   for (i = 0; i <= arr.length-1 ; i++) {
//     if (arr< 0) {
//         console.log( negtive.push(arr[i]));
//     } else {
//        console.log(positive.push(arr[i]))
//     }
// }
// console.log( positive);
// };
// sortArray([-1, 2, 1, 4, -2, 0, 9, 7, 4, -1]);

// const products = [
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
//   {
//     id: 6,
//     title: "Redmi 9",
//     price: "3500",
//   },
//   {
//     id: 7,
//     title: "Samsung S21",
//     price: "2500",
//   },
//   {
//     id: 8,
//     title: "Iphone 12",
//     price: "90500",
//   },
//   {
//     id: 9,
//     title: "Samsung S21",
//     price: "2500",
//     key: function () {
//       console.log(this.products);
//     },
//   },
// ];

// console.log(products[8].key())

// products.map((x)=>{
// return console.log(x.key());
// })

// const a= products.slice(0).sort((a, b)=>{
// return b.price-a.price
// })

// console.log(a);

// const cart = products.every((price)=>price.price<100000 )

// console.log(cart);

// const reverse= (a)=>{
// //  return console.log( a.reverse());
// let  n = a+ ""
// return n

// }
// // reverse([32243])
// reverse(32243)

// const pallan=(d)=>{
//   var array1 = d.match(/\w[a-z]{0,}/gi);
//   // console.log(array1);
// let result =array1[0]
// for(x=0 ; x< array1.length ; x++){
// if(result.length < array1[x].length )
// return result= array1[x]
// }
// return result

// }
// console.log(pallan( ' hello worlddd ganpat'  ));

// const fun1=(call)=> {
//   call()
// }

// const fun2=()=>{
//   console.log('funation2 calling');
// }

// fun1(fun2)

// const unzip=(a)=>{
// for(i=0 ; i <=a.length ; i++){
// }

// }
// unzip([['a', 1, true], ['b', 2, false]])

// ===============================

// ARRAY

// const Clonearr = (a) => {
//   let b = [...a];
//   let c = a.slice(0);

//   console.log(
//     "from method 1",
//     a.map((x) => {
//       return x;
//     })
//   );

//   console.log("from method 2", c, a);

//   console.log("from method 3", a, b);
// };

// Clonearr([0, 1, [1, 2]]);

// const sqrt=(a)=>{

//   var value=0
//   for (let index = 0; index < a.length; index++) {
//    value +=  Math.pow(a[index], 2)
//   }
//   return value
// }
// console.log(sqrt([1,2,3, 4 ]));

// ==============================================================================================================================
