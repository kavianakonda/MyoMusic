var Myo = require('myo');
var Player = require('player');

var beat = new Player('sounds/friday.mp3');
var beat2 = new Player('sounds/piano.mp3');

var song = new Player('sounds/uptown.mp3');

var laser = new Player('sounds/laser.mp3');
var clap = new Player('sounds/clap.mp3');
var hihat = new Player('sounds/hihat.mp3');
var snarebeat = new Player('sounds/snarebeat.mp3');

laser.on('error', function(err){
    //console.log(err);
});
clap.on('error', function(err){
    //console.log(err);
});
hihat.on('error', function(err){
    //console.log(err);
});
snarebeat.on('error', function(err){
    //console.log(err);
});

var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

var finaldata = {};
var counter = 0;

app.listen(8080);

song.play();

function handler (req, res) {
  fs.readFile('index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
    res.writeHead(200);
    res.end(data);
  });
}


io.on('connection', function (socket) {
    if (!finaldata == null){
        socket.emit('finaldata', finaldata);
    }
  });

//Start talking with Myo Connect
Myo.connect('com.example.musicApp');

var ifFirst = 0;
Myo.on('fist', function() {
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
        song.on('playing',function(item){
            console.log('im playing... src:' + item);
        });
        console.log('play snare');
        song.on('error', function(err){
            // when error occurs
           // console.log(err);
        });
        ifFirst++;
    }
});
Myo.on('fist', function(){
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
});

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

Myo.on('accelerometer', function(data){
    setTimeout(function(){

    if (data.x > 0) {
        counter++;
        if (counter % 10 == 0){
            var that = this;
            setTimeout(function() {
                console.log('moving forward');
                that.trigger('laser');
                laser.add('sounds/laser.mp3');
                finaldata = data;
            },5000);
        }
    } else if (data.x < 0) {
        counter++;
        if (counter % 10 == 0){
            var that = this;
            setTimeout(function() {
                console.log('moving forward');
                that.trigger('hihat');
                laser.add('sounds/hihat.mp3');
                finaldata = data;
            },5000);
        }
    } else if (data.y > 0) {
        counter++;
        if (counter % 10 == 0){
            var that = this;
            setTimeout(function() {
                console.log('moving up');
                that.trigger('clap');
                clap.add('sounds/clap.mp3');
                finaldata = data;
            },5000);  
        }
    } else if (data.y < 0) {
        counter++;
        if (counter % 10 == 0){
            var that = this;
            setTimeout(function() {
                console.log('moving down');
                that.trigger('snarebeat');
                snarebeat.add('sounds/snarebeat.mp3');
                finaldata = data;
            },5000);  
        }
    } else if (data.z > 0) {
        counter++;
        if (counter % 10 == 0){
            var that = this;
            setTimeout(function() {
                console.log('moving vertical');
                that.trigger('laser');
                snarebeat.add('sounds/laser.mp3');
                finaldata = data;
            },5000);  
        }
    } else {
        console.log('DJ SPIN THAT');
    }

    }, 4000) 
});

Myo.on('fingers_spread', function(){
    console.log('shooting laser');
    this.vibrate();
});

/*Myo.on('gyroscope', function(data) {
    if (data.x > 0) {
        console.log('turning right');
    }

});*/

Myo.on('laser', function(){
    laser.play();
})

Myo.on('hihat', function(){
    hihat.play();
})

Myo.on('clap', function(){
    clap.play();
})

Myo.on('snarebeat', function(){
    snarebeat.play();
})

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

Myo.on('song', function(){
    song.play();
});