// Basic Types
/*
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let x: [string, number] = ["hello", 10]; // Tuple
let notSure: any = 4; // Any type (TRY TO AVOID)
let unknown: unknown = 4; // Unknown type (BETTER THAN 'any' type)
*/

//////////////////////////////

// Object Types

// This is a reusuable type object called 'Person' that can be used in multiple places
/*
type Person = {
  name: string;
  age: number;
};

// This is an object that uses the Person type
/*
const person: Person = {
  name: "John",
  age: 30,
};

// This is an array of Person objects that uses the Person type
const lotsOfPeople: Person[] = [person, person, person];
console.log(lotsOfPeople);
*/

//////////////////////////////

// Union Types
/*
let union: string | number;
union = "string";
union = 1;
*/

//////////////////////////////

// Function Types
/* 
    void: The void type is used for functions that do not return a value. 
    When a function is declared with a void return type, it means that the function can perform operations, but it does not return anything. 
    In JavaScript, this translates to the function returning undefined, which is the default return value for functions without a return statement.

    function logMessage(message: string): void {
        console.log(message);
    }

    In this example, logMessage prints a message to the console but does not return any value.

    never: The never type represents values that never occur. 
    It's used for functions that do not have a reachable endpoint, such as a function that always throws an error or a function with an infinite loop.

    function throwError(errorMsg: string): never {
        throw new Error(errorMsg);
    }

    In this example, throwError always throws an error and never returns a value. It doesn't just return undefined like a void function; it literally does not return at all.

    In summary, void is used when a function returns no value (implicitly returns undefined), while never is used when a function cannot complete normally and thus has no chance to return anything at all.
*/

/*
let printName: (name: string) => void; // Function that returns nothing (void)
let printName2: (name: string) => never; // Function that never returns anything

printName = (name: string) => {
  console.log(name);
};
*/

//////////////////////////////

// Type - Interface
/*
interface Person {
  name: string;
  age: number;
}

interface Guy extends Person {
  job: string;
}

const person: Person = {
  name: "John",
  age: 30,
};

const guy: Guy = {
  name: "John",
  age: 30,
  job: "Developer",
};
*/

function Intro() {
  return <div>intro</div>;
}

export default Intro;
