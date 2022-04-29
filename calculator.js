window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").setAttribute('placeholder', '100,000');
  document.getElementById("loan-years").setAttribute('placeholder', '30');
  document.getElementById("loan-rate").setAttribute('placeholder', '3.00');
}

// Get the current values from the UI
// Update the monthly payment
const i = `${document.getElementById("loan-rate")}`.value / 12;

function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let uiValues = getCurrentUIValues();
  let i = (uiValues.rate / 100) / 12;
  let num = (uiValues.amount * i) / (1 - ((1 + i) ** -(uiValues.years * 12)));
  return `${num.toFixed(2)}`;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.querySelector('#monthly-payment').innerHTML = calculateMonthlyPayment(getCurrentUIValues);
}