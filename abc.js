// const key1='objkey1'

// const key2='objkey2'

// const value1="myvalue1"
// const value2="myvalue2"

// const obje1={
// [key1]: value1,
// [key2]: value2

// }  



// console.log(obje1);

// student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 }
//    console.log(student);
// let del= delete student.rollno

// console.log(del);
// console.log(student);


// student = {
//         name : "David Rayy",
//         sclass : "VI",
//         rollno : 12 }
// //  console.log(student);

// console.log(Object.objsize(student))


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


// for(i=0 ; i< library.length ; i++){
// const {author, title, readingStatus} = library[i]


// if(readingStatus === true){
//     console.log(`Alredy Ready ${author} , ${title}`);
// }
// else{
//     console.log(` yout still need to read ${author}, ${title} `);

// }

// }


// const var1 = 'dog';
// console.log([...var1 ]);


// let date = new Date().toLocaleTimeString([], {hour:"2-digit" , minute:'2-digit' ,second:'numeric'})
// console.log(date);




// const areaOfCircle =(radius)=>{
//     let pi= 3.14;
// let area= pi*radius*radius
// let peramtr= 2*pi*radius
// return alert(` the area of circle is ${area} and the paramiter are ${       peramtr}`);
// }
// areaOfCircle(10)


// const abc =(a)=>{

// return a.slice(0,1)
// }
// console.log(abc('ganu'));


// const abc =(a , target)=>{
// for ( let i=0 ; i<a.length ; i++)
// if (a[i]===target){
//     // console.log(`value is find and index is  ${i}`);
//     return i

// }return -1
// }
// console.log(abc([1,4,23,4,65,3] , 3))



// const reverse = (no)=>{
//       no = no + ""
// console.log(no.split('').reverse().join(""))



// }
// reverse(123456)


// const pallandrom = (a)=>{
//   const str =a.split('').reverse().join("")
// if(str === a){
// return true
// }
// return -1

// }
// console.log(pallandrom("nurses run"));





// const sort =(str)=>{
// //  str1= str.slice(0,1).toUpperCase()
// //  str2= str.slice(1,  )
// //   return str1+str2   

// let str1= str.split('')
// arr=[]

// for(x=0 ; x <str1.length; x++ ){
//  arr.push(str1[x].charAt(0).toUpperCase() +str1[x].slice(1))
// }
// return arr.join('')


// return str1











// const funA=(b)=>{

//     b()
// }

//     const funB=()=>{
//         console.log('fun b');
//     }



//     funA(funB);

// ////////









//     var mainFun=(a , b ,c )=>{
//         a() , b() , c()

//     }    

//         const FunA=()=>{
//             console.log('calling FunA');

//         }
//         const funB=()=>{
//             console.log('calling FunB');

//         }

//         const funC=()=>{
//             console.log('calling FunC');

//         }    









// mainFun(FunA , funB , funC)




// const funA=(a)=>{
//     let b= a.sort()
// let c = b.last
//     console.log(c);
// }

// funA(['india', 'austrelia' , 'newZeelend' , 'ing'])


// const finde=(str, char)=>{
// let position=0
//     for(i=0 ; i<str.length; i++){
// if(str.charAt(i)==char){
// position += 1
// }
// }
// return position


// }
// console.log(finde('ahamdabaaaaaaaaaaaaaaaaad' , 'a'))



// let Passgen=(id)=>{
// let charList="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" ;
// let list =""
// for (i=0 ; i<id ; i++ ){
//  list += charList.charAt(Math.floor(Math.random() * charList.length))    
// }
// return list
// }
// console.log(Passgen(10))


// let powe=(base,po)=>{
// // return Math.pow(base ,po)
// for(i=0 ; i<po ; i++){
//      base= po*base
// } 
// return base
// }
// console.log(powe(4 , 2));

// function amountTocoins(amount, coins) 
// {
//  if (amount === 0) 
//   {
//      return [];
//    } 
//  else
//    {(am
//      if ount >= coins[0]) 
//        {
//         left = (amount - coins[0]);
//         return [coins[0]].concat( amountTocoins(left, coins) );
//         } 
//       else
//         {
//          coins.shift();
//          return amountTocoins(amount, coins);
//         }
//     }
// } 
// console.log(amountTocoins(16, [ 10, 5, 2,1]));





// const divideAmmount = (ammo, coins) => {
//     console.log(coins[0]);
//     if (ammo === 0) {
//         return []
//     } else {
//         if (ammo >= coins[0]) {
//             letAm = ammo - coins[0]
//             return [coins[0]].concat(divideAmmount(letAm, coins))

//         } else {
//             coins.shift()
//             return divideAmmount(letAm, coins)

//         }
//     }
// }

// console.log(divideAmmount(100, [20, 10, 5, 2, 1]));



// const add=(...b)=>{
// let total=0
// for(let n of b){
//  total= total+n
// }
// return total
// } 

// console.log(add(1,1,1,1,1,2));









// const fun1=(name)=>{
// console.log(`fun1 1 ${name}`);
// }

// const fun2=(callback)=>{
// console.log('fun2 calling');
// callback('ganpat')
// }


// fun2(fun1)



// const fun1=()=>{
//  fun2=()=>{
// console.log('fun2 calling');
// }
// return fun2()
// }

// let a=fun1()




const arr=[3,4,5,6,7,2]

// arr.forEach((x, id)=>{
// console.log(`the ${id} and The Number is ${x} and multi is ${x*2}`);
// })


// arr.map((x ,id ,arrey)=>{
// return console.log(id, x*2 , arrey);



// })



// let a =arr.filter((x)=>{
// return(x%2!==0);

// })
// console.log(a);

// arr.reduce(()=>{
    
// })



// const tellFortune = (n, j, w, c)=>{
// return `You will be ${n}  in ${j}, and married to ${w} with ${c} kids.`
// }
// console.log(tellFortune("Ganpat" , "WebDev" ,'x' , '3'));
// console.log(tellFortune("Ram" , "FrontEndWebDev" ,'anjali' , '3'));
// console.log(tellFortune("Yesh" , "MernStackDev" ,'x' , '5'));
// console.log(tellFortune("Aanand" , "JavaDev" ,'x' , '11'));



// var  pi= 3.14;
// let circle=(r)=>{
// let Curcumference= 2*pi*r    
// let area= pi*r*r    
// return console.log(`circle curcumference are ${Curcumference} and area is ${Math.round(area)}`);
// }

// circle(12)

// let choice=(arr)=>{
// for(i=0; i<arr.length ;i++){
//     return Text = `My first Choice ${arr[i]}`
// }
// return Text
// }
// console.log(choice(["colors", "presidents" , "whatever"]));




// const guessLetter =(newarr) =>{
// var oldArr = ['a', 'e' ,'o' , 'u' , 'i'];
// for(i=0 ; i<=oldArr.length; i++){
// if( oldArr[i]==newarr ){
//     return oldArr[i]=  newarr
// }
// else return 0


// }}
// console.log( guessLetter('l'));


const obj={
name:'ganpat',
fun: function(){
return  this.name
}

}

console.log(obj.fun());

