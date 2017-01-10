var io = require("socketio");

var socket = io.connect("http://localhost:6100");

socket.on('connect', function() {
	console.log("Socket is connected!");
});

socket.on('disconnect', function () {
	console.log("Socket is disconnected!");
});

module.exports = socket;
