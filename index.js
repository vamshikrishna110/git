let containerE1 = document.createElement("div");
document.body.appendChild(containerE1);

let paraE1 = document.createElement("p");
paraE1.textContent = "Name";
containerE1.appendChild(paraE1);
let inputE1 = document.createElement("input");
inputE1.type = "text";
containerE1.appendChild(inputE1);

let paraE2 = document.createElement("p");
paraE2.textContent = "address";
containerE1.appendChild(paraE2)
let inputE2 = document.createElement("input")
inputE2.type = "text"
containerE1.appendChild(inputE2)

let paraE3 = document.createElement("p");
paraE3.textContent = "door no";
containerE1.appendChild(paraE3);
let inputE3 = document.createElement("input")
inputE3.type = "text"
containerE1.appendChild(inputE3)

let breakE1 = document.createElement("br")
document.body.appendChild(breakE1)

let checkboxE1 = document.createElement("input");
checkboxE1.type = "checkbox";
checkboxE1.id = "mycheckbox"
document.body.appendChild(checkboxE1)

let breakE2 = document.createElement("br")
document.body.appendChild(breakE2)




let containerE2 = document.createElement("div");
document.body.appendChild(containerE2);

let paraE11 = document.createElement("p");
paraE11.textContent = "Name";
containerE2.appendChild(paraE11);
let inputE11 = document.createElement("input");
inputE11.type = "text";
containerE2.appendChild(inputE11);

let paraE22 = document.createElement("p");
paraE22.textContent = "address";
containerE2.appendChild(paraE22)
let inputE22 = document.createElement("input")
inputE22.type = "text"
containerE2.appendChild(inputE22)

let paraE33 = document.createElement("p");
paraE33.textContent = "door no";
containerE2.appendChild(paraE33);
let inputE33 = document.createElement("input")
inputE33.type = "text"
containerE2.appendChild(inputE33)


checkboxE1.onclick = function() {
    if (checkboxE1.checked == true) {
        inputE11.value = inputE1.value
        inputE22.value = inputE2.value
        inputE33.value = inputE3.value
    } else {
        inputE11.value = ""
        inputE22.value = ""
        inputE33.value = ""
    }
}
