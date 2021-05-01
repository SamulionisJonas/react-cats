const { v4: uuidv4 } = require('uuid');

// Demo Data
const cats = [
	{ id: '1', name: 'Abyssinian', breed: 'Egypt', weight: 5 },
	{ id: uuidv4(), name: 'Basdasd', breed: 'Egypt', weight: 5 },
	{ id: uuidv4(), name: 'Casdasdas', breed: 'Egypt', weight: 5 },
	{ id: uuidv4(), name: 'Dasdasdasd', breed: 'Egypt', weight: 5 },
	{ id: uuidv4(), name: 'Abyssinian', breed: 'Egypt', weight: 5 },
	{ id: uuidv4(), name: 'Basdasd', breed: 'Egypt', weight: 5 },
	{ id: uuidv4(), name: 'Casdasdas', breed: 'Egypt', weight: 5 },
	{ id: uuidv4(), name: 'Dasdasdasd', breed: 'Egypt', weight: 5 },
	{ id: uuidv4(), name: 'Abyssinian', breed: 'Egypt', weight: 5 },
	{ id: uuidv4(), name: 'Basdasd', breed: 'Egypt', weight: 5 },
	{ id: uuidv4(), name: 'Casdasdas', breed: 'Egypt', weight: 5 },
	{ id: uuidv4(), name: 'Dasdasdasd', breed: 'Egypt', weight: 5 },
	{ id: uuidv4(), name: 'Abyssinian', breed: 'Egypt', weight: 5 },
	{ id: uuidv4(), name: 'Basdasd', breed: 'Egypt', weight: 5 },
	{ id: uuidv4(), name: 'Casdasdas', breed: 'Egypt', weight: 5 },
	{ id: uuidv4(), name: 'Dasdasdasd', breed: 'Egypt', weight: 5 },
];

module.exports = cats;
