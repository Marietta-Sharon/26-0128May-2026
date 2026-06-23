window.onload = function () {
    // Welcome alert first
    alert("🎉 Welcome to ElectroTech Electronics!");

    // Then ask for name
    let name = prompt("Please enter your name:");
    if (name) {
        alert("Hello " + name + "! Thank you for visiting ElectroTech Electronics.");
    } else {
        alert("Welcome! Enjoy browsing our products.");
    }
};
