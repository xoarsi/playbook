//Crear clase pokemon
class pokemon {
//Crear constructor que reciba un nombre
    constructor(name) {
      this.name= name;
    }

//Crear función sayHello()
    sayHello() {
      console.log(`My pokemon ${this.name} greets you! :)`);
    }
//Crear función sayMessage()
    sayMessage(message) {
      console.log(`My pokemon ${this.name} says: "${message}"`);
    }
  }
//Exportar la clase para que pueda ser importada en main.js  
  module.exports = pokemon
