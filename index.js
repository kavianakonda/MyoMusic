var WebSocket = require('ws');
var ws = new WebSocket('ws://localhost:7204/myo/1');

var myoID;

ws.on('message', function(message) {
	json = JSON.parse(message);
    
    if (json[0] != "event")
    	return console.log(message);

    var data = json[1];

    if (data.type == "connected") {
    	myoID = data.myo;
    }

    if (data.type != "orientation") {
        console.log(data)
    }
});

function requestVibrate() {
    var data = {
        "command": "vibrate",
        "myo": myoID,
        "type": "short"
    }
    console.log("Sending vibrate", JSON.stringify(data));
    ws.send(JSON.stringify(data) + "\n");
}

function requestSignal() {
	var data = {
		"command": "request_rssi",
		"myo": myoID
	}
    console.log("Sending request_rssi", JSON.stringify(data));
    ws.send(JSON.stringify(data) + "\n");
}

setInterval(requestVibrate, 3000);
setInterval(requestSignal, 3000);