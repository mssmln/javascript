// prototypal inheritance chain, alternatively you can do this by using classes
'use strict';
(function() {
    function Person(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        Object.defineProperty(this, 'full name', {
            get() {
                return this.fname + ' ' + this.lname;
            },
            enumerable: true
        });
    }


    function Student(fname, lname, age) {
        Person.call(this, fname, lname, age); // matters to implement inheritance chain
        this._enrolledCourses = [];
        this.enroll = courseId => {
            this._enrolledCourses.push(courseId);
        };
        this.getCourses = () => {
            return this['full name'] + ': ' + this._enrolledCourses.join(', ');
        };
    }

    console.log(Student.prototype.constructor);
    // we want to call Person func when we create a new student, that's why we use create and not new keyword
    Student.prototype = Object.create(Person.prototype); // matters to implement inheritance chain 
    console.log(Student.prototype.constructor); // without next line Function: Person would be printed out and we want Function: Student

    Student.prototype.constructor = Student; // matters to implement inheritance chain 
    console.log(Student.prototype.constructor);


    let giulia = new Student('Giulia', 'Rossi', 26);
    giulia.enroll('CS205');
    giulia.enroll('MA101');
    console.log(giulia.getCourses());

    console.log(giulia);
    console.log(giulia.__proto__);
    console.log(giulia.__proto__.__proto__);
    console.log(giulia.__proto__.__proto__.__proto__);
    console.log(giulia.__proto__.__proto__.__proto__.__proto__);
})();