var Myo = require('myo');

//Start talking with Myo Connect
Myo.connect('com.example.musicApp');

Myo.on('fist', function(){
    console.log('Hello Myo!');
    this.vibrate();
});

setInterval(requestVibrate, 3000);
setInterval(requestSignal, 3000);