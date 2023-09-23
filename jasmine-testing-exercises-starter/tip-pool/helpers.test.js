describe('Total and tips', function(){
  beforeEach(function() {
    billAmtInput.value = '10';
    tipAmtInput.value = '2';

    submitPaymentInfo();
  })

  it('should calculate bill total with sumPaymentTotal', function () {

    expect(sumPaymentTotal('billAmt')).toEqual(50);

    billAmtInput.value = 50;
    tipAmtInput.value = 2;

    submitPaymentInfo();

    expect(submitPaymentInfo('billAmt')).toEqual(100);
  })

  it('should calculate tip total with sumPaymentTotal', function () {

    expect(sumPaymentTotal('tipAmt')).toEqual(2);

    billAmtInput.value = 50;
    tipAmtInput.value = 2;

    submitPaymentInfo();

    expect(submitPaymentInfo('billAmt')).toEqual(4);

  })

  it('should calculate tipPercent total with sumPaymentTotal', function () {

    expect(sumPaymentTotal('tipPercent')).toEqual(20);

    billAmtInput.value = 10;
    tipAmtInput.value = 2;

    submitPaymentInfo();

    expect(submitPaymentInfo('tipPercent')).toEqual(40);

  })

  it('should calculate tipPercent', function() {
    
    expect(calculateTipPercent(10,2)).toEqual(20);

  })

  it('should add table row with appendTd', function() {
    let newTr = document.createElement('tr');

    appendTd(newTr, 'hello');

    expect(newTr.firstChild.innerHTML).toEqual('hello');
  })

  afterEach(function() {
    allPayments = {};
    paymentId = 0;
    paymentTbody.innerHTML = '';
    serverTbody.innerHTML = '';
    billAmtInput.value = '';
    tipAmtInput.value = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';

  })
})