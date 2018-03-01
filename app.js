
const geocode=require('./geocode/geocode');
const weather=require('./geocode/weather');
// const yargs=require('yargs');
// var argvs= yargs
// .options({
//     a:{
//         demand:true,
//         alias:'address',
//         describe:'adderss that needs to fetch for weather app',
//         string:true
//     }
// })
// .help()
// .argv;

//console.log(argvs);
var address='Flowian Solutions Private Limited';
//var address=' hjash hjjj';
geocode.getGeocode(address,(err,result)=>{
 if(err){
     console.log('err');
 }else{
    
     console.log(result.latitude);
     console.log(result.longitude);
     weather.weather(result.latitude,result.longitude,(errMsg,weatherResult)=>{
    if(errMsg){
        console.log(errMsg);
    }
    else{
        //console.log(JSON.stringify(weatherResult,undefined,2));
        console.log(`It's currently ${weatherResult.temperature},It's feels like ${weatherResult.apparentTemprature}`);
    }
});
 }
});

