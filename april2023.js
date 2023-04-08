// // Given an array of integers, return a new array where each element in the new array is the number of smaller elements to the right of that element in the original input array.

// // For example, given the array [3, 4, 9, 6, 1], return [1, 1, 2, 1, 0], since:

// //     There is 1 smaller element to the right of 3
// //     There is 1 smaller element to the right of 4
// //     There are 2 smaller elements to the right of 9
// //     There is 1 smaller element to the right of 6
// //     There are no smaller elements to the right of 1

// let onYourRight = (arr) => {
//     let n = arr.length
//     let output = []
//     for(let i = 0; i < n; i++){
//         if(i === (n-1) ){
//             output.push(0)
//             break;
//         }
//         let count = 0;
//         let j = i + 1
//         while(j<n){
//             if(arr[i]>arr[j]){
//                 count += 1;
//             }
//             j++
//         }
//         output.push(count)
//     }
//     console.log(output)
// }

// onYourRight([3, 4, 9, 6, 1])


// // Given an array of integers, find the maximum XOR of any two elements.

// function maxXor(arr)
// {
 
//     let maxXor = 0;
//     let n = arr.length
//     // Calculating xor of each pair
//     for (let i = 0; i < n; i++) {
//         let j = i + 1
//         while(j<n){
//             maxXor = Math.max(maxXor,arr[i] ^ arr[j]);
//             j++
//         } 
           
//     }
//     console.log(maxXor);
// }

// let arr =  [ 25, 10, 2, 8, 5, 3 ];
// maxXor(arr)


// Calculate the angle between hour hand and minute hand

function clockAngle(h,m){
    if(h == 12){
        h = 0
    }

    if(m == 60){
        m = 0
        h += 1
        if(h>12){
            h=h-12
        }
    }
    let hourAngle = 0.5 * (h * 60 + m);
    let minuteAngle = 6 * m;

    // calculate angle
    let outputAngle = Math.abs(hourAngle - minuteAngle);
 
    // Return the smaller angle of two possible angles
    outputAngle = Math.min(360 - outputAngle, outputAngle);
 
   console.log(outputAngle);

}

// clockAngle(11,60)
// clockAngle(12,60)
// clockAngle(3,30)


// Given an array of integers where every integer occurs three times except for one integer, which only occurs once, find and return the non-duplicated integer.

// For example, given [6, 1, 3, 3, 3, 6, 6], return 1. Given [13, 19, 13, 13], return 19.

let findNonDuplicate = (arr) =>{
let obj = {}
for(let x of arr){
  if(!obj.hasOwnProperty(x)){
      obj[x] = 1
  }else{
    obj[x] = obj[x]+1
  } 
}

let output = Object.keys(obj).find(key => obj[key] === 1);
return parseInt(output)
}
let exArr1= [6, 4, 3, 3, 3, 6, 6]
let exArr2= [13, 19, 13, 13]

console.log(findNonDuplicate(exArr1))

// 
let sortCount = (arr) =>{
    for(let x of arr){
        let strArr = x.split("")
        let l = x.length
        let count = 0
        for(let i=0; i < l; i++){
            if(x ==l){
                break;
            }
          if(x[i]<x[i+1]){
            count++
          }else{
            count--
          }  
        }
      console.log(count)
    }
}

sortCount(["hello", "geeks"])