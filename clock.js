function Clock(pos, secSize, value) {
    this.pos = pos;
    this.addedClock = false;
    this.secSize = secSize;

    this.value = value || 0;

    if (showHour) this.hands = [createVector(0, secSize * 1 / 2).add(this.pos), createVector(0, secSize * 3 / 4).add(this.pos), createVector(0, secSize).add(this.pos)];
    if (!showHour) this.hands = [null, createVector(0, secSize * 3 / 4).add(this.pos), createVector(0, secSize).add(this.pos)];

    this.update = function () {
        for (h of this.hands) {
            if (h) {
                h.b = h.copy().sub(this.pos).rotate(90).heading();
            }
        }

        if (showHour) this.hands[0].sub(this.pos).setAngle(hourAngle() + this.pos.b - 90).setMag(this.secSize * 1 / 2).add(this.pos);
        this.hands[1].sub(this.pos).setAngle(minuteAngle() + this.pos.b - 90).setMag(this.secSize * 3 / 4).add(this.pos);
        this.hands[2].sub(this.pos).setAngle(secondAngle(secTick) + this.pos.b - 90).setMag(this.secSize).add(this.pos);
    }

    this.addClocks = function () {
        if (!this.addedClocks) {
            if (showHour) clocks.push(new Clock(this.hands[0], this.secSize * 0.7, this.value + 1));
            clocks.push(new Clock(this.hands[1], this.secSize * 0.7, this.value + 1));
            clocks.push(new Clock(this.hands[2], this.secSize * 0.7, this.value + 1));
            this.addedClocks = true;
        }
    }

    this.draw = function () {
        stroke(map(this.value, 0, 8, 0,100)%360, 90, 50);
        strokeWeight(0.3);
		
		if (this.value === 0) {
			stroke(0);
			strokeWeight(1.5);
		}
		
        for (h of this.hands) {
            if (h) {
                line(this.pos.x, this.pos.y, h.x, h.y);
            }
        }
    }
}








//