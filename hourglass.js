let arr = [
  [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 1, 0, 0, 0, 0 ],
  [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 0, 2, 4, 4, 0 ],
  [ 0, 0, 0, 2, 0, 0 ],
  [ 0, 0, 1, 2, 4, 0 ]
]



function maxHourGlass(arr){
    let len = arr.length
    let out = 0
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            let sum = 0
            sum += arr[i][j];
            sum += arr[i][j+1];
            sum += arr[i][j+2];
            sum += arr[i+1][j+1];
            sum += arr[i+2][j];
            sum += arr[i+2][j+1];
            sum += arr[i+2][j+2];
            if (sum > out){
                out = sum;
            }
        }
    }
    return out
}

console.log(maxHourGlass(arr))