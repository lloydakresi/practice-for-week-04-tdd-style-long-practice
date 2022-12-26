// Your code here

const {expect} = require("chai");
const myMap = require("../problems/my-map");
const spies = require("chai-spies");
const chai = require("chai");
chai.use(spies);



describe("myMap", function(){
    const arr = [1,2,3,4,5];
    const callback = (el) => el * 2;
    let func;

    beforeEach(()=>{
        cbkSpy = chai.spy(callback);
        func = myMap(arr, cbkSpy);
    });

    it("should not mutate the original array", function(){
        expect(arr).to.eql([1,2,3,4,5]);
    });


    const map = chai.spy.on(arr, "map");
    it("should not call Array#map", function(){
        expect(map).to.not.have.been.called();
    });

    it("should call the callback", function(){
        expect(cbkSpy).to.have.been.called.exactly(arr.length);
    });
})
