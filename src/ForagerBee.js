var ForagerBee = function(age, color, job, food, eat, canFly, treasureChest) {
	  HoneyMakerBee.call(this, color, food, eat);
		
		this.treasureChest = [];
		this.age = 10;
		this.job = "find pollen";
		this.canFly = true;
};

ForagerBee.prototype = Object.create(HoneyMakerBee.prototype);
ForagerBee.prototype.constructor = ForagerBee; 



ForagerBee.prototype.forage = function(treasure){
		this.treasureChest.push(treasure);
		return this.treasureChest;
};

