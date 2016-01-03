var Bee = function(age, color, job, food, eat) {
	Grub.call(this, food, eat);
	this.age = 5;
	this.color = 'yellow';
  this.job = 'keep on growing'
};


Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;
