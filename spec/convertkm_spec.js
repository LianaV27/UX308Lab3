import { convertKilometersToMiles } from "../convertKilometersToMiles.js";

describe("convertKilometersToMiles", function() {
    it("tests 150 km", function() {
      let kilometers = 150;
      let miles = convertKilometersToMiles(kilometers);
      expect(miles.toFixed(2)).toBe("93.23");
    });

    it("tests 70 km", function() {
        let kilometers = 70;
        let miles = convertKilometersToMiles(kilometers);
        expect(miles.toFixed(2)).toBe("43.51");
      });
  });
  


/*let kilometers = 150;
let miles = convertKilometersToMiles(kilometers);
console.log(`${kilometers} kilometers is ${miles} miles`);*/
