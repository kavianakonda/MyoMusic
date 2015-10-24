var Myo = require('myo');
var Player = require('player');

var beat = new Player('sounds/uptown.mp3');
var beat2 = new Player('sounds/piano.mp3')

//Start talking with Myo Connect
Myo.connect('com.example.musicApp');

var ifFirst = 0;
Myo.on('fist', function(){
    if (ifFirst == 0){
        console.log('wrap ur fist around my dick bb');
        // this.vibrate();
        this.trigger('beat-beat');
        ifFirst = 1;
    }
    else {
        this.trigger('beat-beat2');
    }
});

Myo.on('wave_in', function(){
    console.log('slap my booty honey');
    this.vibrate();
});

Myo.on('wave_on', function(){
    console.log('oooh backslap that ass bitch');
    this.vibrate();
});5

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

Myo.on('disconnected', function() {
	console.log('disconnected the Myo rip');
});

// Myo.on('accelerometer', function(data){ 
// 	if(data.x > 0) {
// 		this.trigger('beat-beat');
// 		//beat
// 	}
// 	else if (data.x < 0){
// 		this.trigger('beat-high');
// 		//tambourine
// 	}
// });

Myo.on('beat-beat', function() {
    //strong beat
    beat.play();
});

Myo.on('beat-beat2', function(){
    beat2.play();
})

Myo.on('beat-high', function() {
	this.vibrate();
});