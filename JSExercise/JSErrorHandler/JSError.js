// JS Error Handling

// Custom Error Classes
 class OutOfRangeError extends Error {
    constructor(msg) {
      super(msg);
      this.name = "OutOfRangeError";
    }
  }

  class InvalidExprError extends Error {
    constructor(msg) {
      super(msg);
      this.name = "InvalidExprError";
    }
  }

  function evalString() {
    let expr = document.getElementById("input1").value.trim();

    try {
      if (!/^[0-9+\-*/\s]+$/.test(expr)) {
        throw new OutOfRangeError("Expression should only use numbers and + - * /");
      }

      let clean = expr.replace(/\s+/g, "");

      if (/([+\-*/]){2,}/.test(clean)) {
        throw new InvalidExprError("Invalid combination of operators");
      }

      if (/^[+\/*]/.test(clean)) {
        throw new SyntaxError("Cannot start with +, /, *");
      }

      if (/[+\-*/]$/.test(clean)) {
        throw new SyntaxError("Cannot end with +, -, *, /");
      }

      let result = eval(clean);
      alert("Result: " + result);
    } catch (err) {
      alert(err.name + ": " + err.message);
    }
  }