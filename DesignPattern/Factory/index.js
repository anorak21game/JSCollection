// not ready yet !!!

// class AbstractFactory {
//   static create() {
//     if (this === AbstractFactory) throw new TypeError("Can not call static abstract method create.");
//     if (this.create === AbstractFactory.create) throw new TypeError("Please implement static abstract method create."); 
//     throw new TypeError("Do not call static abstract method create from child.");
//   }
//   constructor() {
//     if (this.constructor === AbstractFactory) throw new TypeError("Can not construct abstract class.");
//     if (this.create === AbstractFactory.prototype.create) throw new TypeError("Please implement abstract method create.");
//   }
//   create() {
//     throw new TypeError("Do not call abstract method create from child.");
//   }
// }

// class ConcreteFactoryA extends AbstractFactory {
//   static create() {
//     // Implementation of abstract static method.
//   }
//   constructor() {
//     super();
//     // Implementation of constructor.
//   }
//   create() {
//     // Implementation of abstract method.
//   }
// }

// class ConcreteFactoryB extends AbstractFactory {
//     static create() {
//       // Implementation of abstract static method.
//     }
//     constructor() {
//       super();
//       // Implementation of constructor.
//     }
//     create() {
//       // Implementation of abstract method.
//     }
//   }

// Terminal$>npm run test
// quit npm Strg^C