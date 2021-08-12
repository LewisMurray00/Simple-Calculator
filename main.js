class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement  
    }
}


//Create a query select that gets all of the elements that contain a number
const numberButtons = document.querySelectorAll('[data-number]');

//Create a query select that gets all of the elements that contain an operation
const operationButtons = document.querySelectorAll('[data-operation]');

//Create a query select that gets the element that contains equals
const equalsButton = document.querySelector('[data-equals]');

//Create a query select that gets the element that contains delete
const deleteButton = document.querySelector('[data-delete]');

//Create a query select that gets the element that contains all clear
const allClearButton = document.querySelector('[data-all-clear]');

//Create a query select that gets the element that contains previous operand
const previousOperandTextElement = document.querySelector('[data-previous-operand]');

//Create a query select that gets the element that contains current operand
const currentOperandTextElement = document.querySelector('[data-current-operand]');

