// Grab DOM elements
const el = function (element) {
    if (element.charAt(0) === "#") { // If passed an ID...
        return document.querySelector(element); // ... returns single element
    }
    return document.querySelectorAll(element); // Otherwise, returns a nodelist
};

// Variables
let viewer = el("#view"),
    equals = el("#equals"),
    nums = el(".number"),
    ops = el(".operator"),
    theNum = "", // Current number
    oldNum = "", // First number
    resultNum, // Result
    operator;

// When: Number is clicked. Get the current number selected
const setNum = function () {
    if (resultNum) { // If a result was displayed, reset number
        theNum = this.getAttribute("data-number");
        resultNum = "";
    } else { // Otherwise, add digit to previous number (this is a string!)
        theNum += this.getAttribute("data-number");
    }
    viewer.innerHTML = theNum; // Display current number
};

// Pass number to oldNum and save operator
const moveNum = function () {
    oldNum = theNum;
    theNum = "";
    operator = this.getAttribute("data-operator");
    equals.setAttribute("data-result", ""); // Reset result
};

// Calculate result
const displayNum = function () {
    // Convert string input to numbers
    oldNum = parseFloat(oldNum);
    theNum = parseFloat(theNum);
    // Perform operation
    switch (operator) {
        case "plus":
            resultNum = oldNum + theNum;
            break;
        case "minus":
            resultNum = oldNum - theNum;
            break;
        case "multiply":
            resultNum = oldNum * theNum;
            break;
        case "divide":
            resultNum = oldNum / theNum;
            break;
        case "squareRoot":
            resultNum = Math.sqrt(theNum);
            break;
        case "power":
            resultNum = Math.pow(oldNum, theNum);
            break;
        default:
            resultNum = theNum;
    }
    // If NaN or Infinity returned
    if (!isFinite(resultNum)) {
        if (isNaN(resultNum)) {
            resultNum = "You broke me!"; // If result is not a number
        } else {
            resultNum = "Nice try"; // If result is infinity, set off by dividing by zero
        }
    }
    // Display result
    viewer.innerHTML = resultNum;
    equals.setAttribute("data-result", resultNum);
    // Reset oldNum and keep result
    oldNum = 0;
    theNum = resultNum;
};
// Clear everything when user presses C
const clearAll = function () {
    oldNum = "";
    theNum = "";
    viewer.innerHTML = "0";
    equals.setAttribute("data-result", resultNum);
};
// Add click event to numbers
for (let i = 0, l = nums.length; i < l; i++) {
    nums[i].onclick = setNum;
}
// Add click event to operators
for (let i = 0, l = ops.length; i < l; i++) {
    ops[i].onclick = moveNum;
}
// Add click event to equal sign
equals.onclick = displayNum;
// Add click event to clear button
el("#clear").onclick = clearAll;