var request = require('supertest');

var app = require('../app');

describe('error handler', function() {
  it('returns 404 on not found', function(done) {
    request(app)
      .get('/foo')
      .expect(404, /Not Found/)
      .end(done);
  });
});
