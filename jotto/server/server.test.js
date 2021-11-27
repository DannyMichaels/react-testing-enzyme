const request = require('supertest');
const app = require('./server.js');

describe('root path', () => {
  test('responds with status 200 the GET method', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);
  });

  test('response is a five-letter word', async () => {
    const response = await request(app).get('/');

    expect(response.text.length).toBe(5);
  });
});
