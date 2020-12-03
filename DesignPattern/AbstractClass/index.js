class AbstractClass {
    static foo() {
      if (this === AbstractClass) throw new TypeError("Can not call static abstract method foo.");
      if (this.foo === AbstractClass.foo) throw new TypeError("Please implement static abstract method foo."); 
      throw new TypeError("Do not call static abstract method foo from child.");
    }
    constructor() {
      if (this.constructor === AbstractClass) throw new TypeError("Can not construct abstract class.");
      if (this.foo === AbstractClass.prototype.foo) throw new TypeError("Please implement abstract method foo.");
    }
    foo() {
      throw new TypeError("Do not call abstract method foo from child.");
    }
  }
  
class ConcreteClass extends AbstractClass {
    static foo() {
    // Calls Abstract.foo();
    // super.foo();
        console.log("method static foo");
    // Implementation of abstract static method.
    }
    constructor() {
        super();
    // Implementation of constructor.
    }
    foo() {
    // Calls Abstract.prototype.foo();
    // super.foo();
        console.log("method foo");
    // Implementation of abstract method.
    }
}

// let bar2 = new AbstractClass();
// AbstractClass.foo();

ConcreteClass.foo();
let bar = new ConcreteClass();
bar.foo();

// Terminal$>npm run test
// quit npm Strg^C