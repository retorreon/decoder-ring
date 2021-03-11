const {expect} = require("chai");
const polybius = require("../src/polybius.js");

describe("RT polybius tests", () => {
    it("when encoding, it translates the letters i and j to 42", () => {
        const input = ("thinkful")
        const actual = (polybius(input));
        const expected = "4432423352125413";
        expect(actual).to.eql(expected);
    });
    it("when encoding, it maintains spaces", () => {
        const input = ("A message")
        const actual = (polybius(input));
        const expected = "11 23513434112251";
        expect(actual).to.eql(expected);
    });
    it("when decoding, it translates 42 to (i/j)", () => {
        const input = ("4432423352125413")
        const actual = (polybius(input, false));
        const expected = "thi/jnkful";
        expect(actual).to.eql(expected);
    });
    it("it ignores capital letters. A message and a message should be the same", () => {
        const input = ("A message")
        const actual = (polybius(input));
        const expected = "11 23513434112251";
        expect(actual).to.eql(expected);
    });
    it("when decoding, it maintains spaces", () => {
        const input = ("11 23513434112251")
        const actual = (polybius(input, false));
        const expected = "a message";
        expect(actual).to.eql(expected);
    });
})