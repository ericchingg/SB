describe('Payment and table creation', function(){
  beforeEach(function() {
    billAmtInput.value = "10";
    tipAmtInput.value = "2";
  })

  it('should submit current payment with submitPaymentinfo', function(){
    submitPaymentInfo();

    expect(allPayments['payment1'].billAmt).toEqual('10');
    expect(allPayments['payment1'].tipAmt).toEqual('2');
    expect(allPayments['payment1'].tipPercent).toEqual(20);

  })
  it('should create a payment with createCurPayment', function() {
    
    let payment = {billAmt: '10',tipAmt: '2', tipPercent: 20};

    expect(createCurPayment()).toEqual(payment);

  })

  it('should add new table row with appendPaymentTable', function() {
    
    let payment = createCurPayment();

    allPayments['payment1'] = payment;
    
    appendPaymentTable(payment);

    let tr = document.querySelectorAll('#paymentTable tbody tr td');

    expect(tr[0].innerText).toEqual('$10');
    expect(tr[1].innerText).toEqual('$2');
    expect(tr[2].innerText).toEqual('20%');

  })
  
  // it('should update summary', function() {
  //   updateSummary();

  //   let tipPercentAvg = sumPaymentTotal('tipPercent') / Object.keys(allPayments).length;

  //   let sum = document.querySelectorAll('#summaryTable tbody tr td');

  //   expect(sum[0].innerHTML).toEqual('$' + sumPaymentTotal('billAmt'));
  //   expect(sum[1].innerHTML).toEqual('$' + sumPaymentTotal('tipAmt'));
  //   expect(sum[2].innerHTML).toEqual(Math.round(tipPercentAvg) + '%');

  // })
  afterEach(function() {
    allPayments = {};
    paymentId = 0;
    paymentTbody.innerHTML = '';
    serverTbody.innerHTML = '';
    billAmtInput.value = '';
    tipAmtInput.value = '';
    tr[0].innerHTML = '';
    tr[1].innerHTML = '';
    tr[2].innerHTML = '';

  })
})