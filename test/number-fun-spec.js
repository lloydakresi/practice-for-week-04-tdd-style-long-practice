// Your code here

const {expect} = require("chai");
const {returnsThree, reciprocal} = require("../problems/number-fun");

describe("returnsThree", function(){
    let num = returnsThree();
    it ("should return only three as output", function(){
        expect(num).to.eql(3);
    })
})

describe("reciprocal", function(){
    let recip = reciprocal(4);
    it("should return the reciprocal of the interval", function(){
        expect(recip).to.eql(0.25);
    })

    let badFunc = () =>{reciprocal("Dog")};
    it("should throw an error if the input is not a number", function(){
        expect(badFunc).to.throw(TypeError, "Input must be a number!");
    })

})
