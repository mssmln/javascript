'use strict';
(function() {
    class Person { // alternative way to the constructor function
        constructor(fname, lname, age) {
            this.fname = fname;
            this.lname = lname;
            this.age = age;
        }
        // getter and setter live on the prototype (you access them with Person.prototype) 
        // whereas everything else on the obj instance
        get fullName() { 
            return this.fname + ' ' + this.lname;
        }
        set fullName(value) {
            let nameParts = value.split(' ');
            this.fname = nameParts[0];
            this.lname = nameParts[1];
        }
        isAdult() {
            return this.age > 17;
        }
    }


    class Student extends Person{
        constructor(fname, lname, age) {
            super(fname, lname, age);
            this._enrolledCourses = [];
        }
        enroll(courseId) {
            this._enrolledCourses.push(courseId);
        }
        getCourses() {
            return this.fullName + ': ' + this._enrolledCourses.join(', ');
        }
    }


    class ExampleStatic {
        constructor() {}
        // static keyword allows you not to instantiate the class with new keyword to use its methods or props, see ExampleStatic.numAssoluto(-500)
        // you can use static even in constructor functions
        static numAssoluto(n) {
            return Math.abs(n);
        } 
        static stringa = 'proprieta statica';
    }

    // by default getter's enumerable is set to false, if you want to display its properties then use next line (technically it's correct but it does not show up)
    Object.defineProperty(Person.prototype, 'fullName', {enumerable: true});
    console.log(Person.prototype);

    let massimiliano = new Person('Max', 'Croci', 28);
    console.log(massimiliano);
    console.log(massimiliano.fullName);
    // // massimiliano.fullName = 'Giulia M';
    // // console.log(massimiliano.fullName);
    console.log(massimiliano.isAdult());

    let giu = new Student('Giulia', 'M', 26);
    giu.enroll('CS101');
    giu.enroll('MA101');
    console.log(giu);

    console.log(ExampleStatic.numAssoluto(-500));
    console.log(ExampleStatic.stringa);

})();