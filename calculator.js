
function calculator(){
    console.log("Calculating.....");
    /* this is the original assignment with the prompt
    let num1 = parseInt(prompt("Please enter a number."));
    let num2 = parseInt(prompt("Please enter your second number."));
    let operator = prompt("Please enter an operator ( + , - , * , / )."); 
    */
    /*if(operator == "+"){
            result = num1 + num2;
    }
    else if(operator == "-"){
            result = num1 - num2;
    }
    else if(operator == "*"){
            result = num1 * num2;
    }
    else if(operator == "/"){
            result = num1 / num2;}
    
    document.getElementById("results").innerHTML=`
    ${num1} ${operator} ${num2} = ${result}`;
    */
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let operator = (document.getElementById)("operator").value;

    if(operator == "+"){
        document.getElementById("results").value = num1 + num2;
    }
    else if(operator == "-"){
        document.getElementById("results").value = num1 - num2;
    }
    else if(operator == "*"){
        document.getElementById("results").value = num1 * num2;
    }
    else if(operator == "/"){
        document.getElementById("results").value = num1 / num2;

    }
        
}

