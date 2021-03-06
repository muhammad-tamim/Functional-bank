function getInputValue(inputId) {
    const inputFild = document.getElementById(inputId);
    const inputAmountText = inputFild.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input 
    inputFild.value = '';
    return amountValue;
}
function updateTotalFild(TotalFoldId, Amount) {
    const totalElement = document.getElementById(TotalFoldId);
    const TotalText = totalElement.innerText;
    const previouseTotal = parseFloat(TotalText);
    totalElement.innerText = previouseTotal + Amount;
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('total-amount');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}
function updateBalance(Amount, isadd) {
    const previousBalanceTotal = getCurrentBalance();

    const balanceTotal = document.getElementById('total-amount');
    /*   const balanceTotalText = balanceTotal.innerText;
      const previousBalanceTotal = parseFloat(balanceTotalText); */
    // balanceTotal.innerText = previousBalanceTotal + Amount;
    if (isadd == true) {
        balanceTotal.innerText = previousBalanceTotal + Amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - Amount;
    }
}
document.getElementById('Deposit-btn').addEventListener('click', function () {
    /*     const DepositInput = document.getElementById('input-Deposit');
        const DepositAmountText = DepositInput.value;
        const DepositAmount = parseFloat(DepositAmountText); */
    const DepositAmount = getInputValue('input-Deposit');

    // Get currant Deposit
    /* const depositTotal = document.getElementById('total-deposit');
    const depositTotalText = depositTotal.innerText;
    const previouseDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previouseDepositTotal + DepositAmount; */
    if (DepositAmount > 0) {
        updateTotalFild('total-deposit', DepositAmount);

        // updated balance
        /*    const balanceTotal = document.getElementById('total-amount');
           const balanceTotalText = balanceTotal.innerText;
           const previousBalanceTotal = parseFloat(balanceTotalText);
           balanceTotal.innerText = previousBalanceTotal + DepositAmount; */
        updateBalance(DepositAmount, true);
    }

})

document.getElementById('widthrow-btn').addEventListener('click', function () {

    /* const widthrowInput = document.getElementById('input-withdrow');
    const widthrowAmountText = widthrowInput.value;
    const widthrowAmount = parseFloat(widthrowAmountText);
     */
    const widthrowAmount = getInputValue('input-withdrow');

    // Get currant withdrow
    /* const withdrowTotal = document.getElementById('withdrow-total');
    const withdrowTotalText = withdrowTotal.innerText;
    const previousWitdrowTotal = parseFloat(withdrowTotalText)
    

    withdrowTotal.innerText = previousWitdrowTotal + widthrowAmount; */
    const CurrentBalance = getCurrentBalance();
    if (widthrowAmount > 0 && CurrentBalance > widthrowAmount) {
        updateTotalFild('withdrow-total', widthrowAmount);

        // Get currant balanceTotal
        /* const balanceTotal = document.getElementById('total-amount');
        const balanceTotalText = balanceTotal.innerText;
        const PreviousBalanceTotal = parseFloat(balanceTotalText);
        balanceTotal.innerText = PreviousBalanceTotal - widthrowAmount; */
        updateBalance(widthrowAmount, false);
    }
    if (CurrentBalance < widthrowAmount) {
        alert("You can not widthrow more than in have your account");
        // console.log("You can not widthrow more than in have your account");
    }
})