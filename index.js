const container = document.querySelector(".container");
let last_number = 42;

for (let i = 1; i < 43; i++) {
  addButton(i);
}

document.querySelector(".add").onclick = function () {
  addButton(++last_number);
};

function addButton(event) {
  const button = document.createElement("button"); //creating button
  button.textContent = event;
  container.append(button); //adding button to container
}
