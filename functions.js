function setTime(h, m, s) {
	return h * 3600 + m * 60 + s;
}

function hourAngle() {
	return (currentSeconds % 43200) / 120;
}
function minuteAngle() {
	return (currentSeconds % 3600) / 10;
}
function secondAngle(ticks) {
	return ticks ? round((currentSeconds % 60)) * 6 : (currentSeconds % 60) * 6;
}

p5.Vector.prototype.setAngle = function(angle) {
	return this.rotate((angle - this.heading()));
}

// p5.Vector.prototype.draw = function() {
// 	line(0, 0, this.x, this.y);
// }







//