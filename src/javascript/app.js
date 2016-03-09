var m = require('mithril');
var target = document.getElementById('container');

var greeter = require('./components/greeter');
var index = require('./components/index');

m.route.mode = 'hash';

m.route(target, '/index', {
  '/index': index,
  '/greeter': greeter
});
