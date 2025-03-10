const person = {
    name: 'John Doe',
    age: 25,
    friends: ['Jane Doe', 'James Smith'], 
}

const newPerson = JSON.stringify(person);
console.log(newPerson);