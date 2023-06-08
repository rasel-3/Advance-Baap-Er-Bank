

 
document.getElementById('btn-deposit').addEventListener('click',function(){

const newDepositAmount = getInputValueById ('deposit-field');

const previousDepositAmount = getElementValueById ('deposit-total');

 const newDepositTotal = previousDepositAmount + newDepositAmount ;

 setTextElementValueById ('deposit-total',newDepositTotal);

 const previousBalanceAmount = getElementValueById ('balance-total')

const newBalanceTotal =  previousBalanceAmount + newDepositAmount;

setTextElementValueById ('balance-total',newBalanceTotal);

})
