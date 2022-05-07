let preVal = "";
let newVal = "";
let resultVal = "";
let mathOperator = "";
let decimalClicked = false;
let valMemStored = "";

function numButPress(num){
    if(resultVal){
        newVal = num;
        resultVal = "";
    } else {
        if(num === "."){
            if(decimalClicked != true){
                newVal += num;
                decimalClicked = true;
            }
        } else {
            newVal += num;
        }
    }
    document.getElementById("entry").value = newVal
};

function mathButPress(operator){
    if(!resultVal){
        preVal = newVal;
    } else {
        preVal = resultVal;
    }
    newVal = "";
    decimalClicked = false;
    mathOperator = operator;
    resultVal = "";
    document.getElementById("entry").value = "";
};

function equalButPress(operator){
    decimalClicked = false;
    preVal = parseFloat(preVal);
    newVal = parseFloat(newVal);

    switch(mathOperator){
        case "+":
            resultVal = preVal + newVal;
            break;
        case "-":
            resultVal = preVal - newVal;
            break;
        case "*":
            resultVal = preVal * newVal;
            break;
        case "/":
            resultVal = preVal / newVal;
            break;
        default:
            resultVal = newVal;
            
    }
    preVal = resultVal;
    document.getElementById("entry").value = resultVal;
};

function clearButPress(){
    preVal = "";
    newVal = "";
    resultVal = "";
    mathOperator = "";
    decimalClicked = false;
    document.getElementById("entry").value = "0";

}

function copyButPress(operator){
    valMemStored = document.getElementById("entry").value
};

function pasteButPress(operator){
    if(valMemStored = true){
        document.getElementById("entry").value = valMemStored;
        newVal = valMemStored;
    }
};
