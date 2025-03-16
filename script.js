// Function to append value to the screen
function appendValue(value) {
    const screen = document.getElementById('screen');
    screen.value += value;
}

// Function to clear the screen
function clearScreen() {
    const screen = document.getElementById('screen');
    screen.value = '';
}

// Function to calculate the result
function calculateResult() {
    const screen = document.getElementById('screen');
    try {
        screen.value = eval(screen.value); // Evaluate the mathematical expression
    } catch (error) {
        screen.value = 'Error'; // If there's an error in the expression
    }
}
