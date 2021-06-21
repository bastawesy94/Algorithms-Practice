const linearSearch = (arr , item)=>{
    for(let i=0 ; i<arr.length ; i++){
        if(item === arr[i]){
            return i;
        }
    }
    return -1;
}

console.log(`index of item is : ${linearSearch([1,5,6,7,9,10] , 10)}`)