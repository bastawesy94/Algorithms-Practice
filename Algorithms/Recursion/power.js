function power(num , pow) {
    let result = 1;

    function powerHelper(num , pow){
        if(pow === 0){
            return result ;   
        }
        result*=num;
    return powerHelper(num , pow-1)
    }
    powerHelper(num , pow);
    return result;
}

console.log(power(3,2))