
it('should calculate the monthly rate correctly', function () { 
  // ...
  const values = {amount: 100, years: 1, rate: 2};
  expect(calculateMonthlyPayment(values)).toEqual('8.42')
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {amount: 12345, years: 10, rate: 5};
  expect(calculateMonthlyPayment(values)).toEqual('130.94')
});

/// etc
