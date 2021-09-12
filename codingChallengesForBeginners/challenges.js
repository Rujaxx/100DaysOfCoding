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
    if(n <= 1){
        return false
    }else{
        let maxDiv = Math.sqrt(n)
        for( let i = 2; i <= maxDiv; i++ ){
            if(n % i === 0) return false
        }
        return true
    }
}

console.log(isPrime(17))

//Coding challenge #17: Calculate the sum of digits of a positive integer number
function sumDigits(n){
    let x = n.toString()
    let sum = 0
    for (let i of x) {
      let add = parseInt(i)
        sum+=add
    }
    return sum
}

console.log(sumDigits(65656))

//Coding challenge #18: Print the first 100 prime numbers
function primeNumbers(nPrimes)
{
   for(let i=0;i<nPrimes;i++){
        if(isPrime(i)){
        console.log(i)
        }
   }
}

function isPrime(n) {
    if(n <= 1){
        return false
    }else{
        let maxDiv = Math.sqrt(n)
        for( let i = 2; i <= maxDiv; i++ ){
            if(n % i === 0) return false
        }
        return true
    }
}

console.log(primeNumbers(10))


//Coding challenge #19: Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"

function printPrimes(nPrimes,startAt)
{
  let arr =[]
  let size  = startAt + nPrimes
   for(let i=startAt;i < size;i++){
        if(isPrime(i)){
        arr.push(i)
        }
   }
  return arr
}

function isPrime(n) {
    if(n <= 1){
        return false
    }else{
        let maxDiv = Math.sqrt(n)
        for( let i = 2; i <= maxDiv; i++ ){
            if(n % i === 0) return false
        }
        return true
    }
}

console.log(printPrimes(10,100))

//Coding challenge #20: Rotate an array to the left 1 position

function rotateLeft(arr){
    let first = arr.shift()
    arr.push(first)
    return arr
}

console.log(rotateLeft([1,2,3]))

//Coding challenge #21: Rotate an array to the right 1 position

function rotateRight(arr){
    let last = arr.pop()
    arr.unshift(last)
    return arr
}

console.log(rotateRight([1,2,3]))


// Coding challenge #22: Reverse an array
function reverseArray(arr) {
    let result = []
    let end = arr.length - 1
    for (let i = end ; i >= 0; i--){
        result.push(arr[i])
    }
    return result
}

console.log(reverseArray([1,2,3]))

// Coding challenge #23: Reverse a string
function reverseString(str) {
    let result = ""
    let end = str.length - 1
    for (let i = end ; i >= 0; i--){
        result += str[i]
    }
    return result
}

console.log(reverseString("rujan"))

// Coding challenge #24: Create a function that will merge two arrays and return the result as a new array
function mergeArrays (arr1,arr2){
    let mergedArray = []
    arr1.forEach((x)=> mergedArray.push(x))
    arr2.forEach((x)=> mergedArray.push(x))
    return mergedArray
}

let ar1 = [1, 2, 3];
let ar2 = [4, 5, 6];

console.log(mergeArrays(ar1, ar2))


// Coding challenge #25: Create a function that will receive two arrays of numbers as arguments and 
// return an array composed of all the numbers that are either in the first array or second array but 
// not in both
function mergeArrays (arr1,arr2){
    let mergedArray = []
    arr1.forEach((x)=>{
        if(!arr2.includes(x))
        return mergedArray.push(x)
    }
    )
    arr2.forEach((x)=>{
        if(!arr1.includes(x))
        return mergedArray.push(x)
    }
    )
    return mergedArray
}

let ar1 = [1, 2, 3, 10, 5, 3, 14];
let ar2 = [1, 4, 5, 6, 14];
console.log(mergeArrays(ar1, ar2))

// Coding challenge #26: Create a function that will receive two arrays and will return an array with 
// elements that are in the first array but not in the second
function mergeArrays (arr1,arr2){
    let mergedArray = []
    arr1.forEach((x)=>{
        if(!arr2.includes(x))
        return mergedArray.push(x)
    }
    )
    return mergedArray
}

let ar1 = [1, 2, 3, 10, 5, 3, 14];
let ar2 = [1, 4, 5, 6, 14];
console.log(mergeArrays(ar1, ar2))

//Coding challenge #27: Create a function that will receive an array of numbers as argument and will
//  return a new array with distinct elements
function distinctArray(arr){
    let newArr = []
      arr.forEach((x)=> {
          
          if(!newArr.includes(x))
          return newArr.push(x)
      }
      )
      return newArr
  }
  
  let ar1 = [1, 2, 3, 4, 1, 5, 3, 5];
  console.log(distinctArray(ar1))


//   Coding challenge #28: Calculate the sum of first 100 prime numbers
function primeSum(x) {
    let sum = 0
    for(let i = 0; i <= x; i++){
        if(isPrime(i)) {
            sum += i
        }else {
         sum += 0
    }
}
return sum
}

function isPrime(n) {
    if(n <= 1){
        return false
    }else{
        let maxDiv = Math.sqrt(n)
        for( let i = 2; i <= maxDiv; i++ ){
            if(n % i === 0) return false
        }
        return true
    }
}
console.log(primeSum(100))

// Coding challenge #29: Print the distance between the first 100 prime numbers
function printDistances(n)
{
    let lastPrime = 2;
    let i = lastPrime + 1;
    let foundPrimes = 1;
    
    while(foundPrimes < n)
    {
        if (isPrime(i))
        {
            console.log(i - lastPrime, "\t", i, " - ", lastPrime);

            foundPrimes++;
            lastPrime = i;
        }
        
        i++;
    }
}

