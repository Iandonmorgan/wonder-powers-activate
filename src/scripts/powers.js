/* 
Challenge: One Function to Rule Them All
The learning objective of this challenge to write a function handler
to be used for multiple events, and uses information in the event argument
to perform common logic.

You may notice that your code to enable individual powers (not all at
    once) is very similar. To keep your code DRY, make one function that
    will handle activating a power depending on which button is clicked.
    (Hint: one way to get started is to use event.target.id.split("-")
    in your function)
 */


const toggleFunction = () => {
    let selector = event.target.id.split("-")[1];
    document.querySelector(`#${selector}`).classList.toggle("disabled");
    document.querySelector(`#${selector}`).classList.toggle("enabled");
}
/* 
OLD "NON-DRY" VERSION:

const flightHandlerFunction = () => {
    document.querySelector("#flight").classList.toggle("disabled");
    document.querySelector("#flight").classList.toggle("enabled");
}

const mindreadingHandlerFunction = () => {
    document.querySelector("#mindreading").classList.toggle("disabled");
    document.querySelector("#mindreading").classList.toggle("enabled");
}

const xrayHandlerFunction = () => {
    document.querySelector("#xray").classList.toggle("disabled");
    document.querySelector("#xray").classList.toggle("enabled");
}
*/

const activateHandlerFunction = () => {
    let queryPower = document.querySelectorAll(".power");
    for (let item of queryPower) {
        item.classList.remove("disabled");
        item.classList.add("enabled");
    }
}

const deactivateHandlerFunction = () => {
    let queryPower = document.querySelectorAll(".power");
    for (let item of queryPower) {
        item.classList.remove("enabled");
        item.classList.add("disabled");
    }
}

document.querySelector("#activate-flight").addEventListener("click", toggleFunction);
document.querySelector("#activate-mindreading").addEventListener("click", toggleFunction);
document.querySelector("#activate-xray").addEventListener("click", toggleFunction);

document.querySelector("#activate-all").addEventListener("click", activateHandlerFunction);
document.querySelector("#deactivate-all").addEventListener("click", deactivateHandlerFunction);