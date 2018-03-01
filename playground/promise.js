var asynAdd=(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof a==='number'&& typeof b==='number'){
                resolve(a+b);
            }else{
                reject('arguments must be numbers');
            }
        }
        ,1500)
    });
};
asynAdd(2,5).then((res)=>{
    console.log('result:',res);
    return asynAdd(res,33);
}).then((res)=>{
    console.log("second result:",res);;
}).catch((errMsg)=>{
    console.log(errMsg);
    });