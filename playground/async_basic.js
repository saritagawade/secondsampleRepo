console.log("starting app..");
setTimeout(()=>{
    console.log("in timeout..");
},2000);
setTimeout(()=>{
 console.log("in second timeout..");
},0);

console.log("finishing app...");
