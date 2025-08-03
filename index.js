// Create a display element
const display = document.createElement("div");
display.id = "display";
display.style.width = "80%";
display.style.margin = "30px auto";
display.style.padding = "20px";
display.style.border = "2px solid black";
display.style.borderRadius = "10px";
display.style.minHeight = "40px";
display.style.fontSize = "20px";
display.style.backgroundColor = "#f0f0f0";
document.body.insertBefore(display, document.getElementById("container"));

// Initialize input string
let input = "";

// Handle click events on keys
const keys = document.querySelectorAll("#container > div");
keys.forEach(key => {
    key.addEventListener("click", () => {
        const keyText = key.textContent.trim();

        switch (keyText) {
            case "Backspace":
                input = input.slice(0, -1);
                break;
            case "Space":
                input += " ";
                break;
            case "Enter":
                input += "\n";
                break;
            case "Tab":
                input += "\t";
                break;
            case "Caps lock":
            case "Shift":
            case "Ctrl":
            case "Fn":
            case "Win":
            case "alt":
                // Do nothing for modifier keys
                break;
            default:
                input += keyText;
        }

        display.textContent = input;
    });
});
