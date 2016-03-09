var m = require('mithril');

// Define the index (home) component
var index = {};

index.controller = function() {
  var links = [
    {
      route: '#/greeter',
      displayName: 'Greeter'
    }
  ];

  index.vm.init(links);
};

index.vm = {
  init: function(data) {
    index.vm.links(data);
  },

  links: m.prop([])
};

index.view = function() {
  var vm = index.vm;

  var view = m('div.index',
    m('ul', vm.links().map(function(link) {
      return m('li', m('a', {
        href: link.route
      }, link.displayName));
    }))
  );
  
  return view;
};

module.exports = index;
