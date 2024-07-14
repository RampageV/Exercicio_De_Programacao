const previousOperationText = document.querySelector("#revious-operation")
const currentOperationText = document.querySelector("#current-operation")
const buttons = document.querySelectorAll(
	"#buttons-container button"
) /*Selecionando todo os botoes*/

class Calculator {
	constructor(previousOperationText, currentOperationText) {
		this.previousOperationText = previousOperationText
		this.currentOperationText = currentOperationText
		this.currentOperation = ""
	}

	addDigit(digit) {
		this.currentOperation = digit
		this.updateScreen()
	}

	updateScreen() {
		this.currentOperationText.innerText += this.currentOperation
	}
}

const cal = new Calculator(previousOperationText, currentOperationText)

buttons.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		const value =
			e.target
				.innerText /*Quando é botão a gente pegar inneText, se for input pega value*/

		if (+value >= 0 || value === ".") {
			cal.addDigit(value)
		}
	})
})
