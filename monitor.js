const net = require('net');
const hosts = require('./config.json');

hosts.forEach(function(item) {
    const sock = new net.Socket();
    sock.setTimeout(2500);
    sock.on('connect', function() {
        console.log(item.name+' is up.');
        sock.destroy();
    }).on('error', function(e) {
        console.log(item.name+' is down: ' + e.message);
    }).on('timeout', function(e) {
        console.log(item.name+' is down: timeout');
    }).connect(item.port, item.host);
});