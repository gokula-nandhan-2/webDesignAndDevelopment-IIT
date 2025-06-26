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


/*
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

}*/