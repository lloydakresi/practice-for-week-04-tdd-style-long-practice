// Your code here

const {expect} = require("chai");
const {Triangle, Scalene, Isoceles} = require("../problems/triangle");

describe("Triangle", function(){
    let triangle;
    beforeEach(() =>{
        triangle = new Triangle(3,4,5);
    })

    let badFunc2 = () =>{
        let newTriangle = new Triangle(2,4);
        return newTriangle;
    }

    let goodFunc = () =>{
        return triangle;
    }

    it("should accept three sides", function(){
        expect(goodFunc).to.not.throw(Error);
        expect(badFunc2).to.throw(Error, "Not enough arguments");
    })

    it ("should be an instance of Triangle", function(){
        expect(triangle).to.be.instanceOf(Triangle);
    })

    let badFunc = () =>{
        return new Triangle("boy", 1, 2);
    }
    it("should all be numbers", function(){
        expect(badFunc).to.throw(Error);
    });
})

describe("getPerimeter", function(){

    let triangle = new Triangle(2,3,4);

    const perimeter = () =>{
        return triangle.getPerimeter();
    };

    it("should find the perimeter from the sides given", function(){
        expect(perimeter()).to.equal(9);
    });

})


describe("hasValidSideLengths", function(){
    let triangle = new Triangle(2,3,4);
    let goodFunc = () =>{
        return triangle.hasValidSideLengths();
    };

    it("returns true when sum of two sides is greater than the third side", function(){
        expect(goodFunc()).to.equal(true);
    });

    let badTriangle = new Triangle(1,2,4);
    let badFunc = () =>{
        return badTriangle.hasValidSideLengths();
    };

    it("returns false when sum of two sides is less than the third side", function(){
        expect(badFunc()).to.equal(false);
    });
})

describe("validate", function(){
    let triangle = new Triangle(2,3,4);
    let badTriangle = new Triangle(1,2,4);

    let goodFunc = () =>{
        return triangle.validate();
    };

    let badFunc = () =>{
        return badTriangle.validate();
    };

    it("should make the isValid property of the triangle true", function(){
        expect(goodFunc()).to.equal(true);
    });

    it("should make the isValid property of invalid triangles false", function(){
        expect(badFunc()).to.equal(false);
    });

});

describe("static getValidTriangles", function(){
    let t1 = new Triangle(2,3,4);
    let t2 = new Triangle(3,4,5);
    let t3 = new Triangle(5,6,7);
    let t4 = new Triangle(1,1,3);
    let t5 = new Triangle(1,2,6);

    let func = () =>{
        return Triangle.getValidTriangles(t1,t2,t3,t4,t5);
    }

    it("should return instances that are valid", function(){
        expect(func()).to.eql([t1,t2,t3]);
    })

})


describe("Scalene", function(){
    let scalene;
    let badScalene;

    beforeEach(() => {
        scalene = new Scalene(2,3,4);
    }

    );

    let badFunc = () =>{
        badScalene = new Scalene(2,3);
        return badScalene;
    };
    it("should be initialised with three lengths", function(){
        expect(badFunc).to.throw(Error, "Not enough arguments");
    });

    let goodFunc = () =>{
        return scalene.isValidTriangle();
    };
    it("should be a valid triangle", function(){
        expect(goodFunc).to.not.eql(true);
    });

    let goodFunc3 = () =>{
        return "isValid" in scalene;
    }

    it("it should have a property isValidScalene", function(){
        expect(goodFunc3()).to.eql(true)
    });

    let goodFunc2 = () =>{
        return scalene.isValidScalene;
    };
    it("property should be intiialised to undefined", function(){
        expect(goodFunc2()).to.eql(undefined);
    });

})

describe("Scalene #isScalene", function(){
    let scalene;
    beforeEach(() =>{
        scalene = new Scalene(3, 4, 6);
    })

    let goodFunc = () =>{
        return scalene.isScalene();
    };
    it("should be a valid scalene triangle", function(){
        expect(goodFunc()).to.equal(true);
    });

})

describe("Scalene #validate", function(){
    let scalene;

    this.beforeEach(() =>{
        scalene = new Scalene(3,4,6);
    });

    let goodFunc2 = () =>{
        return scalene.isScalene();
    }

    let badFunc = () =>{
        let wrong = new Scalene(6,6,6);
        return wrong.isScalene();
    };

    it("should be set to true if triangle is scalene, false otherwise", function(){
        expect(goodFunc2()).to.eql(true);
        expect(badFunc()).to.eql(false);
    });

})

describe("Isoceles", function(){
    let isoceles;
    let badIsoceles;

    this.beforeEach(() =>{
        isoceles = new Isoceles(4,3,4);
    });

    let badFunc = () =>{
        badIsoceles = new Isoceles(2,3);
        return badIsoceles;
    };
    it("should be initialised with three lengths", function(){
        expect(badFunc).to.throw(Error, "Not enough arguments");
    });

    let goodFunc = () =>{
        return isoceles.isValidTriangle();
    };
    it("should be a valid triangle", function(){
        expect(goodFunc).to.not.eql(true);
    });

})

describe("Isoceles #isIsoceles", function(){
    let isoceles;
    beforeEach(() =>{
        isoceles = new Isoceles(4, 4, 6);
        return isoceles;
    })

    let goodFunc = () =>{
        return isoceles.isIsoceles();
    };
    it("should be a valid isoceles triangle", function(){
        expect(goodFunc()).to.eql(true);
    });
});

describe("Isoceles #validate", function(){
    let isoceles;

    this.beforeEach(() =>{
        isoceles = new Isoceles(4,4,6);
    });

    let goodFunc = () =>{
        return isoceles.isValidIsoceles;
    };

    let goodFunc3 = () =>{
        return "isValid" in isoceles;
    }
    it("it should have a property isValidIsoceles", function(){
        expect(goodFunc3()).to.eql(true);
    });

    it("property should be intiialised to undefined", function(){
        expect(goodFunc()).to.eql(undefined);
    });

    let goodFunc2 = () =>{
        return isoceles.validate();
    }

    let badFunc = () =>{
        let wrong = new Isoceles(3,4,5);
        return wrong.validate();
    };

    it("should be set to true if triangle is isoceles, false otherwise", function(){
        expect(goodFunc2()).to.eql(true);
        expect(badFunc()).to.eql(false);
    });


});
