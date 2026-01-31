let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let operators = ["+", "-", "*", "/", "%"];
let lastAnswerTable = [];

function autoResize(){
    let len = input.value.length;
    if (len > 18) input.style.fontSize = "16px";
    else if (len > 12) input.style.fontSize = "20px";
    else input.style.fontSize = "26px";
}

function factorial(n) { 
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        let value = btn.innerText;

        if (value === "AC") {
            string = "";
            input.value = "0";
        } 
        else if (value === "DEL") {
            string = string.slice(0, -1);
            input.value = string || "0";
        } 
        else if (value === "=") {

            try {


                let exp = string
                    .replace(/π/g, "Math.PI")
                    .replace(/e/g, "Math.E")
                    .replace(/√/g, "Math.sqrt")
                    .replace(/sin\(/g, "Math.sin(Math.PI/180*")
                    .replace(/cos\(/g, "Math.cos(Math.PI/180*")
                    .replace(/tan\(/g, "Math.tan(Math.PI/180*")
                    .replace(/log\(/g, "Math.log10(")
                    .replace(/ln\(/g, "Math.log(")
                    .replace(/(\d+)!/g, "factorial($1)")
                    .replace(/\^/g, "**");

                let result = eval(exp);


                lastAnswer = result.toString(); 
                lastAnswerTable.push(lastAnswer);
                string = lastAnswer;
                input.value = string;

            } catch (e) {
                input.value = "Error";
                string = "";
            }
        } 
        else if (["sin", "cos", "tan", "log", "ln"].includes(value)) {
            string += value + "(";
            input.value = string;
        } 
        else if (value === "e") {
            if (string && !operators.includes(string.at(-1))) string += "*";
            string += "e";
            input.value = string;
        } 
        else if (value === "%") {
            string += "/100";
            input.value = string;
        }   
        else if (value === "√") {
            string += "√(";
            input.value = string;
        } 
        else if (value === "x²") {
            string += "^2";
            input.value = string;
        } 
        else if (value === "π") {
            if (string && !operators.includes(string.at(-1))) string += "*";
            string += "π";
            input.value = string;
        } 
        else if (value === "^") {
            string += "^";
            input.value = string;
        } 
        else if (value === "!") {
            string += "!";
            input.value = string;
        } 
        else if (value === "(") {
            string += "(";
            input.value = string;
        } 
        else if (value === ")") {
            string += ")";
            input.value = string;
        } 
        else if (operators.includes(value)) {
            let last = string.at(-1);
            if (string && !operators.includes(last)) {
                string += value;
                input.value = string;
            }
        } 
        else if (value === "Ans") {

            if (!lastAnswer) return;

            if (string && !operators.includes(string.at(-1))) {
                string += "*";
            }

            string += lastAnswer;
            input.value = lastAnswerTable;
        }
        else {
            string += value;
            input.value = string;
        }

        autoResize();
    });
});
