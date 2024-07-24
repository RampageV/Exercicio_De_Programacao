const previousOperationText = document.querySelector("#revious-operation")
const currentOperationText = document.querySelector("#current-operation")
const buttons = document.querySelectorAll("#buttons-container button") /*Selecionando todo os botoes*/

class Calculator {
	constructor(previousOperationText, currentOperationText) {
		this.previousOperationText = previousOperationText
		this.currentOperationText = currentOperationText
		this.currentOperation = ""
	}

	addDigit(digit) {

		//Check if current operation already has a dot
		if(digit === "." && this.currentOperationText.innerText.includes(".")){
            return;
		}
		this.currentOperation = digit
		this.updateScreen()
	}

	// process all calculator operation
	processOperation(operation){
      
		// get current and previous value
		let operationValue
		const previous = +this.previousOperationText.innerText;
		const current = +this.currentOperation.innerText

		switch(operation){
			case "+":
                 operationValue = previous + current;
				 this.updateScreen(operationValue, operation, current, previous)
				break;
			default:
				return;	
		}
 	}
	// Change values of the calculator screen
	updateScreen(operationValue = null, operation=null, current=null, previous=null, ) {

		if(operationValue === null){
			this.currentOperationText.innerText += this.currentOperation
		}else{
			// Check if value is zero, if it is just add current value
			if(previous === 0){
				operationValue = current
			}

			this.previousOperationText.innerText = `${operationValue}`

		}
	}
}

const cal = new Calculator(previousOperationText, currentOperationText)

buttons.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		const value =e.target.innerText /*Quando é botão a gente pegar inneText, se for input pega value*/

		if (+value >= 0 || value === ".") {
			cal.addDigit(value)
		} else{
			cal.processOperation(value)
		}
	})
})
