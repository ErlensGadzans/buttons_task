const container = document.querySelector(".container");

for (let i = 1; i < 43; i++) {
  const button = document.createElement("button"); //creating button
  button.textContent = i;
  container.append(button); //adding button to container
}
