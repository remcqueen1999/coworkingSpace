const request = require('supertest');
const express = require('express');

const app = express();
require('../../startup/routes')(app);

describe('GET /api/organisations', () => {
  it('Should get a 200 status reponse from the get request', () => request(app)
    .get('/api/organisations')
    .expect(200));

  it('should respond with a json data type', () => request(app)
    .get('/api/organisations')
    .expect('Content-type', /json/));
});

describe('POST /api/organisations', () => {
  it('Should get a 401 status response from an unautherised post', () => request(app)
    .post('/api/organisations')
    .expect(401));
});
