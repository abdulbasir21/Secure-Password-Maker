let rangeSlider = document.getElementById('rangeSlider');
let sliderValue = document.getElementById('sliderValue');
let inputField = document.getElementById('inputField');
let lowerCase = document.getElementById('lowerCase');
let upperCase = document.getElementById('upperCase');
let number = document.getElementById('number');
let symbol = document.getElementById('symbol');
let genBtn = document.getElementById('genBtn');
let chck = document.getElementsByClassName('chck');
let copy=document.getElementById('copy')

sliderValue.textContent = rangeSlider.value;
rangeSlider.addEventListener("input", () => {
    sliderValue.textContent = rangeSlider.value;
});

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let Numbers = "0123456789";
let Symbols = "!@#$%^&*?/\\-";

// Function to check if at least one checkbox is checked
function isAnyCheckboxChecked() {
    return lowerCase.checked || upperCase.checked || number.checked || symbol.checked;
}

// Function for generating password
function generatePassword() {
    let genPassword = "";
    let allChars = "";

    if (lowerCase.checked) allChars += lowerChars;
    if (upperCase.checked) allChars += upperChars;
    if (number.checked) allChars += Numbers;
    if (symbol.checked) allChars += Symbols;

    if (!isAnyCheckboxChecked()) {
        alert("Please select at least one checkbox");
        return "";
    }

    for (let i = 0; i < rangeSlider.value; i++) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    
    return genPassword;
}

genBtn.addEventListener("click", () => {
    inputField.value = generatePassword();
});

copy.addEventListener('click',()=>{
    if(inputField.value.length>=1){

    navigator.clipboard.writeText(inputField.value);
    copy.innerText="check";
    copy.title="Password Copied";
    setTimeout(()=>{
        copy.innerText="content_copy";
        copy.title="";
    },1000);
}});
