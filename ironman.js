var Myo = require('myo');
Myo.connect('com.example.musicApp');
Myo.on('fingers_spread', function(){
    console.log('shooting laser');
    this.vibrate();
});