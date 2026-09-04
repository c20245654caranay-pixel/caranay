console.log("Hello, World!");
console.log("From script.js file.");

const myName = "Arabelle";
let age = 18;
age = 20;
myNumber = 9638409151;
myaddress = "Manapla";


console.log(`My name is ${myName}, ${age} yrs old.`);
console.log(`Number: ${myNumber}`);
console.log(`Address: ${myaddress}`);
console.log(67);

function greet(greetings, names = []) {
    if (Array.isArray(names)) {
        names = names.join(',');
    }
    return `${greetings} sa enyu, ${names}`;
}
console.log(greet("Mayong aga", ["Arabelle", "Bai", "Soy", "Erp"]));

const heading = document.querySelector("h1");
heading.textContent = "Ronel";
heading.style.color = "purple";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "50px";
console.log(heading.textContent);

heading.addEventListener("click", function () {
    heading.style.color = "red";
    console.log("Heading was clicked!");
});

const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading)

const projectsHeading = document.querySelector("#services h2");
console.log(projectsHeading)

const toggleButton = document.querySelector("#switch");
const body = document.querySelector("body");
let isOff = false;

toggleButton.addEventListener("click", function () {
    isOff = !isOff;

    if (isOff) {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
});


