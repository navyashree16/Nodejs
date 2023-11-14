const name = 'navya';
let age = 23;
const hasHobbies =true;

// name = 'navyashree';
age = 30;

const summariseUser = (userName , userAge , userHasHobbies)=> {
    return (
        'Name is' +
        userName +
        ',age is' +
        userAge +
        'and the user has hobbies:' +
        userHasHobbies
    )
}


//const add = (a,b) => a+b;
const addOne = a => a+1;

//console.log(add(1,2));
console.log(addOne(1));

console.log(summariseUser(name , age , hasHobbies));