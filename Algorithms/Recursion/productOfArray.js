function productOfArray(arr) {
    let result = 1;
    
    function productHelper(arr) {
        if(arr.length ===0)
            return result;
        
        result = result * arr[0];
        return productHelper(arr.slice(1))    
    }

    productHelper(arr)
    return result;   
}

console.log(productOfArray([1,2,3,4]))