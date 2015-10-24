var Myo = require('myo');

//Start talking with Myo Connect
Myo.connect('com.stolksdorf.myAwesomeApp');

Myo.on('fist', function(){
    console.log('Hello Myo!');
    this.vibrate();
});