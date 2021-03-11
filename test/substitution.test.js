const {expect} = require("chai");
const substitution = require("../src/substitution.js");

describe("RT substitution tests", () => {
    it ("should return false if the given alphabet isn't exactly 26 characters long", () => {
        const actual = substitution("thinkful", "short");
        const expected = false;
        console.log(actual)
        expect(actual).to.eql(expected);
    });
    it ("should correctly translate the given phrase, based on the alphabet given to the function", () => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        const expected = "jrufscpw";
        expect(actual).to.eql(expected);
    });
    it ("returns false if there are any duplicate characters in the given alphabet", () => {
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        const expected = false;
        expect(actual).to.eql(expected);
    });
    it ("should maintain spaces before and after decoding", () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        const expected = "elp xhm xf mbymwwmfj dne";
        expect(actual).to.eql(expected);
    });
    it ("should ignore capital letters, A message and a message should be the same", () => {
        const actual = substitution("A message", "xoyqmcgrukswaflnthdjpzibev");
        const expected = "x amddxgm";
        expect(actual).to.eql(expected);
    });
})