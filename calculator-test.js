
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 100000,
    years: 10,
    rate: 5
  };
  expect(calculateMonthlyPayment(values)).toEqual('1060.66');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 500000,
    years: 30,
    rate: 3.25
  };
  expect(calculateMonthlyPayment(values)).toContain('.');
});

/// etc
it('should handle large amount', function () {
  const values = {
    amount: 10000000000000,
    years: 30,
    rate: 10
  };
  expect(calculateMonthlyPayment(values)).toEqual('87757157008.88');
})