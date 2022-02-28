// Difference Between Static and Const in JavaScript

// A static variable is a class property that is used in a class and not on the instance of the class. The variable is stored on the data segment area of the memory,

// A const variable is a variable that has a fixed value and remains the same throughout the program. A property of the const variable is that we cannot change or modify its value throughout the program. It is because as soon as we make a const value, the compiler gets informed that the value is fixed

//  diffrence bw HOF and Callback

// callback =  ek function ko dusre funtion me as an argument pass krna callback

// HOF= ek function ko dusre me as an agrgument accept krna Hof khlata he


const add=(a,b)=>{
    return   a+b
}
const sub=(a,b)=>{
    return   a-b
}
const multi=(a,b)=>{
    return   a*b
}
const devide=(a,b)=>{
    return   a/b
}


const calculator = (n1, n2, op) => {
    return op(n1, n2)
};
console.log(calculator(12,12 , add));
console.log(calculator(12,12, sub));
console.log(calculator(12,12, multi));
console.log(calculator(12,12, devide));


//  add is callback function bcz vo calculator me as an argument pass ho rha he
//  calculator is HOF  bcz vo add, sub , multi devide ko as an agrgument accept kr rha h