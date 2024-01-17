const buttonsEl = document.querySelectorAll("button");
const resultElement = document.getElementById("result");
for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    const buttonValue = buttonsEl[i].textContent;
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
}

function clearResult() {
  resultElement.value = "";
}

function calculateResult() {
  resultElement.value = eval(resultElement.value);
}

function appendValue(buttonValue) {
  resultElement.value += buttonValue;
}