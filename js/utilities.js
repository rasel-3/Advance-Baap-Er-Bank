function getInputValueById (inputFieldId){
    const inputField =document.getElementById(inputFieldId);
    const inputFieldValueString =inputField.value;
    const inputFieldValue =parseFloat(inputFieldValueString);
    inputField.value='';
    return inputFieldValue;
}

function getElementValueById (textElement){
const text = document.getElementById(textElement);
const textElementValueString =text.innerText;
const textElementValue = parseFloat(textElementValueString );
return textElementValue;

}
 function setTextElementValueById (textElement, newValue){
    const textValue = document.getElementById(textElement);
    textValue.innerText = newValue;
 }