var m = require('mithril');

var renderer = require('../chart/d3-realtime-renderer');
var provider = require('../chart/mock-data-provider');

// Define realtimeData component
var CHART_WIDTH = 600;
var CHART_HEIGHT = 200;

var realtimeData = {};

realtimeData.controller = function() {
  var renderChart = renderer(provider, CHART_WIDTH, CHART_HEIGHT);

  realtimeData.vm.init(renderChart);
};

realtimeData.vm = {
  init: function(renderChart) {
    realtimeData.vm.renderChart = renderChart;
  }
};

realtimeData.view = function() {
  var vm = realtimeData.vm;

  return m('div.realtime', m('svg', {
    width: CHART_WIDTH,
    height: CHART_HEIGHT,
    config: vm.renderChart
  }));
};

module.exports = realtimeData;
