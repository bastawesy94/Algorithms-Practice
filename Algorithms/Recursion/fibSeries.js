function fibSeries(num){
    let first = 0 ;
    let second = 1;
    let result = [];
    function fibHelper(num){
        if(num === 0)
            return result ;

        let sum = first + second;
        result.push(sum)
        first = second;
        second = sum ;
        fibHelper(num -1)
    }
    fibHelper(num);
    return result;
}
console.log(fibSeries(5))