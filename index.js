module.exports = 
var Myo = require('myo');
var Player = require('player');

var beat = new Player('sounds/friday.mp3');
var beat2 = new Player('sounds/piano.mp3');

var snare = new Player('sounds/cena2.mp3');


//Start talking with Myo Connect
Myo.connect('com.example.musicApp');

var ifFirst = 0;
Myo.on('fist', function(){
    if (ifFirst == 0){
        console.log('made fist number: ' + ifFirst);
        // this.vibrate();
        this.trigger('beat-beat');
        console.log('play beat 1');    
        ifFirst++;
    }
    else if (ifFirst >= 1) {
        this.trigger('beat-beat-pause');
        console.log('fist number: ' + ifFirst);
        this.trigger('snare');
        snare.on('playing',function(item){
            console.log('im playing... src:' + item);
        });
        console.log('play snare');
        snare.on('error', function(err){
            // when error occurs
            console.log(err);
        });
        ifFirst++;
    }
});
/*Myo.on('fist', function(){
    if (ifFirst == 0){
        console.log('made fist number: ' + ifFirst);
        // this.vibrate();
        this.trigger('beat-beat2-pause');
        this.trigger('beat-beat');   
        ifFirst ++;
    }
    else if (ifFirst >= 1) {
        console.log('fist number: ' + ifFirst);
        this.trigger('snare');
        console.log('play snare drum');
        ifFirst++;
    }
});*/

Myo.on('wave_in', function(){
    console.log('slap my booty honey');
    this.vibrate();
});

Myo.on('wave_on', function(){
    console.log('oooh backslap that ass bitch');
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

/*Myo.on('accelerometer', function(data){ 
 if (data.x > 0) {
    console.log('moving forward');
 } else if (data.x < 0) {
    console.log('moving backward');
 } else {
    console.log('spin that shit');
 }*/

Myo.on('fingers_spread', function(){
    console.log('shooting laser');
    this.vibrate();
});

/*Myo.on('gyroscope', function(data) {
    if (data.x > 0) {
        console.log('turning right');
    }

});*/

Myo.on('beat-beat', function() {
    //strong beat
    beat.play();
});

Myo.on('beat-beat-pause', function(){
    beat.stop();
});

Myo.on('beat-beat2', function(){
    beat2.play();
});

Myo.on('beat-beat2-pause', function(){
    beat2.stop();
});

Myo.on('snare', function(){
    snare.play();
});


