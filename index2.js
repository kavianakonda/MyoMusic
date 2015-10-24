var Myo = require('myo');

//Start talking with Myo Connect
Myo.connect('com.example.musicApp');


Myo.on('pose', function(pose_name){
    console.log('Started ', pose_name);
});
var myMyo = Myo.create();
myMyo.on('wave_in', function(edge){
    Menu.left()
})