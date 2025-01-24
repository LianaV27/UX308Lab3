import {convertMetersToYards} from "../meters2yards.js";

describe("convertMetersToYards", function() {
    it("tests 100 m", function() {
      let meters = 100;
      let yards = convertMetersToYards(meters);
      expect(yards.toFixed(2)).toBe("109.40");
    });
  });