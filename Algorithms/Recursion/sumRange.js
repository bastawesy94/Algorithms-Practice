function sumRange(num){
    let sum = 0;

    function calcSum(num){
        if(num === 0)
        return sum;
        
    sum+= num;          
    return calcSum(num -1) ;
    }
    return calcSum(num);    
}

console.log(`sum of range ${sumRange(3)}`)
