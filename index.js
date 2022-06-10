let divE1 = document.createElement("div");
document.body.appendChild(divE1)

let paraE1 = document.createElement("p");
paraE1.textContent = "0";
paraE1.id = "counterValue";
paraE1.classList.add("counter-value");
document.body.appendChild(paraE1);

let btnE2 = document.createElement("button");
btnE2.textContent = "decrease";
btnE2.classList.add("btnEle");
document.body.appendChild(btnE2);

let btnE1 = document.createElement("button");
btnE1.textContent = "increase";
btnE1.classList.add("btnEle");
document.body.appendChild(btnE1);

btnE1.onclick = function() {
    let previousCounterValue = paraE1.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) + 1;
    if (updatedCounterValue > 0) {
        paraE1.style.backgroundColor = "green";
    } else if (updatedCounterValue < 0) {
        paraE1.style.backgroundColor = "red";
    } else {
        paraE1.style.backgroundColor = "yellow";
    }
    paraE1.textContent = updatedCounterValue;

};

btnE2.onclick = function onDecrement() {
    let previousCounterValue = paraE1.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) - 1;
    if (updatedCounterValue > 0) {
        paraE1.style.backgroundColor = "green";
    } else if (updatedCounterValue < 0) {
        paraE1.style.backgroundColor = "red";
    } else {
        paraE1.style.backgroundColor = "yellow";
    }
    paraE1.textContent = updatedCounterValue;

};