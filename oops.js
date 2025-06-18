// class Person{
//     constructor(name, age){
//         this.name =name
//         this.age =age

//     }
//     displayName(){
//         return this.name
//     }
// }

// class Student extends Person{

// }
// const inst = new Student("hrithik",23)
// console.log(inst.displayName());

// --------------------------------------------------------------------------------------------------------------
// Create a base class Animal with method make_sound. Derived classes like Dog, Cat, Cow override make_sound differently

// class Animal {
//     makeSound(){
//         console.log("Animal sound");

//     }
// }
// class Dog extends Animal{
//     makeSound(){
//         console.log("bwoo bwoo");

//     }
// }

// class cat extends Animal{
//     makeSound(){
//         console.log("meow mewo");

//     }
// }

// class Cow extends Animal {
//     makeSound(){
//         console.log("mbee mbee");

//     }
// }

// let myDog =new Dog()
// let mycat =new cat()
// let myCow =new Cow()

// myDog.makeSound()
// myCow.makeSound()
// mycat.makeSound()

// -------------------------------------------------------------------------
// Create a Calculator class that supports the following operations using methods:

// class Calculator {
//   constructor() {
//     this.result = 0;
//   }
//   add(a, b) {
//     this.result = a + b;
//     return this.result;
//   }
//   subtract(a, b) {
//     this.result = a - b;
//     return this.result;
//   }
//   multiple(a, b) {
//     this.result = a * b;
//     return this.result;
//   }
//   divide(a, b) {
//     if (b === 0) {
//       return " Error";
//     }
//     this.result = a / b;
//     return this.result;
//   }
//   percentage(a, b) {
//     this.result = (a, b) / 100;
//     return this.result;
//   }
// }

// const clac = new Calculator();
// console.log(clac.add(10, 50));

// --------------------------------------------------------
// Create a class BankAccount with: Attributes: account_holder, balance Methods: deposit, withdraw, check_balance

// class BankAccount {
//   constructor(accountHolder, initialBalance = 0) {
//     this.accountHolder = accountHolder;
//     this.balance = initialBalance;
//   }

//   deposit(amount) {
//     if (amount > 0) {
//       this.balance += amount;
//       console.log(this.balance);
//     }
//   }

//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.log("Insufficient balance.");
//     } else if (amount <= 0) {
//       console.log("Withdrawal amount must be positive.");
//     } else {
//       this.balance -= amount;
//       console.log(this.balance);
//     }
//   }
//   checkBalance() {
//     console.log(`Current balance: ₹${this.balance}`);
//     return this.balance;
//   }
// }

// const myAccount = new BankAccount("Hrithik", 1000);
// myAccount.checkBalance();     
// myAccount.deposit(500);


// ---------------------------------------------------------
// Create a TodoList class to manage a list of tasks. The class should have methods to:

// class TodoList {
//   constructor() {
//     this.tasks = [];
//   }

//   addTask(taskName) {
//     this.tasks.push({ name: taskName, completed: false });
//     console.log(`Added task: "${taskName}"`);
//   }

//   deleteTask(taskName) {
//     const index = this.tasks.findIndex(task => task.name === taskName);
//     if (index !== -1) {
//       this.tasks.splice(index, 1);
//       console.log(`Deleted task: "${taskName}"`);
//     } else {
//       console.log(`Task "${taskName}" not found.`);
//     }
//   }

//   completeTask(taskName) {
//     const task = this.tasks.find(task => task.name === taskName);
//     if (task) {
//       task.completed = true;
//       console.log(`Marked task as completed: "${taskName}"`);
//     } else {
//       console.log(`Task "${taskName}" not found.`);
//     }
//   }

//   showTasks() {
//     if (this.tasks.length === 0) {
//       console.log("No tasks in the list.");
//       return;
//     }

//     console.log("Todo List:");
//     this.tasks.forEach((task, index) => {
//       const status = task.completed ? "Completed" : " Pending";
//       console.log(`${index + 1}. ${task.name} - ${status}`);
//     });
//   }
// }



// const myTodo = new TodoList();

// myTodo.addTask("Complete assignment");
// myTodo.addTask("Go for a walk");
// myTodo.showTasks();

// myTodo.completeTask("Complete assignment");
// myTodo.showTasks();

// myTodo.deleteTask("Go for a walk");
// myTodo.showTasks();


// ----------------------------------------------------------------------
// Create a class Library 

// class Book {
//   constructor(title, author, isbn) {
//     this.title = title;
//     this.author = author;
//     this.isbn = isbn;
//   }
// }

// class Library {
//   constructor() {
//     this.books = [];
//   }

//   addBook(book) {
//     this.books.push(book);
//     console.log(`Added book: "${book.title}"`);
//   }

//   removeBook(isbn) {
//     const index = this.books.findIndex(book => book.isbn === isbn);
//     if (index !== -1) {
//       const removedBook = this.books.splice(index, 1)[0];
//       console.log(`Removed book: "${removedBook.title}"`);
//     } else {
//       console.log(`Book with ISBN ${isbn} not found.`);
//     }
//   }

//   getBook(isbn) {
//     const book = this.books.find(book => book.isbn === isbn);
//     if (book) {
//       console.log(`Found book: "${book.title}" by ${book.author}`);
//       return book;
//     } else {
//       console.log(`Book with ISBN ${isbn} not found.`);
//       return null;
//     }
//   }

//   listBooks() {
//     if (this.books.length === 0) {
//       console.log("No books in the library.");
//       return;
//     }
//     console.log("Library Books:");
//     this.books.forEach((book, index) => {
//       console.log(`${index + 1}. "${book.title}" by ${book.author} (ISBN: ${book.isbn})`);
//     });
//   }
// }




// const library = new Library();

// const book1 = new Book("Atomic Habits", "James Clear", "12345");
// const book2 = new Book("The Alchemist", "Paulo Coelho", "67890");

// library.addBook(book1);
// library.addBook(book2);
// library.listBooks();

// library.getBook("12345");

// library.removeBook("67890");
// library.listBooks();
