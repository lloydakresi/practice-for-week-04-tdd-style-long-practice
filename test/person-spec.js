// Your code here
const {expect} = require("chai");
const Person = require("../problems/person");

describe("Person", function(){
    let person;
    beforeEach(() =>{
        person = new Person("lloyd", 12);
        newPerson = new Person("chungus", 12);
    });

    it("should be an instance of the Person class", function(){
        expect(person).to.be.instanceOf(Person);
    })

    it("should have existing name and age properties", function(){
        expect(person.name).to.eql("lloyd");
        expect(person.age).to.eql(12);
    });

    let greeting = "hello, lloyd";
    it("should have a greeting method", function(){
        expect(person.sayHello()).to.eql(greeting);
    });

    it("should have a function that shows a person visiting another person", function(){
        expect(person.visit(newPerson)).to.eql("lloyd visited chungus");
    });

    it("should have a switchVisit function like visit but switches the parameters", function(){
        expect(person.switchVisit(newPerson)).to.eql("chungus visited lloyd");
    });
});

describe("update", function(){
    let person;
    beforeEach(() =>{
        person = new Person("lloyd", 12);
        newPerson = new Person("chungus", 12);
    });

    let badFunc = () => { return person.update()};
    it ("argument should not be empty", function(){
        expect(badFunc).to.throw(TypeError);
    })

    let badFunc2 = () =>{
        let strAge = {
            name: "lulu",
            age: "twelve"
        }
        return person.update(strAge);
    }

    it("argument should have age in numbers only", function(){
        expect(badFunc2).to.throw(TypeError);
    })

    let badFunc3 = () =>{
        let numName = {
            name: 12,
            age: 24
        }

        return person.update(numName);
    }

    it("argument should have name in string", function(){
        expect(badFunc3).to.throw(TypeError);
    });

    let badFunc4 = () =>{
        return person.update("bills bills bills");
    };

    it("should accept only an object as an argument", function(){
        expect(badFunc4).to.throw(Error);
    });

});

describe("tryUpdate", function(){
    let person;
    beforeEach(() =>{
        person = new Person("Lulu", 14);
    })

    let badFunc = () =>{
        return person.tryUpdate();
    }

    it("should return false if the instance was not updated successfully", function(){
        expect(badFunc()).to.eql(false);
    })

    let goodFunc = () =>{
        return person.tryUpdate({name: "lloyd", age:12})
    };

    it("should return true if the instance was updated successfully", function(){
        expect(goodFunc()).to.eql(true);
    });
})

describe("greetAll", function(){
    let p1 = new Person("lulu", 12);
    let p2 = new Person("lloyd", 13);
    let p3 = new Person("lemon", 13);
    let p4 = new Person("llama", 14);
    let p5 = new Person("lyle", 12);

    let arr = [p1, p2, p3, p4, p5];

    it("should execute the greet fucntion on all the elemnts of the array", function(){
        expect(Person.greetAll(arr)).to.eql(["hello, lulu", "hello, lloyd", "hello, lemon", "hello, llama", "hello, lyle"]);
    })
})
