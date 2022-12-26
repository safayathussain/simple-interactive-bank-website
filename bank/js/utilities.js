function getInputValueById(idName) {
    const inputField = document.getElementById(idName);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}
function getElementValueById(idName) {
    const totalField = document.getElementById(idName);
    const totalFieldValueString = totalField.innerText;
    const totalFieldValue = parseFloat(totalFieldValueString);
    return totalFieldValue;
}
function setElementValueById(elementId, newValue) {
    const findElement = document.getElementById(elementId);
    findElement.innerText = newValue;
}