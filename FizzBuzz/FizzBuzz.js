// TODO: Define constants for the form and the result display area
const result = document.getElementById("result")
const form = document.getElementById("input")
const BTN = document.getElementById("submit")
// TODO: Add the first line of the event listener to handle form submission
BTN.addEventListener("click", function() {
    // Prevent the form from refreshing the page
    event.preventDefault();
// TODO: Get the number from the form input
    let num = Number(form.value)
    let output = ""
// TODO: Write FizzBuzz logic here
// If divisible by both 3 and 5, set the output to "FizzBuzz"
// If divisible by 3, set the output to "Fizz"
// If divisible by 5, set the output to "Buzz"
// Otherwise, set the output to the number itself

    if (num % 3 == 0){
        output += "Fizz"
    }
    if (num % 5 == 0){
        output += "Buzz"
    }
    if (output == ""){
        output = num
    } 

// Display the result on the page
    result.textContent = output;
})
console.log("hello?")