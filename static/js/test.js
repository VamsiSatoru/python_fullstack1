console.log("Hello World")
let student_name = "Krishna"
console.log("Student name is: "+ student_name)
let student_age = 22
let course_name = "Python Full Stack"
console.log("Student age is: "+ student_age, "course name is: "+ course_name)
let fee = 10000
let discount = 10
let discounted_fee = fee - (fee * discount / 100)
console.log("Discounted fee is: "+ discounted_fee)

let age=18
if(age>=18){
    console.log("Eligible for admission")
}
else{
    console.log("Not eligible for admission")
}
for(let i=1; i<=5; i++){
    console.log("Iterationj number: " + i)
}
const pi = 3.14
console.log("Value of pi is: " + pi)
let student ={
    name: "Sriram",
    age: 21,
    course: "Python Full Stack",
    fee: 10000
}
console.log("Student details: ", student)
function greetStudent(name){
    console.log("Hello" + Krishna 
        + ", welcome to NRIIT Learning Management System")
}
greetStudent(student_name)

function squareNumber(num){
    return num*num;
}
x=squareNumber(5);
console.log('Square of 5 is:',x)

function checkOddEven(num){
    if (num % 2==0) {
        return 'Even Number'
    } else{
        return 'Odd Number'
    }
}
console.log("Check if 7 is odd or even:", checkOddEven(7));