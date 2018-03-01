const request=require('request');

module.exports.getGeocode=(address,callback)=>{
    //console.log("in geocode.js");
var encodedURi=encodeURIComponent(address);
//console.log(encodedURi);
request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURi}`,
    json:true
},(err,response,body)=>{
    //console.log(JSON.stringify(body,undefined,3));
    //console.log(body.status);
    if(err){
        console.log(err);
        callback('error loading address');
        //console.log(err);
    }
    else if(body.status==='OK'){
		console.log(body.results[0].geometry.location.lat);
            console.log(body.results[0].geometry.location.lng);
        callback(undefined,{
            address:body.results[0].formatted_address,
            latitude:body.results[0].geometry.location.lat,
            longitude:body.results[0].geometry.location.lng
        });
        
    // console.log(`address:${body.results[0].formatted_address}`);
    // console.log(`latitude:${body.results[0].geometry.location.lat}`);
    //  console.log(`longitude:${body.results[0].geometry.location.lng}`);
    }

});
};

// module.exports.geocode={
//     getGeocode()
// }