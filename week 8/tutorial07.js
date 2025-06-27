
// Utility functions to get selected values
function getRadioValue(name) {
    const radios = document.querySelectorAll(`input[name="${name}"]`);
    for (let radio of radios) {
        if (radio.checked) return radio.value;
    }
    return null;
}

function getSelectedValue(selectId) {
    const select = document.getElementById(selectId);
    return select.options[select.selectedIndex].value;
}

// Event listener for dropdown selection
document.getElementById("select").addEventListener("change", function () {
    CheckOptions();
});

// Event listener for form reset
document.querySelector("form").addEventListener("reset", function () {
    resetOrder();
});

// Core function to check dropdown and radio selections
function CheckOptions() {
    const option = getSelectedValue("select");

    // Swap images if champagne options selected
    if (option.includes("Champagne")) {
        document.querySelector("#product1 img").src = "imagesJS4/images/white-gift.jpeg";
        document.querySelector("#product2 img").src = "imagesJS4/images/pink-gift.jpeg";
        document.querySelector("#product3 img").src = "imagesJS4/images/red-gift.jpeg";
    } else {
        document.querySelector("#product1 img").src = "imagesJS4/images/white.jpeg";
        document.querySelector("#product2 img").src = "imagesJS4/images/pink.jpeg";
        document.querySelector("#product3 img").src = "imagesJS4/images/red.jpeg";
    }

    // Get selected bouquet color
    const bouquet = getRadioValue("colour");
    displayBouquet(bouquet);
}

// Show selected product in the order preview
function displayBouquet(bouquet) {
    const orderDiv = document.getElementById("order");

    if (!bouquet) {
        orderDiv.innerHTML = "";
        return;
    }

    const product = document.getElementById(`product${bouquet === "white" ? 1 : bouquet === "pink" ? 2 : 3}`);
    orderDiv.innerHTML = product.innerHTML;
}

// Reset to default bouquet images and clear order
function resetOrder() {
    document.querySelector("#product1 img").src = "imagesJS4/images/white.jpeg";
    document.querySelector("#product2 img").src = "imagesJS4/images/pink.jpeg";
    document.querySelector("#product3 img").src = "imagesJS4/images/red.jpeg";
    document.getElementById("order").innerHTML = "";
}
