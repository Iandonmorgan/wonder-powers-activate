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

document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction);
document.querySelector("#activate-mindreading").addEventListener("click", mindreadingHandlerFunction);
document.querySelector("#activate-xray").addEventListener("click", xrayHandlerFunction);

document.querySelector("#activate-all").addEventListener("click", activateHandlerFunction);
document.querySelector("#deactivate-all").addEventListener("click", deactivateHandlerFunction);