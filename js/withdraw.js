document.getElementById('btn-withdraw').addEventListener('click', function () {

    const newWithdrawAmount = getInputValueById('withdraw-field');

    const previousWithdrawAmount = getElementValueById('withdraw-total');

    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;

    setTextElementValueById('withdraw-total', newWithdrawTotal);

    const previousBalanceAmount = getElementValueById('balance-total')

    const newBalanceTotal = previousBalanceAmount - newWithdrawAmount;

    setTextElementValueById('balance-total', newBalanceTotal);

})