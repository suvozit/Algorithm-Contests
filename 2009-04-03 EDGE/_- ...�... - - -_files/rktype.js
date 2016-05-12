var message = new Array();
// Set your messages you want typed into the title bar below.
// To add more messages, just add more elements to the array.
message[0] = "Welcome To EDGE 09: Think Beyond";
message[1] = "The Largest Techfest In Kolkata";
message[2] = "...Unleash Your Creativity This April...";
message[3] = "Presented By Geekonix";
message[4] = "...µ...";

// Set the number of repetitions (how many times a given message is typed out
// before moving onto the next message).
var reps = 1;
var speed = 275;// Set the overall typing speed (larger number = slower action).
var hold = 4 // set the length of time to display the whole phrase before retyping (larger number = longer)

// DO NOT EDIT BELOW THIS LINE.
var p = message.length;
var q = 0;
var r = 0;
var C = 0;
var mC = 0;
var s = 0;
var sT = null;

if (reps < 1) {
reps = 1;
}
function setMessage() {
typing = message[mC];
q = typing.length;
r = q + hold;
typeMessage();
}
function typeMessage() {
if (s > r) {
s = 0;
}
if (s > q) {
document.title = '|- '+ typing +' - - -';
}
else {
document.title = '|- '+ typing.substr(0,s)+' - - -';
}
if (C < (r * reps)) {
sT = setTimeout("typeMessage()", speed);
C++;
s++;
}
else {
C = 0;
s = 0;
mC++;
if(mC > p - 1) {mC = 0;}
sT = null;
setMessage();
   }
}
setMessage();