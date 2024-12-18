let firstOperator = 0
let secondOperator = 0
let operation = ""
let displayText = "0"
let numberWithComma = false

let numberButtons = document.querySelectorAll(".numberButton")
let operationButtons = document.querySelectorAll(".operationButton")
let commaButton = document.querySelector(".commaButton")
let processButton = document.querySelector(".processButton")
let clearButton = document.querySelector(".clearButton")
let backspaceButton = document.querySelector(".backspaceButton")
let display = document.querySelector("#display")


numberButtons.forEach((button) => {
    button.addEventListener("click", addNumberToDisplay)
  })

operationButtons.forEach((button) => {
    button.addEventListener("click", addOperation)
})

processButton.addEventListener("click", operate)
clearButton.addEventListener("click", clear)
backspaceButton.addEventListener("click", removeLast)
commaButton.addEventListener("click", addComma)


function addComma(e){
    if (not(numberWithComma)){
        numberWithComma = true
        displayText = displayText.concat(",") 
    }
}
function removeLast(e){
    if(displayText != "0"){
        displayText = displayText.slice(0, -1); 
    }
}

function turnDisplayTextToNumber(){
    if (numberWithComma){
        return parseFloat(displayText)
    }
    return parseInt(displayText)
}


function addNumberToDisplay(e){
    if(displayText == "0"){
        displayText = ""
    }
    const button = e.target
    displayText = displayText.concat(button.textContent) 
    display.textContent = displayText
}

function addOperation(e){
    const button = e.target  
    if (operation != ""){        
        operate()
    }
    else{       
        if( firstOperator == 0){
            firstOperator = turnDisplayTextToNumber()
        }
        else{
            secondOperator = turnDisplayTextToNumber()
        }
        
        displayText = "0"
                   
    }
    operation = button.textContent  
}

function operate(){
    secondOperator = turnDisplayTextToNumber()
    switch (operation) {
        case "/":                      
            if(secondOperator == 0){
                display.textContent = "CANNOT DIVIDE BY ZERO"
                firstOperator = 0
                secondOperator = 0
                operation = ""
                displayText = "0"
                return                
            }   
            result =  (firstOperator / secondOperator).toString()         
            break

        case "*":            
            result =  (firstOperator * secondOperator).toString()
            break

        case "-":            
            result =  (firstOperator - secondOperator).toString()            
            break

        case "+":            
            result =  (firstOperator + secondOperator).toString()
            break
        default:
            return
    }
    display.textContent = result
    firstOperator = parseInt(result)
    displayText = "0"
    operation = ""
    numberWithComma = false
}


function clear(){
    firstOperator = 0
    secondOperator = 0
    operation = ""
    displayText = "0"
    display.textContent = displayText
    numberWithComma = false
}