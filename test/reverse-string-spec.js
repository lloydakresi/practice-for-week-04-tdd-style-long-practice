// Your code here
const {expect} = require("chai");
const reverseString = require("../problems/reverse-string");

describe("reverseString", function(){
    let reversed = reverseString("goated");
    it("should return a reversed input", function(){
        expect(reversed).to.eql("detaog");
    })

    let badFunc = () =>{ reverseString(9)}
    it ("should throw an error", function(){
        expect(badFunc).to.throw(TypeError, "Strings only!");
    })
})
