
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

// Event listener for dropdown
document.getElementById("select").addEventListener("change", CheckOptions);

// Event listener for form reset
document.querySelector("form").addEventListener("reset", function () {
    resetOrder();
});

// Event listener for radio changes
document.querySelectorAll('input[name="colour"]').forEach(radio => {
    radio.addEventListener("change", CheckOptions);
});

function CheckOptions() {
    const option = getSelectedValue("select");
    const useChampagne = option.includes("Champagne");
    const useExtra = option.includes("extra");

    // Update image paths
    document.querySelector("#product1 img").src = useChampagne ? "imagesJS4/images/white-gift.jpeg" : "imagesJS4/images/white.jpeg";
    document.querySelector("#product2 img").src = useChampagne ? "imagesJS4/images/pink-gift.jpeg" : "imagesJS4/images/pink.jpeg";
    document.querySelector("#product3 img").src = useChampagne ? "imagesJS4/images/red-gift.jpeg" : "imagesJS4/images/red.jpeg";

    // Update displayed prices
    const priceSpans = document.querySelectorAll(".base-price");
    priceSpans.forEach(span => {
        const base = parseFloat(span.dataset.base);
        let finalPrice = base;

        if (useExtra) finalPrice *= 1.5;
        if (useChampagne) finalPrice += 15;

        span.textContent = finalPrice.toFixed(2);
    });

    // Update order preview
    const bouquet = getRadioValue("colour");
    displayBouquet(bouquet);
}

function displayBouquet(bouquet) {
    const orderDiv = document.getElementById("order");

    if (!bouquet) {
        orderDiv.innerHTML = "";
        return;
    }

    const productId = bouquet === "white" ? "product1" : bouquet === "pink" ? "product2" : "product3";
    const selectedProduct = document.getElementById(productId);
    orderDiv.innerHTML = selectedProduct.innerHTML;
}

function resetOrder() {
    // Reset images to default
    document.querySelector("#product1 img").src = "imagesJS4/images/white.jpeg";
    document.querySelector("#product2 img").src = "imagesJS4/images/pink.jpeg";
    document.querySelector("#product3 img").src = "imagesJS4/images/red.jpeg";

    // Reset prices to base
    const priceSpans = document.querySelectorAll(".base-price");
    priceSpans.forEach(span => {
        span.textContent = parseFloat(span.dataset.base).toFixed(2);
    });

    // Clear order preview
    document.getElementById("order").innerHTML = "";
}

