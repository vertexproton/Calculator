document.addEventListener("DOMContentLoaded", function () {
    const display = document.querySelector(".input");
    const buttons = document.querySelectorAll(".button");
  
    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        if (e.target.innerText === "=") {
          try {
            display.value = eval(display.value);
          } catch (error) {
            display.value = "Error";
          }
        } else if (e.target.innerText === "C") {
          display.value = "";
        } else {
          display.value += e.target.innerText;
        }
      });
    });
  });
  