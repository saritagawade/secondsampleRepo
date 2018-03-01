const request=require('request');

var getweather=(lat,lag,callback)=>{

    url=`https://api.darksky.net/forecast/f543e112d8fa0294908b205a558ca248/${lat},${lag}`;
request({
    url:url,
    json:true
},(error,respnose,body)=>{
if(error){
   callback("unable to connect to service");
}else{
    callback(undefined,{
        temperature:body.currently.temperature,
        apparentTemprature:body.currently.apparentTemperature
    });
}

});
};
 module.exports.weather=getweather;
