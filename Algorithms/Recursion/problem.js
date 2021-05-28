 var fractionToDecimal = function(numerator, denominator) {
     let result = ""
    if(denominator!= 0 && numerator >= Math.pow(-2 , 31) && denominator <= Math.pow(2 , 31))
         result = numerator/denominator;

    if(result === parseInt(result))
        return String(result); //case 1 , the number without fraction part .

     result = String(result);   
     const start = result.indexOf('.') +1
     const end = result.length -1
     let fractionPart = result.substr(start , end) //generate fraction part.
     const mainPart = parseInt(result) //generate part greater than 0.
     
     let customNum = {}
     let store= []

     while(fractionPart.length >0){
        let counter = 0;
         let x=0;
        for(let i in fractionPart){
            if(fractionPart[i] === fractionPart[0])
                // console.log(counter)
                counter ++;
         }
        //  console.log("num :" + fractionPart[0]);
        //  console.log("repeats : "+counter);
        customNum = {num :fractionPart[0], repeats :counter};
        // console.log(customNum)
        // store.push(customNum);
        // console.log(store)
         fractionPart = fractionPart.slice(counter);
        //  console.log(fractionPart)
        // console.log(store);
     }
     console.log(store);
     for(let i in store)
        if(store[i].repeats > 1)
            
     
    //  if(counter >1){
    //     const numberOfFractionDigits = fractionPart.length / counter ;
    //     //  console.log("disgits : "+ numberOfFractionDigits)
    //      const secontPart = fractionPart.substr(0 , numberOfFractionDigits);
    //     //  console.log("between branthes : "+ secontPart)
    //      return mainPart+"."+"("+secontPart+")";
    //  }
return mainPart+"."+fractionPart;          
};
console.log(fractionToDecimal(1, 6))