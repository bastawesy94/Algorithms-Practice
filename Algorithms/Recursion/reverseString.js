function reverseString(str) {
    let result = ""
    function reverseHelper(str){
        if(str.length === 0)
            return result;
        result+= str[str.length-1]
        str.pop()   
        reverseHelper(str)    
    }
    reverseHelper(str)
    return result;
}
console.log(reverseString(['a' ,'b' ,'c']))