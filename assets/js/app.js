let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let operators = ["+", "-", "*", "/", "%"];

function autoResize(){
    let len = input.value.length;
    if (len > 18) input.style.fontSize = "16px";
    else if (len > 12) input.style.fontSize = "20px";
    else input.style.fontSize = "26px";
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        let value = btn.innerHTML;

        if (value === "AC") {
            string = "";
            input.value = "";
        }

        else if (value === "DEL") {
            string = string.slice(0, -1);
            input.value = string;
        }

        else if (value === "=") {
            try {
                string = eval(string).toString();
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        }

        else if (value === "sin") {
            string = Math.sin(eval(string) * Math.PI / 180).toString();
            input.value = string;
        }

        else if (value === "cos") {
            string = Math.cos(eval(string) * Math.PI / 180).toString();
            input.value = string;
        }

        else if (value === "tan") {
            string = Math.tan(eval(string) * Math.PI / 180).toString();
            input.value = string;
        }

        else if (value === "√") {
            string = Math.sqrt(eval(string)).toString();
            input.value = string;
        }

        else if (value === "x²") {
            string = Math.pow(eval(string), 2).toString();
            input.value = string;
        }

        else if (value === "π") {
            string += Math.PI.toFixed(5);
            input.value = string;
        }

        else if (value === "log") {
            string = Math.log10(eval(string)).toString();
            input.value = string;
        }
        else if (value === "^") {
            string += "**";
            input.value = string;
        }
        else if (operators.includes(value)) {
            let last = string[string.length - 1];
            if (!operators.includes(last)) {
                string += value;
                input.value = string;
            }
        }

        else {
            string += value;
            input.value = string;
        }

        autoResize();
    });
});
