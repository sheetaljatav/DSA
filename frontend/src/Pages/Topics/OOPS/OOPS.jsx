import React from "react";
import "./OOPS.css";

const OOPS = () => (
  <div className="oop-container">
    <section className="oop-section">
      <h2>🧱 Object-Oriented Programming (OOP) – Complete Guide</h2>

      <h3>🌟 What is OOP?</h3>
      <p>
        Object-Oriented Programming (OOP) is a programming style where real-world concepts like objects, classes, inheritance, and encapsulation are used to design programs.
        <br />It allows you to structure your code in a way that's easy to build, reuse, and maintain.
      </p>

      <h3>🧠 Why OOP?</h3>
      <ul>
        <li>✅ Real-world modeling</li>
        <li>✅ Code reuse using inheritance</li>
        <li>✅ Security using encapsulation</li>
        <li>✅ Easy to manage and debug</li>
        <li>✅ Powerful in building scalable systems</li>
      </ul>

      <h3>🧾 Key Concepts of OOP</h3>
      <b>1️⃣ Class</b>
      <p>
        A class is like a blueprint for creating objects. It defines attributes (variables) and methods (functions).
      </p>
      <pre>
{`class Car:
    def __init__(self, brand):
        self.brand = brand

    def drive(self):
        print(f"{self.brand} is driving")`}
      </pre>
      <b>2️⃣ Object</b>
      <p>
        An object is an instance of a class. It is the actual entity created from the blueprint.
      </p>
      <pre>
{`myCar = Car("Toyota")  # Object created
myCar.drive()          # Output: Toyota is driving`}
      </pre>
      <b>3️⃣ Encapsulation</b>
      <p>
        Encapsulation means hiding internal data from outside access and only allowing changes through methods.
      </p>
      <pre>
{`class BankAccount:
    def __init__(self):
        self.__balance = 0   # Private variable

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount

    def getBalance(self):
        return self.__balance`}
      </pre>
      <ul>
        <li>✅ Protects data</li>
        <li>✅ Only allows valid operations</li>
      </ul>
      <b>4️⃣ Abstraction</b>
      <p>
        Abstraction means showing only essential features and hiding complex details.<br />
        Like how you use a phone without knowing how it works internally.
      </p>
      <pre>
{`from abc import ABC, abstractmethod

class Vehicle(ABC):
    @abstractmethod
    def start(self):
        pass

class Bike(Vehicle):
    def start(self):
        print("Bike started")`}
      </pre>
      <ul>
        <li>✅ Simplifies the code</li>
        <li>✅ Improves readability</li>
      </ul>
      <b>5️⃣ Inheritance</b>
      <p>
        Inheritance allows a class to acquire properties of another class.
      </p>
      <pre>
{`class Animal:
    def sound(self):
        print("Animal makes sound")

class Dog(Animal):
    def bark(self):
        print("Dog barks")

d = Dog()
d.sound()  # From Animal
d.bark()   # From Dog`}
      </pre>
      <ul>
        <li>✅ Promotes code reuse</li>
        <li>✅ Avoids redundancy</li>
      </ul>
      <b>6️⃣ Polymorphism</b>
      <p>
        Polymorphism means same function name behaves differently for different classes.
      </p>
      <pre>
{`class Bird:
    def sound(self):
        print("Chirp")

class Cat:
    def sound(self):
        print("Meow")

for animal in [Bird(), Cat()]:
    animal.sound()`}
      </pre>
      <ul>
        <li>✅ One function, many forms</li>
        <li>✅ Supports flexibility in code</li>
      </ul>

      <h3>🎯 Advantages of OOP</h3>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Benefit</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Modularity</td><td>Code is split into small parts</td></tr>
          <tr><td>Reusability</td><td>Classes can be reused using inheritance</td></tr>
          <tr><td>Data hiding</td><td>Data is secured using encapsulation</td></tr>
          <tr><td>Easy to maintain</td><td>Changes are local to classes</td></tr>
          <tr><td>Scalability</td><td>Big projects are easier to manage</td></tr>
        </tbody>
      </table>

      <h3>🔁 Real-Life Analogy</h3>
      <p>
        Imagine a Class: Car<br />
        Properties: brand, model, speed<br />
        Methods: start(), stop(), accelerate()<br />
        You can create objects like:
      </p>
      <pre>
{`car1 = Car("Honda", "City")
car2 = Car("Tesla", "Model 3")`}
      </pre>
      <p>
        Each has different data, but they share the same structure.
      </p>

      <h3>🖥 OOP in C++ Example</h3>
      <pre>
{`#include<iostream>
using namespace std;

class Car {
    string brand;

public:
    Car(string b) {
        brand = b;
    }

    void drive() {
        cout << brand << " is driving" << endl;
    }
};

int main() {
    Car car1("BMW");
    car1.drive();
    return 0;
}`}
      </pre>

      <h3>🐍 OOP in Python Example</h3>
      <pre>
{`class Student:
    def __init__(self, name, roll):
        self.name = name
        self.roll = roll

    def display(self):
        print(f"Name: {self.name}, Roll: {self.roll}")

s = Student("Sheetal", 101)
s.display()`}
      </pre>

      <h3>📌 OOP vs Procedural Programming</h3>
      <table>
        <thead>
          <tr>
            <th>Procedural</th>
            <th>Object-Oriented</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Follows step-by-step</td>
            <td>Based on classes and objects</td>
          </tr>
          <tr>
            <td>Difficult to reuse code</td>
            <td>Promotes reuse via inheritance</td>
          </tr>
          <tr>
            <td>Not secure</td>
            <td>More secure (encapsulation)</td>
          </tr>
          <tr>
            <td>Poor structure for large apps</td>
            <td>Better for large systems</td>
          </tr>
        </tbody>
      </table>

      <h3>🧠 Interview Questions (OOP)</h3>
      <ul>
        <li>What is OOP? Explain with examples.</li>
        <li>Difference between class and object?</li>
        <li>What is inheritance? Types of inheritance?</li>
        <li>What is encapsulation? Why is it important?</li>
        <li>What is polymorphism?</li>
        <li>Difference between abstraction and encapsulation?</li>
        <li>Can we override static methods?</li>
        <li>Explain constructors in C++ and Python.</li>
      </ul>

      <h3>🚀 Final Thoughts</h3>
      <ul>
        <li>Object-Oriented Programming is foundational in software development. It helps you:</li>
        <li>Build reusable components</li>
        <li>Write secure, clean, and modular code</li>
        <li>Master concepts used in interviews and real projects</li>
      </ul>
      <p>
        🎯 If you're preparing for coding interviews or building projects, OOP is a must-have skill.
      </p>
    </section>
  </div>
);

export default OOPS;