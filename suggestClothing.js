// Take a variable with the **temperature** and another variable with the relative **humidity** and *output* a clothing suggestion.

// high humid & high temp = rain
// high humid & low temp = snow
// low humid & high temp = hot
// low humid & low temp = cold

// 4 degrees & above is high, 3 degrees & below is low
// 60% humidity & above is high, 59% humidity & below is low

// check temp & humidity
let temp = 20;
let humid = 60;


function checkWeather(){
   if(humid >= 60 && temp >= 4){
     // rainy
    } else if(humid >= 60 && temp >=4){
    // snow
   } else if (humid <=59 && temp >= 4){

   }

console.log(`It is ${temp} degrees and ${humid} % humidity today. It is rainy today.`);

// determine weather based on temp & humidity
// suggest clothing based on weather