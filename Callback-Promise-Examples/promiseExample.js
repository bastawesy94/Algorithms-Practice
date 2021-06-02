let p = new Promise((resolve , reject)=>{
    console.log('1')
    setTimeout(()=>{
        reject(new Error('erorr 7'))
    } , 7000)
    setTimeout(()=>{
        reject(new Error('erorr 2'))
    } , 2000)
    console.log('2')
})

p.then((result)=>{
    console.log(result + "77")
},(error)=>{
    console.log(error.message + "55")
})

/*
1 - one reject or one resolve will happen .
2 - we can access state inside promise object by 3 ways : 
    1 - .then(f1 , f2); 
        f1 has a result parameter
        f2 has an error parameter
    2 - .catch(f) === .them(null , f2)
    3 - finally , it is an action will happen if resolve or reject happen whatever .     
*/