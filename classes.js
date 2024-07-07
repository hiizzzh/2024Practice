// unnamed class
let person = class {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

console.log(person.name) // person

// named class

let person2 = class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    get name() { // getter
        return this.name
    }

    set name(name) { // setter
        if(typeof name !== "string") { // checking type
            throw new Error ('Name must be a string') // throwing error
        }
        this.name = name
    }
}

let person3 = class Human extends person2 { // extending class
    constructor() {
        super() // extended constructor
    }

    static get [Symbol.species]() {
        return Array // returning an object of the array
    }
}

console.log(person2.name)
console.log(person3.name)