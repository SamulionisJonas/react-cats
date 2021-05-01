const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
// "Model"
const Cat = require('../models/Cat');
// "Data"
const cats = require('../db/db');

/*
 * @route GET api/cats/
 * @desc Get all cats/paginated data if needed
 * @access Public
 */
router.get('/', async (req, res) => {
	const { page, limit } = req.query;

	try {
		if (!cats) {
			return res.status(400).json({ msg: 'There is no data.' });
		}

		// Paginated data if params are set
		if (page && limit) {
			const startIndex = (page - 1) * limit;
			const endIndex = page * limit;
			const paginatedData = cats.slice(startIndex, endIndex);

			res.send(paginatedData);
		} else {
			res.send(cats);
		}
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server error');
	}
});

/*
 * @route GET api/cats/:id
 * @desc Get cat by id
 * @access Public
 */
router.get('/id/:id', async (req, res) => {
	try {
		const cat = await cats.find((item) => item.id === req.params.id);

		if (!cat) {
			return res.status(400).json({ msg: 'There is no cat with this id' });
		}

		res.send([cat]);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server error');
	}
});

/*
 * @route GET api/cats/search
 * @desc Get cat by text search and param
 * @access Public
 */
router.get('/search', async (req, res) => {
	const { searchBy, query } = req.query;

	try {
		const cat = await cats.find((item) => item[searchBy].indexOf(query) !== -1);

		if (!cat) {
			return res.status(400).json({ msg: `There are no results for ${query}` });
		}

		res.send(cat);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server error');
	}
});

/*
 * @route GET api/cats/new
 * @desc Create new cat with random id
 * @access Public
 */
router.post(
	'/new',
	[
		check('name', 'Name is required').not().isEmpty(),
		check('breed', 'Breed is required').not().isEmpty(),
		check('weight', 'Weight is required').not().isEmpty(),
	],
	async (req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		try {
			const { name, breed, weight } = req.body;
			await cats.push(new Cat(name, breed, weight));

			res.send(cats);
		} catch (error) {
			console.error(error.message);
			res.status(500).send('Server error');
		}
	}
);

/*
 * @route GET api/cats/delete/:id
 * @desc Delete cat by id
 * @access Public
 */
router.delete('/delete', check('id', 'ID is required').not().isEmpty(), async (req, res) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	try {
		const cat = await cats.find((item) => item.id === req.body.id);

		if (!cat) {
			return res.status(400).json({ msg: 'There is no cat with this id' });
		}

		let newCatsArray = cats.filter((item) => {
			return item.id !== req.body.id;
		});

		res.send(newCatsArray);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server error');
	}
});

module.exports = router;
