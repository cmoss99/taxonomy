var RetiredForagerBee = function(age, color, food, job, eat, canFly, treasureChest) {
		ForagerBee.call(this, food, eat, treasureChest);
		

		this.age = 40;
		this.job = 'gamble';
		this.canFly = false;
		this.color = 'grey';
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

RetiredForagerBee.prototype.forage = function(random){
		var random = "I am too old, let me play cards instead";
			return random;

		
};		

RetiredForagerBee.prototype.gamble = function(treasure){
	 this.treasureChest.push(treasure);
			return this.treasureChest;
}; 

