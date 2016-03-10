var m = require('mithril');

// Define the index (home) component
var index = {};

index.controller = function() {
  var links = [
    {
      route: '#/greeter',
      displayName: 'Greeter'
    },
    {
      route: '#/realtime',
      displayName: 'Real-time data demo'
    },
    {
      route: '#/player-one',
      displayName: 'Player One (game start)'
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
