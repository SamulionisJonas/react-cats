const request = require('supertest');
const app = require('../server');

describe('Get endpoints', () => {
	it('should return list with data', async () => {
		const res = await request(app).get('/api/cats');

		expect(res.statusCode).toEqual(200);

		if (res.body.length) {
			expect(res.body).toEqual(
				expect.arrayContaining([expect.objectContaining({ id: '1' })])
			);
		}
	});

	it('should return paginated list with cats', async () => {
		const expectedLimit = 4;
		const res = await request(app).get('/api/cats?page=1&limit=4');

		expect(res.statusCode).toEqual(200);

		if (res.body.length) {
			expect(res.body.length).toBe(expectedLimit);
		}
	});

	it('should return cat with id of 1', async () => {
		const expected = { breed: 'Egypt', id: '1', name: 'Abyssinian', weight: 5 };
		const res = await request(app).get('/api/cats/id/1');

		expect(res.statusCode).toEqual(200);

		if (res.body.length) {
			expect(res.body).toEqual(expect.arrayContaining([expect.objectContaining(expected)]));
		}
	});

	it('shoudld return searched cat by name', async () => {
		const expected = { breed: 'Egypt', id: '1', name: 'Abyssinian', weight: 5 };
		const res = await request(app).get(`/api/cats/search?searchBy=name&query=Abyssinian`);

		expect(res.statusCode).toEqual(200);

		if (res.body.length) {
			expect(res.body).toEqual(expect.arrayContaining([expect.objectContaining(expected)]));
		}
	});
});

describe('Post endpoints', () => {
	it('should create new cat and return new list', async () => {
		const expected = { name: 'Miau', breed: 'Danmark', weight: 10 };
		const res = await request(app).post(`/api/cats/new`).send(expected);

		expect(res.status).toEqual(200);
		expect(res.body).toEqual(expect.arrayContaining([expect.objectContaining(expected)]));
	});
});

describe('Delete endpoints', () => {
	it('should delete cat by id and return new list of cats', async () => {
		const expected = { id: '1', name: 'Miau', breed: 'Danmark', weight: 10 };
		const res = await request(app).delete(`/api/cats/delete`).send({ id: expected.id });

		expect(res.status).toEqual(200);
		expect(res.body).not.toEqual(expect.arrayContaining([expect.objectContaining(expected)]));
	});
});
