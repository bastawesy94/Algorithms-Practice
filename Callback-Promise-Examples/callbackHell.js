function action1(num1 , num2 , callback) {
    const result = callback(num1 , num2)
    console.log(result)
}

const level3 = (num1 , num2)=>{
        console.log("step : " + num1)
        return num1 * num2
    }
const level2 =(num1 , num2)=>{
    console.log("step : " + num1)
    action1(3 ,5 , level3)
    return num1 *num2
}    
const level1 =(num1 , num2)=>{
    console.log("step : " + num1)
    action1(2 , 5 , level2)
    return num1 * num2;
}
action1(1 , 5 ,level1)//ecution of 3 levels of nested callbacks
/*
1 - excution o callback is from outer to inner fire tasks ,
2 - call back when it finished , will return result from inner to outer direction ,
3 - complex code and not readable
*/