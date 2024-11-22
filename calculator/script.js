const display = document.getElementById('display');

// Append numbers/operators to the display
function append(value) {
    if (display.innerText === '0' && !isNaN(value)) {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

// Clear the display
function clearDisplay() {
    display.innerText = '0';
}

// Delete the last character
function deleteLast() {
    display.innerText = display.innerText.slice(0, -1) || '0';
}

// Calculate the result
function calculate() {
    try {
        display.innerText = eval(display.innerText.replace('÷', '/').replace('×', '*'));
    } catch (error) {
        display.innerText = 'Error';
    }
}
