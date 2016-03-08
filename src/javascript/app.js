var m = require('mithril');
var target = document.getElementById('container');

var firstName = m.prop('Stephen');

var view = m('div.greeter', [
  m('label', 'Enter your name'),
  m('input', { value: firstName() })
]);

m.render(target, view);
