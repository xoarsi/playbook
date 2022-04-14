//Create class pokemon
class pokemon {
//Create a constructor that receives a name
    constructor(name) {
      this.name= name;
    }

//Create function sayHello()
    sayHello() {
      console.log(`My pokemon ${this.name} greets you! :)`);
    }
//Create function sayMessage()  
    sayMessage(message) {
      console.log(`${this.name} says: "${message}"`);
    }
  }
  
  export default pokemon;
