function calculator(a: number, b: number, operator: string): number | never {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) {
        throw new Error("Division by zero is not allowed!");
      }
      return a / b;
    default:
      throw new Error(`Invalid operator: '${operator}'. Use +, -, *, or /.`);
  }
}

// Example Usage
try {
  console.log(calculator(10, 2, "+")); // Output: 12
  console.log(calculator(10, 2, "-")); 
  console.log(calculator(10, 2, "*")); 
  console.log(calculator(10, 2, "/")); 
  console.log(calculator(10, 0, "/")); 
  console.log(calculator(10, 2, "%")); 
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message); 
  } else {
    console.error("An unknown error occurred.");
  }
}