function isPrime(n) {
    if(n <= 1){
        return false
    }else{
        let maxDiv = Math.sqrt(n)
        for( let i = 2; i <= maxDiv; i++ ){
            if(n % i === 0) return false
        }
        return true
    }
}
console.log(printDistances(100))

// Coding challenge #30-a: Create a function that will add two positive numbers of indefinite size.
//  The numbers are received as strings and the result should be also provided as string.

function add(sNumber1, sNumber2)
{
    let s = "";
    let carry = 0;
    
    let maxSize = Math.max(sNumber1.length, sNumber2.length);
    
    for(let i = 0; i < maxSize; i++)
    {
        let digit1 = digitFromRight(sNumber1, i);
        let digit2 = digitFromRight(sNumber2, i);
        
        let sum = digit1 + digit2 + carry;
        let digitSum = sum % 10;
        carry = sum >= 10 ? 1 : 0;
        
        s = digitSum.toString() + s;
    }
    
    if (carry > 0)
        s = carry + s;
    
    return s;
}

function digitFromRight(s, digitNo)
{
    if (digitNo >= s.length)
        return 0;
        
    let char = s[ s.length - 1 - digitNo ];
    return parseInt(char);
}

let n1 = "2909034221912398942349";
let n2 = "1290923909029309499";
let sum = add(n1, n2);

console.log(n1, "\n", n2, "\n", sum);


// Coding challenge #32. Create a function that will capitalize the first letter of each word in a text
function capitalizeWords(text)
{
    let text2 = "";
    
    for(let i = 0; i < text.length; i++)
    {
        let currChr = text[i];
        let prevChr = i > 0 ? text[i - 1] : " ";
        
        if (!isSeparator(currChr) && isSeparator(prevChr))
        {
            currChr = currChr.toUpperCase();
        }
        
        text2 += currChr;
    }
    
    return text2;
}

function isSeparator(c){
    let separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
    return separators.includes(c)
}

console.log(capitalizeWords("Create a function that will capitalize the first letter of each word in a text"))

// Coding challenge #33. Calculate the sum of numbers received in a comma delimited string
function sumDeci(n){
    let sum = 0
    ar = n.split(",");
    for (let i of ar){
        sum += parseFloat(i)
    } 
    return sum
}

console.log(sumDeci("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"))

//Coding challenge #34. Create a function that will return an array with words inside a text
function getWords(text)
{
    let startWord = -1;
    let ar = [];
    
    for(let i = 0; i <= text.length; i++)
    {
        let c = i < text.length ? text[i] : " ";

        if (!isSeparator(c) && startWord < 0)
        {
            startWord = i;
        }
        if (isSeparator(c) && startWord >= 0)
        {
            let word = text.substring(startWord, i);
            ar.push(word);
            
            startWord = -1;
        }
    }

    return ar;
}

function isSeparator(c){
    let separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
    return separators.includes(c)
}

console.log(getWords("Create a function that will capitalize the first letter of each word in a text"))



// Coding challenge #35. Create a function to convert a CSV text to a “bi-dimensional” array

let data = "John;Smith;954-000-0000\nMich;Tiger;305-000-0000\nMonique;Vasquez;103-000-0000";

function csvToArray(data)
{
    let arLines = data.split("\n");

    for(let i = 0; i < arLines.length; i++)
    {
        let arLine = arLines[i].split(";");
        arLines[i] = arLine;
    }
    
    return arLines;
}

let ar = csvToArray(data);
console.log(JSON.stringify(ar));

// Coding challenge #36. Create a function that converts a string to an array of characters

function getChars(s)
{
    return Array.from(s);
}

console.log(getChars("I like JavaScript"));



// Coding challenge #37. Create a function that will convert a string in an array containing the ASCII codes of each character
function getCharCodes(s)
{
    let ar = [];
    
    for(let i = 0; i < s.length; i++)
    {
        let code = s.charCodeAt(i);
        ar.push(code);
    }
    
    return ar;
}

console.log(getCharCodes("I like JavaScript"));


// Coding challenge #38. Create a function that will convert an array containing ASCII codes in a string

function codesToString(ar)
{
    return String.fromCharCode(...ar);
}

console.log(codesToString([73,32,108,105,107,101,32,74,97,118,97,83,99,114,105,112,116]));


// Coding challenge #39. Implement the Caesar cypher


// Decrypt a message by using the same encrypt function
// ... but using the inverse of the key (e.g. rotate in the other direction)
function decrypt(msg, key)
{
    return encrypt(msg, key * -1);
}

// Function will implement Caesar Cipher to
// encrypt / decrypt the msg by shifting the letters
// of the message acording to the key
function encrypt(msg, key)
{
    let encMsg = "";

    for(let i = 0; i < msg.length; i++)
    {
        let code = msg.charCodeAt(i);

        // Encrypt only letters in 'A' ... 'Z' interval
        if (code >= 65 && code <= 65 + 26 - 1)
        {
            code -= 65;
            code = mod(code + key, 26);
            code += 65;
        }

        encMsg += String.fromCharCode(code);
    }

    return encMsg;
}


// Modulo function: n mod p
function mod(n, p)
{
    if ( n < 0 )
        n = p - Math.abs(n) % p;

    return n % p;
}

let text = "I LOVE JAVASCRIPT";
let textEnc = encrypt(text, 13);
let textDec = decrypt(textEnc, 13);

console.log(text);
console.log(textEnc);
console.log(textDec);