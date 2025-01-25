// Take a variable with the **temperature** and another variable with the relative **humidity** and *output* a clothing suggestion.

// high humid & high temp = rain
// high humid & low temp = snow
// low humid & high temp = hot
// low humid & low temp = cold

// 4 degrees & above is high, 3 degrees & below is low
// 60% humidity & above is high, 59% humidity & below is low

// check temp & humidity
// suggest clothing based on weather

let temp = 4;
let humid = 60;

function suggestClothing(humid, temp) {
   let clothing;
   if (humid >= 60 && temp >= 4) {
      //Rainy
      clothing = "rain coat";
      return "rain coat";

   } else if (humid >= 60 && temp <= 3) {
      // Snowy
      clothing = "winter jacket";

   } else if (humid <= 59 && temp >= 4) {
      // Hot
      clothing = "t-shirt";

   } else if (humid <= 59 && temp <= 3) {
      // Cold
      clothing = "sweater";
   }
   return clothing;
}

export { suggestClothing }

