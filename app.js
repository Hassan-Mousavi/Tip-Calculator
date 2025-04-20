const billAmount = document.querySelector(".bill_input");
const tipAmount = document.querySelector(".percentage_input");
const btnCalculate = document.querySelector(".tip_calculate");
const totalAmount = document.querySelector(".total_amount");

btnCalculate.addEventListener("click", function () {
  const tip = tipAmount.value / 100;
  const calculation = billAmount.value * (tip + 1);
  totalAmount.value = calculation.toFixed(2);
});
