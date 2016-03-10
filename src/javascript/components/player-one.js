var m = require('mithril');

var playerOne = {};

playerOne.controller = function() {
  var KEY_RIGHT = 39;
  var KEY_UP = 38;
  var KEY_LEFT = 37;

  document.addEventListener('keydown', processKeyEvent);
  document.addEventListener('keyup', processKeyEvent);

  function processKeyEvent(e) {
    switch(e.which) {
      case KEY_LEFT:
        return toggleKey('left', e.type === 'keydown');
      case KEY_RIGHT:
        return toggleKey('right', e.type === 'keydown');
      case KEY_UP:
        return toggleKey('up', e.type === 'keydown');
    }

    function toggleKey(key, active) {
      m.startComputation();
      playerOne.vm.keys[key](active);
      m.endComputation();
    }
  }
};

playerOne.vm = {
  keys: {
    left: m.prop(false),
    up: m.prop(false),
    right:  m.prop(false)
  },

  ninjaState: function() {
    var vm = playerOne.vm;

    // // TODO!!  REMOVE FOR DEMO!!
    // return 'short-circuit';

    var left = vm.keys.left();
    var up = vm.keys.up();
    var right = vm.keys.right();

    if (!(left || up || right)) {
      return 'idle';
    }

    if (right) {
      return 'run';
    }

    if (left) {
      return 'slide';
    }

    if (up) {
      return 'jump'
    }
  }
};

playerOne.view = function() {
  var vm = playerOne.vm;

  return m('div', [
    m('div.player-one', { class: vm.ninjaState() }),
    m('div.keys', [
      m('div.key.key-left', { class: vm.keys.left() ? 'active' : '' }),
      m('div.key.key-up', { class: vm.keys.up() ? 'active' : '' }),
      m('div.key.key-right', { class: vm.keys.right() ? 'active' : '' })
    ])
  ]);
};

module.exports = playerOne;
