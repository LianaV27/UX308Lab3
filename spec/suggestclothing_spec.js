import { suggestClothing } from "../suggestClothing.js";

describe("suggestClothing", function () {
    it("tests temp of 4 degrees and humidity of 60%", function () {
        let temp = 4;
        let humid = 60;
        let clothing = suggestClothing(humid, temp);
        expect (clothing).toBe("rain coat");
    });

    it("tests temp of 3 degrees and humidity of 10%", function () {
        let temp = 3;
        let humid = 10;
        let clothing = suggestClothing(humid, temp);
        expect (clothing).toBe("sweater");
    });
});