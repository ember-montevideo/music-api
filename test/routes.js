var _ = require('lodash');
var request = require('supertest');

var app = require('../app');

var albums = require('../albums');
var tracks = require('../tracks');

describe('application routes', function() {
  it('returns ok on /api/albums', function(done) {
    request(app)
      .get('/api/albums')
      .expect(200, {
        albums: _.values(albums)
      })
      .end(done);
  });

  it('returns ok on /api/albums/:id', function(done) {
    request(app)
      .get('/api/albums/1001')
      .expect(200, {
        album: albums[1001]
      })
      .end(done);
  });

  it('returns ok on /api/albums/:id/tracks', function(done) {
    request(app)
      .get('/api/albums/1002/tracks')
      .expect(200, {
        tracks: tracks[1002]
      })
      .end(done);
  });
});
