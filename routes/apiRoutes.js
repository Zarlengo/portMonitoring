const net = require('net');
const router = require("express").Router();

// API Routes: /api

router.get("/getPorts", (_, res) => {
    res.json(require('../config.json'));
});

router.post("/pingPort", ( { body }, res) => {
    const sock = new net.Socket();
    sock.setTimeout(2500);
    sock.on('connect', function() {
        sock.destroy();
        res.json(body.name+' is up.');
    }).on('error', function(e) {
        res.status(204).json(e);
    }).connect(body.port, body.host);
});

module.exports = router;
