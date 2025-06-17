class Person{
    constructor(name, age){
        this.name =name
        this.age =age

    }
    displayName(){
        return this.name
    }
}

class Student extends Person{

}
const inst = new Student("hrithik",23)
console.log(inst.displayName());

--------------------------------------------------------------------------------------------------------------
Create a base class Animal with method make_sound. Derived classes like Dog, Cat, Cow override make_sound differently

class Animal {
    makeSound(){
        console.log("Animal sound");

    }
}
class Dog extends Animal{
    makeSound(){
        console.log("bwoo bwoo");

    }
}

class cat extends Animal{
    makeSound(){
        console.log("meow mewo");

    }
}

class Cow extends Animal {
    makeSound(){
        console.log("mbee mbee");

    }
}

let myDog =new Dog()
let mycat =new cat()
let myCow =new Cow()

myDog.makeSound()
myCow.makeSound()
mycat.makeSound()

-------------------------------------------------------------------------
Create a Calculator class that supports the following operations using methods:

class Calculator {
  constructor() {
    this.result = 0;
  }
  add(a, b) {
    this.result = a + b;
    return this.result;
  }
  subtract(a, b) {
    this.result = a - b;
    return this.result;
  }
  multiple(a, b) {
    this.result = a * b;
    return this.result;
  }
  divide(a, b) {
    if (b === 0) {
      return " Error";
    }
    this.result = a / b;
    return this.result;
  }
  percentage(a, b) {
    this.result = (a, b) / 100;
    return this.result;
  }
}

const clac = new Calculator();
console.log(clac.add(10, 50));

--------------------------------------------------------
Create a class BankAccount with: Attributes: account_holder, balance Methods: deposit, withdraw, check_balance

class BankAccount {
  constructor(accountHolder, initialBalance = 0) {
    this.accountHolder = accountHolder;
    this.balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(this.balance);
    }
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient balance.");
    } else if (amount <= 0) {
      console.log("Withdrawal amount must be positive.");
    } else {
      this.balance -= amount;
      console.log(this.balance);
    }
  }
  checkBalance() {
    console.log(`Current balance: ₹${this.balance}`);
    return this.balance;
  }
}

const myAccount = new BankAccount("Hrithik", 1000);
myAccount.checkBalance();     
myAccount.deposit(500);