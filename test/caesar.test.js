const {expect} = require("chai");
const caesar = require("../src/caesar.js");

describe("caesar()", () => {
    it("should return false if shift is equal to zero, less than -25, or more than 25", () => {
        const input = ("passkey is orange")
        const shift = 0
        const actual = (caesar(input, shift));
        const expected = false;
        expect(actual).to.eql(expected);
    });
    it("should ignore capital letters. A message and a message should be the same", () => {
        const input = "UpperCase"
        const shift = 10
        const actual = (caesar(input, shift));
        const expected = "ezzobmkco";
        expect(actual).to.eql(expected);
    });
    it("should wrap around to the front of the alphabet when the shift goes past the end of the alphabet", () => {
        const input = "Zebra Magazine"
        const shift = 3
        const actual = (caesar(input, shift));
        const expected = "cheud pdjdclqh";
        expect(actual).to.eql(expected);
    });
    it("should preserve spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.", () => {
        const input = "Hey! Been trying to reach you..."
        const shift = 4
        const actual = (caesar(input, shift));
        const expected = "lic! fiir xvcmrk xs viegl csy...";
        expect(actual).to.eql(expected);
    });     
})
