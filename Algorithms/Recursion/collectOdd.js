function collectOdd(arr){
    let result = [];

    function collect(arr) {
        if(arr.length === 0)
            return;

        if(arr[0]%2 != 0)
            result.push(arr[0]);
        arr = arr.slice(1);
        collect(arr);
    }
     collect(arr)
     return result;
}

console.log(collectOdd([1,2]));