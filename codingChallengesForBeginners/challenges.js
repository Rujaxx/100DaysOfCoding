// Coding challenge #1: Print numbers from 1 to 10
for(let i = 1 ; i <= 10; i++){
    console.log(i)
}

//Coding challenge #2: Print the odd numbers less than 100

for (let i = 0; i < 100; i++){
    if(i % 2 == 1) console.log(i)
}

//Coding challenge #3: Print the multiplication table with 7

for (let i = 1 ; i <= 10 ; i++){
    let table = '7 * ' + i + ' = ' + 7 * i;
    console.log(table)
}

//Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10

    
for (let i=1;i<=10;i++){
        console.log("table of " + i)
        printTable(i);    
    }

    
function printTable(n){
    for (let i=1;i<=10;i++){
        let table = n +" *" + i + ' = '+n * i;
        console.log(table)
    }
    }

//Coding challenge #5: Calculate the sum of numbers from 1 to 10
    
let sum = 0;
for (let i = 1; i <=10; i++){
        sum +=i;
    }
console.log(sum)

// Coding challenge #6: Calculate 10!

let factorial = 1;
for (let i = 1; i <= 10; i++){
    factorial *= i;
}

console.log(factorial)

// Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30

let sum = 0;
for (let i = 11; i <= 30 ; i++){
    if (i % 2 == 1) sum += i
}
console.log(sum)

//Coding challenge #8: Create a function that will convert from Celsius to Fahrenheit

function celsiusToFarheneit(c){
    let farheniet = (c * 1.8) + 32;
    console.log(farheniet)
}

celsiusToFarheneit(1)

//Coding challenge #9: Create a function that will convert from Fahrenheit to Celsius

function farheneitToCelsius(f){
    let celsius = (f - 32) / 1.8;
    console.log(celsius)
}

farheneitToCelsius(1)

//Coding challenge #10: Calculate the sum of numbers in an array of numbers

function sumArray(arr){
    let sum = 0;
    arr.forEach((x,i) => sum+=x)
    console.log(sum)
}

let f =[5,10,10,7]
sumArray(f)

//Coding challenge #11: Calculate the average of the numbers in an array of numbers

function sumArray(arr){
    let sum = 0;
    let size = arr.length
    arr.forEach((x,i) => sum+=x)
    console.log(sum/size)
}

let f =[5,10,10,7]
sumArray(f)

//Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers.

function postiveVibes(arr) {
    output = []
    arr.forEach((x) => {
        if (x >= 0) output.push(x)
    })
    console.log(output)
}

let ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

postiveVibes(ar)

 //Challenge #12 alternative solutions
function getPositives(ar)
{
    return ar.filter(el => el >= 0)
}

let ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
console.log(getPositives(ar))

//Coding challenge #13: Find the maximum number in an array of numbers

function maxNumber(arr){
    let max = arr[0]
    arr.forEach((el) => {
        if(el > max)  return  max = el
    })
    console.log(max)
    }

let ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
maxNumber(ar)

//Coding challenge #14: Print the first 10 Fibonacci numbers without recursion
    let f0 = 0;
    console.log(f0)
    
    let f1 = 1;
    console.log(f1)
    
    for(let i = 2; i < 10; i++)
    {
        let fi = f1 + f0;
        console.log(fi);
        
        f0 = f1;
        f1 = fi;
    }

// Coding challenge #15: Create a function that will find the nth Fibonacci number using recursion
let n = 9;
     
    // function returns the Fibonacci number
    function fib(n) {
    if (n <= 1)
        return n;
    return fib(n-1) + fib(n-2);
}
  
    //function call
    console.log(fib(n));

//Coding challenge #16: Create a function that will return a Boolean specifying if a number is prime
function isPrime(n) {
    if(n === 1){
        return false
    }else if(n === 2){
        return true
    }else{
        let maxDiv = Math.sqrt(n)
        for( let i = 2; i <= maxDiv; i++ ){
            if(n % i === 0) return false
        }
        return true
    }
}

console.log(isPrime(17))