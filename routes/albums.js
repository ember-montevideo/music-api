var express = require('express');
var router = express.Router();
var _ = require('lodash');

var albums = require('../albums');
var tracks = require('../tracks');

_.forEach(albums, function(album, id) {
  album.links = {
    tracks: '/api/albums/' + id + '/tracks'
  };
});

router.get('/', function(req, res) {
  res.send({
    albums: _.values(albums)
  });
});
router.get('/:id', function(req, res) {
  res.send({
    album: albums[req.params.id]
  });
});
router.get('/:id/tracks', function(req, res) {
  res.send({
    tracks: tracks[req.params.id]
  });
});

module.exports = router;
