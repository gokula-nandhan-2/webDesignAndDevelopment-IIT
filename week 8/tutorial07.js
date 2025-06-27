function getRadioValue(radioArray){
    for(let i = 0; i<radioArray.length ; i++){
        if(radioArray[i].checked){
            return radioArray[i].value;
        }
    }
    return "";
}

function getSelectedValue(selectList){
    return selectList[selectList.selectedIndex].value;
}

function getSelectedText(selectList){
    return selectList.options[selectList.selectedIndex].text;
}



document.addEventListener(onchange,CheckOptions(this.form));

function CheckOptions(formRef){
    displayBouquet(chosenBoquet);
}

function displayBouquet(bouquet){
    switch(bouquet){
        case "white":
            break;
        case "pink":
            break;
        case "red":
            break;
    }
}

function resetOrder(){

}






document.getElementById("bouquetOptions").addEventListener("change", function () {
  CheckOptions(document.forms[0]);
});

document.getElementById("orderForm").addEventListener("reset", function () {
  resetOrder();
});

function CheckOptions(formRef) {
  let optionValue = getSelectedValue(formRef.bouquetOptions);

  if (optionValue.includes("Champagne")) {
    document.getElementById("product1").querySelector("img").src = "whiteChamp.jpg";
    document.getElementById("product2").querySelector("img").src = "pinkChamp.jpg";
    document.getElementById("product3").querySelector("img").src = "redChamp.jpg";
  } else {
    document.getElementById("product1").querySelector("img").src = "white.jpg";
    document.getElementById("product2").querySelector("img").src = "pink.jpg";
    document.getElementById("product3").querySelector("img").src = "red.jpg";
  }

  let chosenBouquet = getRadioValue(formRef.colour);
  displayBouquet(chosenBouquet);
}

function displayBouquet(bouquet) {
  let orderDiv = document.getElementById("order");
  if (!bouquet) {
    orderDiv.innerHTML = "";
    return;
  }

  let selectedProduct = document.getElementById("product1");
  if (bouquet === "pink") selectedProduct = document.getElementById("product2");
  if (bouquet === "red") selectedProduct = document.getElementById("product3");

  orderDiv.innerHTML = selectedProduct.innerHTML;
}

function resetOrder() {
  document.getElementById("product1").querySelector("img").src = "white.jpg";
  document.getElementById("product2").querySelector("img").src = "pink.jpg";
  document.getElementById("product3").querySelector("img").src = "red.jpg";

  document.getElementById("order").innerHTML = "";
}
