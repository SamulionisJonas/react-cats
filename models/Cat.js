const { v4: uuidv4 } = require('uuid');

/*
 *   "Cat Model"
 */
class Cat {
	constructor(name, breed, weight) {
		this.id = uuidv4();
		this.name = name;
		this.breed = breed;
		this.weight = weight;
	}
}

module.exports = Cat;
