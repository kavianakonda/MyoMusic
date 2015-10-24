var Myo = require('myo');

//Start talking with Myo Connect
Myo.connect('com.example.musicApp');

Myo.on('fist', function(){
    console.log('wrap ur fist around my dick bb');
    this.vibrate();
});

Myo.on('wave_in', function(){
    console.log('slap my booty honey');
    this.vibrate();
});

Myo.on('wave_on', function(){
    console.log('oooh backslap that ass bitch');
    this.vibrate();
});

Myo.on('fingers_spread', function(){
    console.log('sticky cum on dese fings');
    this.vibrate();
});

Myo.on('double_tap', function(){
    console.log('mmm... lemme see dat tounge');
    this.vibrate();
});

Myo.on('connected', function(){
    console.log('connected!', this.id)
    this.vibrate('long');
});
