//Create a query select that gets all of the elements that contain a number
const numberButtons = document.querySelectorAll('[data-number]');
//Create a query select that gets all of the elements that contain an operation
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');