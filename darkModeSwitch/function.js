// toggle background function
function toggleSwitch() {
    let body = document.querySelector("body");
    let currentClass = body.className;
    body.className = currentClass == "dark" ? "light" : "dark";
}