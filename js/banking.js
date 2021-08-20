//get input value for both deposit & withdraw
function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputField.value);
  // clear input value
  inputField.value = "";
  return amountValue;
}
//add deposit and withdraw total amount
function updateTotalField(fieldInput, fieldAmount) {
  const fieldTotal = document.getElementById(fieldInput);
  const fieldTotalAmount = parseFloat(fieldTotal.innerText);
  fieldTotal.innerText = fieldTotalAmount + fieldAmount;
}
//get curent balance
function getCurentBalance() {
  const previousBalanceText = document.getElementById("balance-total");
  const previousBalance = parseFloat(previousBalanceText.innerText);
  return previousBalance;
}
//update Balance
function updateBalance(depositAmount, isAdd) {
  const previousBalanceText = document.getElementById("balance-total");
  // const previousBalance = parseFloat(previousBalanceText.innerText);
  const previousBalance = getCurentBalance();
  if (isAdd == true) {
    const newBalance = previousBalance + depositAmount;
    previousBalanceText.innerText = newBalance;
  } else {
    const newBalance = previousBalance - depositAmount;
    previousBalanceText.innerText = newBalance;
  }
}

//----------deposit button event handler
document.getElementById("deposit-btn").addEventListener("click", function () {
  //get deposit input value
  const depositAmount = getInputValue("deposit-input");

  if (depositAmount > 0) {
    //get curent deposit & update deposit
    updateTotalField("deposit-total", depositAmount); //to update deposit total amount

    //update total balance after deposit
    updateBalance(depositAmount, true);
  }
});

//------------withdraw button event handler
document.getElementById("withdraw-btn").addEventListener("click", function () {
  //get withdraw input
  const withdrawAmount = getInputValue("withdraw-input");
  const curentBalance = getCurentBalance();
  if (withdrawAmount > 0 && withdrawAmount < curentBalance) {
    //get curent withdraw & update withdraw
    updateTotalField("withdraw-total", withdrawAmount);

    //update total balance after withdraw
    updateBalance(withdrawAmount, false);
  } else if (withdrawAmount > curentBalance) {
    console.log("please enter less amount then saving");
  }
});
