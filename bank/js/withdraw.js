document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInputValue = getInputValueById('input-withdraw-field');
    const withdrawPreviousValue = getElementValueById('withdraw-field');
    const withdrawNewValue = withdrawPreviousValue + withdrawInputValue;
    const PreviousBalanceAmount = getElementValueById('balance-field');
    const newBalanceAmount = PreviousBalanceAmount - withdrawInputValue;
    if (withdrawInputValue > newBalanceAmount) {
        alert('You need more money for withdraw')
        return;
    }
    const withdrawTotal = setElementValueById('withdraw-field', withdrawNewValue)
    const setBalanceValue = setElementValueById('balance-field', newBalanceAmount);
})