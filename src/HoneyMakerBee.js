var HoneyMakerBee = function(age, job, honeyPot) {
	    Bee.call(color);
	    Grub.call(food, eat);
		
		this.age = 10;
		this.job = "make honey";
		this.honeyPot = 0;
		
}
HoneyMakerBee.prototype.makeHoney = function(){
			this.honeyPot++;
		
HoneyMakerBee.prototype.giveHoney = function(){
			this.honeyPot--;
	}
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
Bee.prototype.constructor = Bee;


