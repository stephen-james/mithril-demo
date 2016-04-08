var m = require('mithril');
var target = document.getElementById('container');

var greeter = require('./components/greeter');
var index = require('./components/index');
var realtime = require('./components/realtime-data');
var playerOne = require('./components/player-one');
var repeater = require('./components/repeater')

m.route.mode = 'hash';

m.route(target, '/index', {
  '/index': index,
  '/greeter': greeter,
  '/realtime': realtime,
  '/player-one': playerOne,
  '/repeater': repeater
});
