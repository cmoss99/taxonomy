var RetiredForagerBee = function(age, color, food, job, canfly, treasureChest) {
		ForagerBee.call(food, eat, treasureChest);
		

		this.age = 40;
		this.job = 'gamble';
		this.canfly = false;
		this.color = 'grey';
}
RetiredForagerBee.prototype.forage = function(random){
		var random = "I am too old, let me play cards instead";
			return random;

		
}		
RetiredForagerBee.prototype.gamble = function(){
			treasure++;
			  treasureChest.push(treasure);
			   return treasureChest;
		
}; 


RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

