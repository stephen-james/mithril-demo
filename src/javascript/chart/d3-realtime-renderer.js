// gently adjusted from https://gist.github.com/mbostock/1642874
var d3 = require('d3');

var renderer = function(dataProvider, width, height) {
    var provider = dataProvider();

    return function(element, isInitialized, context) {
        if (isInitialized) return;

        var svg = d3.select(element);

        var n = 40,
            // initialize data with 0 values, we'll await "real" values from
            // the provider
            data = d3.range(n).map(function() {
              return 0;
            });

        var margin = {
                top: 20,
                right: 20,
                bottom: 20,
                left: 40
            },
            w = width - margin.left - margin.right,
            h = height - margin.top - margin.bottom;

        var x = d3.scale.linear()
            .domain([0, n - 1])
            .range([0, w]);
        var y = d3.scale.linear()
            .domain([-1, 1])
            .range([h, 0]);
        var line = d3.svg.line()
            .x(function(d, i) {
                return x(i);
            })
            .y(function(d, i) {
                return y(d);
            });

        svg.attr("width", w + margin.left + margin.right)
            .attr("height", h + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        svg.append("defs").append("clipPath")
            .attr("id", "clip")
            .append("rect")
            .attr("width", w)
            .attr("height", h);

        svg.append("g")
            .attr("class", "y axis")
            .call(d3.svg.axis().scale(y).orient("left"));

        var path = svg.append("g")
            .attr("clip-path", "url(#clip)")
            .append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line);

        provider.onData(update);

        function update(datum) {
          // push a new data point onto the back
          data.push(datum);
          // redraw the line, and slide it to the left
          path
              .attr("d", line)
              .attr("transform", null)
              .transition()
              .duration(500)
              .ease("linear")
              .attr("transform", "translate(" + x(-1) + ",0)");

          // pop the old data point off the front
          data.shift();
        }
    }
}

module.exports = renderer;
