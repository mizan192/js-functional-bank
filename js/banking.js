//get input value
function getInputValue() {
  const depositInput = document.getElementById("deposit-input");
  const depositAmount = parseFloat(depositInput.value);
  // clear input value
  depositInput.value = "";
  return depositAmount;
}

//----------deposit button event handler
document.getElementById("deposit-btn").addEventListener("click", function () {
  //   const depositInput = document.getElementById("deposit-input");
  //   const depositAmount = parseFloat(depositInput.value);
  const depositAmount = getInputValue();
  //get curent deposit
  const depositTotal = document.getElementById("deposit-total");
  const depositTotalAmount = parseFloat(depositTotal.innerText);
  const newDepositTotal = depositAmount + depositTotalAmount;
  depositTotal.innerText = newDepositTotal;
  //update total balance after deposit
  const previousBalanceText = document.getElementById("balance-total");
  const previousBalance = parseFloat(previousBalanceText.innerText);
  const newBalance = previousBalance + depositAmount;
  previousBalanceText.innerText = newBalance;
});

//------------withdraw button event handler
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawInput = document.getElementById("withdraw-input");
  const withdrawAmount = parseFloat(withdrawInput.value);

  //get curent withdraw
  const withdrawTotal = document.getElementById("withdraw-total");
  const withdrawTotalAmount = parseFloat(withdrawTotal.innerText);
  const newWithdrawTotal = withdrawAmount + withdrawTotalAmount;
  withdrawTotal.innerText = newWithdrawTotal;
  //update total balance after withdraw
  const previousBalanceText = document.getElementById("balance-total");
  const previousBalance = parseFloat(previousBalanceText.innerText);
  const newBalance = previousBalance - withdrawAmount;
  previousBalanceText.innerText = newBalance;

  // clear input value
  withdrawInput.value = "";
});
