window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
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
  const values = {amount: null, years: null, rate: null};
  const loanAmount = document.getElementById("loan-amount");
  loanAmount.value = values.amount;
  const loanYears = document.getElementById("loan-years");
  loanYears.value = values.years;
  const loanRate = document.getElementById("loan-rate");
  loanRate.value = values.rate;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
   let i = (values.rate * 0.01) / 12;
   let n = (values.years * 12);
   let monthlyPayment = (values.amount * i) / (1 - Math.pow((1 + i), -n));

  return monthlyPayment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const payment = document.getElementById("monthly-payment");
  payment.innerText = '$' + monthly;
}
