document.getElementById("btn-deposit").addEventListener("click", function () {
    const depositFld = document.getElementById("deposit-field");
    const newDepositAmountString = depositFld.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    const depositTotalPrime = document.getElementById('total-deposit');
    const prevDepositTotalString = depositTotalPrime.innerText;
    prevDepositTotal = parseFloat(prevDepositTotalString);

    const currentDepositTotal = prevDepositTotal + newDepositAmount;
    depositTotalPrime.innerText = currentDepositTotal;

    const balanceTotalPrime = document.getElementById('total-balance');
    const prevBalanceTotalString = balanceTotalPrime.innerText;
    prevBalanceTotal = parseFloat(prevBalanceTotalString);

    const currentBalanceTotal = prevBalanceTotal + newDepositAmount;
    balanceTotalPrime.innerText = currentBalanceTotal;


    depositFld.value = "";

})


// withdraw

document.getElementById("btn-withdraw").addEventListener("click", function () {
    const withdrawFld = document.getElementById("withdraw-field");
    const newWithdrawAmountString = withdrawFld.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    if (isNaN(newWithdrawAmount)) {           //is not a number->is nan
        alert("give a valid number");
        withdrawFld.value = "";
        return;
    }
    const withdrawTotalPrime = document.getElementById('total-withdraw');
    const prevWithdrawTotalString = withdrawTotalPrime.innerText;
    prevWithdrawTotal = parseFloat(prevWithdrawTotalString);



    const balanceTotalPrime = document.getElementById('total-balance');
    const prevBalanceTotalString = balanceTotalPrime.innerText;
    prevBalanceTotal = parseFloat(prevBalanceTotalString);

    if (prevBalanceTotal < newWithdrawAmount) {
        alert("baper bank e eto taka nai");
        withdrawFld.value = "";
        return;
    }

    const currentWithdrawTotal = prevWithdrawTotal + newWithdrawAmount;
    withdrawTotalPrime.innerText = currentWithdrawTotal;

    const currentBalanceTotal = prevBalanceTotal - newWithdrawAmount;
    balanceTotalPrime.innerText = currentBalanceTotal;


    withdrawFld.value = "";

})