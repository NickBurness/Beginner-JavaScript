const button = document.getElementById('calculate');

function calculateTip() {
    // Grab DOM Elements
    let service = document.getElementById('quality').value;
    let bill = document.getElementById('amount').value;
    let people = document.getElementById('quantity').value;

    // validates and ensures inputs are entered where required.
    if (bill === "" || service === 0) {
        alert('Enter required values');
        return;
    }

    // check if people input is empty, if it is, it equals and returns 1.
    if (people === "" || people <= 1) {
        people = 1;
    }

    // calculate the tip.
    let total = (bill * service) / people;
    // round tip to 2 decimal places, ensure it's always displaying to 2 dec places even if output is a whole number.
    total = Math.round(total * 100) / 100;
    total.toFixed(2);

    // display tip
    document.getElementById('display').style.display = "block";
    document.getElementById('tip').innerHTML = total;
}

// hide the tip amount on load
document.getElementById('display').style.display = "none";

// button onclick function.
button.onclick = () => calculateTip();