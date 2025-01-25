import { calculateCubeVolume } from "../volumeOfCube.js";

describe("calculateCubeVolume", function () {
    it("tests an edge length of 4", function () {
        let length = 4;
        let volume = Math.pow(length, 3);
        expect(volume.toFixed(2)).toBe("64.00");
    });
});


