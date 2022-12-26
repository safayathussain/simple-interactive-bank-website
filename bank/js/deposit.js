document.getElementById('deposit-button').addEventListener('click', function () {
    const newDepositAmount = getInputValueById('input-deposit-field');
    const previousTotalAmount = getElementValueById('deposit-field')
    const newDepositTotal = previousTotalAmount + newDepositAmount;
    const dipositTotal = setElementValueById('deposit-field', newDepositTotal)
    const PreviousBalanceAmount = getElementValueById('balance-field');
    const newBalanceAmount = PreviousBalanceAmount + newDepositAmount;
    const balance = setElementValueById('balance-field', newBalanceAmount)
    console.log(dipositTotal)
})
