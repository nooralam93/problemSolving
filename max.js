var business = 690;
var minister = 680;
var sochib = 550;
var max = Math.max(business, minister, sochib);
console.log(max);
if(business > minister){
   if(business> sochib){
    console.log('business is bigger');
   }
   else{
    console.log('sochib is bigger');
   }
}
else{
    if( minister > sochib){
        console.log('minister is bigger');
    }
    else{
        console.log('sochib is bigger');
    }
}