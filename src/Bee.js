var Bee = function(age, color, job, food, eat) {
	Grub.call(food, eat);
	this.age = 5;
	this.color = 'yellow';
    this.job = 'keep on growing'
};


Bee.prototype = Object.create(Grub.prototype);
Grub.prototype.constructor = Grub;
