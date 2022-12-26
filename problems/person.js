class Person {
  // Your code here
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  sayHello(){
    let greeting = `hello, ${this.name}`;
    return greeting;
  };

  visit(otherPerson){
    let visiting = `${this.name} visited ${otherPerson.name}`;
    return visiting;
  };

  switchVisit(otherPerson){
    let visiting =`${otherPerson.name} visited ${this.name}`;
    return visiting;
  };

  update(obj){
    if (obj["name"] === undefined || typeof obj["name"] !== "string" ){
      throw new TypeError();
    }else if (obj["age"] === undefined || typeof obj["age"] !== "number")
    {
      throw new TypeError();
    }else{
      this.name = obj["name"];
      this.age = obj["age"];
    };
  }

  tryUpdate(obj){
    try{
      this.update(obj);
      if (this.name == obj["name"] && this.age == obj["age"])
      { return true};
    }catch(e){
      if (e instanceof TypeError)
      {return false};
    };

  }

  static greetAll(arr){
    const newArr = [];
    arr.forEach(function(ele){
      newArr.push(ele.sayHello());
    })
    return newArr;
  }




}

module.exports = Person;
