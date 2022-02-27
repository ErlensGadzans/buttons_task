const container = document.querySelector(".container");
let last_number = 42;

for (let i = 1; i <= last_number; i++) {
  addButton(i);
}

document.querySelector(".add").onclick = function (event) {
  addButton(++last_number);
};

document.querySelector(".remove").onclick = function (event) {
  //   console.log(container.children);
  //   console.log("remove button clicked");
  container.children[--last_number].remove();
};

function addButton(event) {
  const button = document.createElement("button"); //creating button
  button.textContent = event;
  container.append(button); //adding button to container
}
