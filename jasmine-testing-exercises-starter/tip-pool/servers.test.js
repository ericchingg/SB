describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should add new table row for server', function () {
    submitServerInfo();
    updateServerTable();

    let currentTable = document.querySelectorAll('#serverTable tbody tr td');

    expect(currentTable.length).toEqual(2);
    expect(currentTable[0].innerText).toEqual('Alice');
    expect(currentTable[1].innerText).toEqual('$0.00');

  });

  afterEach(function() {
    // teardown logic
    serverTbody.innerHTML = '';
    allServers = {};
    serverId = 0;
  });
});

