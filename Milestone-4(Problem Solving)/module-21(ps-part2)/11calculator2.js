function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {
    return "Division by zero error";
  }
  return a / b;
}

function calculator(a, b, operation) {
  switch (operation) {
    case "add":
      return add(a, b);
    case "subtract":
      return subtract(a, b);
    case "multiply":
      return multiply(a, b);
    case "divide":
      return divide(a, b);

      default:
        return "Invalid Operation";
  }
}

const result = calculator(300, 10, "divide");
console.log("result", result);
