function collectOdd(arr) {
    let result = [];
    if(arr.length === 0)
        return result ;
    if(arr[0] %2 !== 0)
        result.push(arr[0]);
    return result.concat(collectOdd(arr.slice(1)))
}
console.log(collectOdd([1,3,4,8])) ;