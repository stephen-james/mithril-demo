var m = require('mithril');

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

module.exports = greeter;
