var m = require('mithril');

// Define the Repeater Component
var repeater = {};

repeater.controller = function() {
    // responsibility: make service requests and
    // initialize the view model
    repeater.vm.init();
};

repeater.vm = {
  init: function() {
  },
  items: m.prop([]),
  addItem: function() {
    var index = repeater.vm.items().length + 1;

    repeater.vm.items().unshift({
      id: index,
      text: 'Item ' + index
    });

  }
};

repeater.view = function() {
    var vm = repeater.vm;

    var view = m('div.repeater', [
      m('div', [
        vm.items().map(function(item, index) {
          return m('div', { key: item.id }, item.text)
        })
      ]),
      m('button', { onclick: vm.addItem }, 'Add Item')
    ]);

    return view;
};

module.exports = repeater;
