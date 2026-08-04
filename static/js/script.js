alert("Welcome to NRIIT Learning Management System")
let heading = document.getElementById("Welcome");
heading.innerHTML = "Welcome Future Software Engineers"
console.log("Heading element: ", heading)
let msg = document.getElementById("message")
msg.innerHTML = "JavaScript is fun"
console.log("Message element: ", msg)
function showmessage() {
    alert("Welcome to NRIIT Learning Management System")
}
function changeHeading() {
    document.getElementById("welcome").innerHTML = "Welcome Python FullStack Developers"
}
let heading1=document.querySelector("#welcome");
console.log("Heading element: ", heading1)
let button = document.getElementById("btnGreeting");
button.addEventListener("click", function(){
    alert("Welcome to javascript Event Handling");
});
let registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", function (event) {
    event.preventDafault();
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
if(!name || !email || !password){
    alert("PLease fill in all fields.");
    return;
}    
alert("Registration Scuccesful!");
console.log("Name:", name);
console.log("Email:",email);
console.log("Password:",password);
});