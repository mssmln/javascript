'use strict';

const PERSON = {
    name: {
        first: 'gio',
        last: 'zzz'
    }
};

Object.defineProperty(PERSON, 'full_name', {
    get() {
        return this.name.first + ' ' + this.name.last;
    },
    set(value) {
        let nameParts = value.split(' ');
        this.name.first = nameParts[0];
        this.name.last = nameParts[1];
    }
});

console.log(PERSON['full_name']);
PERSON['full_name'] = 'max croci';
console.log(PERSON['full_name']);
console.log(PERSON.name.first);