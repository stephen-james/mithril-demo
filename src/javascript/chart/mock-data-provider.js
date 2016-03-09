var d3 = require('d3');

var provider = function() {
  var random = d3.random.normal(0, .2);
  var noop = function() {};
  var provideData = noop;
  var frequency = 500;

  setInterval(function() {
    provideData(random());
  }, frequency);

  return {
    onData: function(callback) {
      provideData = callback;
    }
  };
};

module.exports = provider;
