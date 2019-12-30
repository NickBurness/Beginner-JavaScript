function openPane(event) {
    let activePane = document.querySelectorAll(".active");

    activePane.forEach(function (tab) {
        tab.className = tab.className.replace("active", "");
    });

    // activate and display pane
    event.target.parentElement.className += " active";
    document.getElementById(event.target.href.split("#")[1]).className += " active";
}

const element = document.getElementById("button-tab");

element.addEventListener("click", openPane, false);