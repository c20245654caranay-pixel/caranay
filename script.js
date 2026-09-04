console.log("Hello, World!");
console.log("From script.js file.");

const myName = "Nelsie";
let age = 18;
age = 20;
myNumber = 9945245958;
myaddress = "Manapla";


console.log(`My name is ${myName}, ${age} yrs old.`);
console.log(`Number: ${myNumber}`);
console.log(`Address: ${myaddress}`);
console.log(67);

function greet(greetings, name) {
    if (Array.isArray(name)) {
        names = name.join(", ");
    }
    return `${greetings} sa emu, ${name}`;

    console.log(greet("Mayong aga", ["Nelsie", "Bai", "Soy", "Tol", "Erp"]));
}
const heading = document.querySelector("h1");
console.log(heading);

const contactHeader = document.querySelector("#contact h2");
console.log(contactsHeading);

const projectheading = document.querySelector("#services h2");
console.log(projectheading);