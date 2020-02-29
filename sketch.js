var startSeconds = 0;
var currentSeconds = 0;

var clocks = [];

var showHour = true;
var secTick = false;

function setup() {
    // startSeconds = setTime(0, 0, 0);
    startSeconds = setTime(hour(), minute(), second());
    //startSeconds = setTime(7, 59, 55);
    angleMode(DEGREES);
	colorMode(HSL);
	noFill();
    createCanvas(windowWidth, windowHeight);
    frameRate(secTick? 1 : 25);

    var position = createVector(0, 0);
    position.b = 0;

    clocks.push(new Clock(position, height *0.15));

    // keyTyped();
    // keyTyped();
    // keyTyped();
	
	for (var n = 0; n < 8; n++) {
	for (var i = clocks.length - 1; i >= 0; i--) {
        clocks[i].addClocks();
    }
	}
}

function draw() {
    translate(width/2, height/2);
    background(0,0,95);
    currentSeconds = startSeconds + millis() / 1000;
	
	for (i = 0; i < 12; i++) {
        push();
        translate(clocks[0].pos.x, clocks[0].pos.y);
        rotate(map(i, 0, 12, 0, 360));
        strokeWeight(10);
        stroke(0);
        point(0, clocks[0].secSize*1.25)
        pop();
    }
	
	strokeWeight(5);
	ellipse(clocks[0].pos.x, clocks[0].pos.y,clocks[0].secSize*2.8,clocks[0].secSize*2.8);

    for (var i = 0; i < clocks.length; i++) {
        clocks[i].update();
        clocks[i].update();
        }
    for (var i = clocks.length - 1; i >=0; i--) {
        clocks[i].draw();
    }


    // text(hour() + ", " + minute() + ", " + second(), 100, 100);
    // text(floor(map(currentSeconds, 0, 3600 * 12, 0, 12) % 12) + ", " + floor(map(currentSeconds, 0, 3600, 0, 60) % 60) + ", " + floor(map(currentSeconds, 0, 60, 0, 60) % 60), 100, 140);
    // text(currentSeconds - startSeconds, 100, 120);
}