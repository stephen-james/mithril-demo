(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var m = require('mithril');
var target = document.getElementById('container');

// Define the Greeter Component
var greeter = {};

greeter.controller = function() {
    // responsibility: make service requests and
    // initialize the view model
    greeter.vm.init('Stephen');
};

greeter.vm = {
  init: function(firstName) {
    greeter.vm.firstName(firstName);
  },
  firstName: m.prop()
};

greeter.view = function() {
    var vm = greeter.vm;

    var view = m('div.greeter', [
        m('label', 'Enter your name'),
        m('input', {
            value: vm.firstName(),
            oninput: m.withAttr('value', vm.firstName)
        }),
        m('div', 'Hello ' + vm.firstName() + '!')
    ]);

    return view;
};

m.mount(target, greeter);

},{"mithril":"mithril"}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvamF2YXNjcmlwdC9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIG0gPSByZXF1aXJlKCdtaXRocmlsJyk7XG52YXIgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuXG4vLyBEZWZpbmUgdGhlIEdyZWV0ZXIgQ29tcG9uZW50XG52YXIgZ3JlZXRlciA9IHt9O1xuXG5ncmVldGVyLmNvbnRyb2xsZXIgPSBmdW5jdGlvbigpIHtcbiAgICAvLyByZXNwb25zaWJpbGl0eTogbWFrZSBzZXJ2aWNlIHJlcXVlc3RzIGFuZFxuICAgIC8vIGluaXRpYWxpemUgdGhlIHZpZXcgbW9kZWxcbiAgICBncmVldGVyLnZtLmluaXQoJ1N0ZXBoZW4nKTtcbn07XG5cbmdyZWV0ZXIudm0gPSB7XG4gIGluaXQ6IGZ1bmN0aW9uKGZpcnN0TmFtZSkge1xuICAgIGdyZWV0ZXIudm0uZmlyc3ROYW1lKGZpcnN0TmFtZSk7XG4gIH0sXG4gIGZpcnN0TmFtZTogbS5wcm9wKClcbn07XG5cbmdyZWV0ZXIudmlldyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB2bSA9IGdyZWV0ZXIudm07XG5cbiAgICB2YXIgdmlldyA9IG0oJ2Rpdi5ncmVldGVyJywgW1xuICAgICAgICBtKCdsYWJlbCcsICdFbnRlciB5b3VyIG5hbWUnKSxcbiAgICAgICAgbSgnaW5wdXQnLCB7XG4gICAgICAgICAgICB2YWx1ZTogdm0uZmlyc3ROYW1lKCksXG4gICAgICAgICAgICBvbmlucHV0OiBtLndpdGhBdHRyKCd2YWx1ZScsIHZtLmZpcnN0TmFtZSlcbiAgICAgICAgfSksXG4gICAgICAgIG0oJ2RpdicsICdIZWxsbyAnICsgdm0uZmlyc3ROYW1lKCkgKyAnIScpXG4gICAgXSk7XG5cbiAgICByZXR1cm4gdmlldztcbn07XG5cbm0ubW91bnQodGFyZ2V0LCBncmVldGVyKTtcbiJdfQ==
