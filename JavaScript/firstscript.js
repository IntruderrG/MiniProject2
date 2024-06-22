console.log("I am the first JavaScript");
const inputElement = document.getElementById("input");
const inputElement2 = document.getElementsByClassName("mainDiv");
function clickForTimer() {}
inputElement.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    let input = inputElement.value;
    input = Number(input) + Number(1);
    const interval = setInterval(() => {
      input = Number(input);
      input = input - 1;
      inputElement.value = input;
      if (input == 0) {
        console.log("TIME OUT");
        clearInterval(interval);
        inputElement.value = "TIME OUT";
      }
    }, 1000);
    // Perform further actions with the user input
  }
});
