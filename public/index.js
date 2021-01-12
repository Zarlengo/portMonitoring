init();

async function init() {
  const servers = await API.getPorts();
  const table = document.querySelector('#serverTable');
  servers.forEach(server => {
    const newRow = table.insertRow();
    newRow.innerHTML = `<tr><td>${ server.name }</td><td>${ server.version }</td><td>${ server.host }</td><td>${ server.port }</td><td>Checking</td></tr>`;
    API.pingPorts(server).then(response => {
      if (response) {
        newRow.lastChild.innerHTML = '<span class="online"></span>&nbsp;&nbsp;Online';
      } else {
        newRow.lastChild.innerHTML = '<span class="offline"></span>&nbsp;&nbsp;Offline';
      }
    });
  });
}

