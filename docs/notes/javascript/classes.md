# Classes (code)

A class is like a blueprint to create the object. It can contain the properties associated with this new object and methods that can be performed on the same

Eg. There can be a blueprint function that will define a car. Now, this blueprint defines what colour of the car will be, it's model, engine size, etc. It can also contain the functionality/methods such as reverse, brake, drive, etc.

```js
    // 1. Create a class
    // 2. Create a constructor (This actually constructs the object and set properties on the new object)

    class User { *-96
      constructor(username, email) {
        // this is where we setup properties on the object
        // this constructor is only use to set properties and not to call any functions. Functions should be called later, as you can see the login method below
        // this is now accessible because of 'new'
        this.username = username;
        this.email = email;
        this.score = 0;
      }
      login() {
        console.log(`${this.username} just logged in`);
        return this;
      }
      logout() {
        console.log(`${this.username} just logged out`);
        return this;
      }
      inScore() {
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`);
        return this; //This is returning the currrent user instance
      }
    }

    class Admin extends User {
      deleteUser(userToDelete) {
        users = users.filter(user => {
          return user.username !== userToDelete.username;
        });
      }
      // Admins own constrctor
      constructor(username, email, title) {
        super(username, email); //This will use the constructor from the parent class and set the inherrited properties. Then we just have to set the new/other property. Without this super, this new constructor won't work at all.
        this.title = title;
      }
    }

    // The 'new' keyword
    // 1. It creates an empty object {}
    // 2. It binds the value of this to the new empty object
    // 3. It calls the constructor function to build the object
    const userOne = new User('mario', 'mario@gmail.com');
    const userTwo = new User('dave', 'dave@gmail.com');
    const userThree = new Admin('admin', 'admin@gmail.com', 'black-belt-ninja');

    console.log(userOne, userTwo, userThree);

    // userOne.login();
    // userTwo.login();

    // userOne.logout();
    // userTwo.logout();

    userOne
      .inScore()
      .inScore()
      .logout(); //Method chaining is is working because we are explicity returning the user instance by calling 'return this'

    let users = [userOne, userTwo, userThree];
    console.log(users);

    userThree.deleteUser(userTwo);
    console.log(users);

    console.log(userThree );
```

### What is a prototype?

Every object in JS has a prototype. Prototypes contain all the methods for that object type.

## Inheritance in JavaScript?

In simple terms, inheritance is the concept of one thing gaining the properties or behaviours of something else. To say A **inherits** from B, is saying that A **is a type of** B. A Bird **inherits** from Animal because a Bird **is a type of** Animal - it can do the same things, but a little more (or differently)!

In JavaScript, this relationship is a little complicated to specify, but bear with the syntax. You must use a special object called prototype which assigns properties to a **type** such as Animal. Only functions have a prototype, which is why you must create a function first:

```js
function Animal() {} // This is the Animal *Type*
Animal.prototype.eat = function() {
  alert("All animals can eat!");
};
```

Now to create a **type** that inherits from Animal, you also use the prototype object, but this time the one belonging to the other **type**, e.g. Bird:

```js
function Bird() {} // Declaring a Bird *Type*
Bird.prototype = new Animal(); // Birds inherit from Animal
Bird.prototype.fly = function() {
  alert("Birds are special, they can fly!");
};
```

We can also inherit the methods in the Bird class from the Animal class.

```js
Bird.prototype = Object.create(Animal.prototype);
// Birds can now access methods from animal class
```

The effect of this is that any Birds you create (called an instance of Bird) all have the properties of Animals, but they also have the additional .fly():

```js
var aBird = new Bird(); // Create an instance of the Bird Type
aBird.eat(); // It should alert, so the inheritance worked
aBird.fly(); // Important part of inheritance, Bird is also different to Animal

var anAnimal = new Animal(); // Let's check an instance of Animal now
anAnimal.eat(); // Alerts, no problem here
anAnimal.fly(); // Error will occur, since only Birds have fly() in its prototype
```
