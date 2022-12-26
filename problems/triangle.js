// Your code here
class Triangle{
    constructor(side1, side2, side3){
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
        this.isValid;

        let condition1 = (side1 === undefined) || (side2 === undefined) || (side3 === undefined);
        if (condition1 === true) throw Error("Not enough arguments");

        let condition2 = (typeof side1 === "number") && (typeof side2 === "number") && (typeof side3 === "number");
        if (condition2 === false) throw Error("some of the inputs are not numbers");
    }

    getPerimeter(){
        let sum = this.side1 + this.side2 + this.side3;
        return sum;
    }

    hasValidSideLengths(){
        if ((this.side1 + this.side2) <= this.side3) return false;
        if ((this.side2 + this.side3) <= this.side1) return false;
        if ((this.side1 + this.side3) <= this.side1) return false;
        return true;
    }

    validate(){
       this.isValid = this.hasValidSideLengths();
       return this.isValid;
    };

    static getValidTriangles(...array){
        let newArr = [];
        array.forEach((ele) =>{
            if(ele.validate() === true){
                newArr.push(ele);
            }
        })
        return newArr;

    }

}

class Scalene extends Triangle{
    constructor(side1, side2, side3){
        super(side1, side2, side3)
        this.isValid = this.hasValidSideLengths();
        this.isValidScalene;
        let condition1 = (side1 === undefined) || (side2 === undefined) || (side3 === undefined);
        if (condition1 === true) throw Error("Not enough arguments");

        let condition2 = (typeof side1 === "number") && (typeof side2 === "number") && (typeof side3 === "number");
        if (condition2 === false) throw Error("some of the inputs are not numbers");
    }

    isScalene(){
        if (this.side1 === this.side2) return false;
        if (this.side2 === this.side3) return false;
        if (this.side3 === this.side1) return false;
        return true;
    }

    validate(){
        if (this.isScalene() === true) {
            this.isValidScalene = true;
            return this.isValidScalene;
        }else{
            this.isValidScalene = false;
            return this.isValidScalene;
        }
    }

}

class Isoceles extends Triangle{
    constructor(side1, side2, side3){

        super(side1, side2, side3)
        this.isValid = this.hasValidSideLengths();
        this.isValidIsoceles;

        let condition1 = (side1 === undefined) || (side2 === undefined) || (side3 === undefined);
        if (condition1 === true) throw Error("Not enough arguments");

        let condition2 = (typeof side1 === "number") && (typeof side2 === "number") && (typeof side3 === "number");
        if (condition2 === false) throw Error("some of the inputs are not numbers");
    };

    isIsoceles(){
        if ((this.side1 === this.side2) && (this.side1 !== this.side3)) return true;
        if ((this.side2 === this.side3) && (this.side2 !== this.side1)) return true;
        if ((this.side3 === this.side1) && (this.side3 !== this.side3)) return true;
        return false;
    };

    validate(){
        this.isValidIsoceles = this.isIsoceles();
        return this.isValidIsoceles;
    }


};


module.exports = {Triangle, Scalene, Isoceles};
