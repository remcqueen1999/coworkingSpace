const request = require('supertest');
const express = require('express');

const app = express();
require('../../startup/routes')(app);

describe('GET /api/rooms', () => {
  it('Should get a 200 status reponse from the get request', () => request(app)
    .get('/api/organisations')
    .expect(200));

  it('should respond with a json data type', () => request(app)
    .get('/api/rooms')
    .expect('Content-type', /json/));
});

describe('POST /api/rooms', () => {
  it('Should get a 400 status response from an empty body request', () => request(app)
    .post('/api/organisations')
    .expect(400));
});
