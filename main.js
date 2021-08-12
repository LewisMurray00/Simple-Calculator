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

//Class and constructor are used to take all the inputs and functions for the calculator, it is needed so we know where to place the text
class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement  
      this.clear();
    }

    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined; 

    }

    delete(){
        
    }

    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation){

    }

    compute(){

    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand
    }
};

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})
