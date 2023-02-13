'use strict';
(function() {
    function Person(fName, lName){
        this.fName = fName;
        this.lName = lName;
    }
    Person.prototype.age = 13;
    let max = new Person('Max', 'Croci');
    console.log(Person.prototype === max.__proto__); // the same in memory, so changes will reflect them all
    let gio = new Person('Gio', 'Ripoldi');
    console.log('person:', Person.prototype, 'max:', max.__proto__, 'gio:', gio.__proto__);
    Person.prototype.age = 23;
    console.log('person:', Person.prototype, 'max:', max.__proto__, 'gio:', gio.__proto__);

    
    console.log(max.age = 99);
    console.log(max.age === max.__proto__.age);
    console.log(max.hasOwnProperty('age'));
    delete max.age;
    console.log(max.hasOwnProperty('age'));
    console.log(max.age === max.__proto__.age);


    Person.prototype = {age: 110};
    // sof will point to the new prototype obj declared above
    let sof = new Person('Sofia', 'Spanish');
    console.log('person:', Person.prototype, 'sof:', sof.__proto__, 'max:', max.__proto__, 'gio:', gio.__proto__);
    



})();