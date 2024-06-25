const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test('1234', () => {
    let output = addCommas(1234);
    expect(output).toEqual('1,234')
  })

  test('1000000', () => {
    let output = addCommas(1000000);
    expect(output).toEqual('1,000,000');
  })

  test('9876543210', () => {
    let output = addCommas(9876543210);
    expect(output).toEqual('9,876,543,210');
  })

  test('6', () => {
    let output = addCommas(6);
    expect(output).toEqual('6');
  })

  test('-10', () => {
    let output = addCommas(-10);
    expect(output).toEqual('-10');
  })

  test('-5678', () => {
    let output = addCommas(-5678);
    expect(output).toEqual('-5,678');
  })

  test('12345.678', () => {
    let output = addCommas(12345.678);
    expect(output).toEqual('12,345.678');
  })

  test('-3141592.65', () => {
    let output = addCommas(-3141592.65);
    expect(output).toEqual('-3,141,592.65');
  })

});


