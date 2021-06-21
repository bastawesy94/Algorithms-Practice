/*
    1 - it accepts only sorted numeric array .
    EX : [5,6,7,8,9,10,11,12] 
*/
const binarySearch =(arr , item)=>{
    let left = 0;
    let right = arr.length-1
    middle = Math.ceil((left + right)/2)
        while(left <right ){
        if(arr[middle] === item)
            return middle;
        else if(item < arr[middle]){
            right = middle-1;
        }
        else if(item > arr[middle]){
            left = middle+1;
        }
        middle = Math.ceil((left + right)/2)
    }
    return -1;
} 
console.log(`index of item is : ${binarySearch([5,6,7,8,9,10,11,12] , 13)}`)