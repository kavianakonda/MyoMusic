var Myo = require('myo');

//Start talking with Myo Connect
Myo.connect('com.example.musicApp');

Myo.on('fist', function(){
    console.log('Hello Myo!');
    this.vibrate();
});

Myo.on('connected', function(){
    console.log('connected!', this.id)
});
