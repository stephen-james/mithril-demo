var m = require('mithril');
var target = document.getElementById('container');

var firstName = m.prop('Stephen');

var view = m('div.greeter', [
  m('label', 'Enter your name'),
  m('input', {
    value: firstName(),
    oninput: m.withAttr('value', firstName)
  }),
  m('div', 'Hello ' + firstName() + '!'),
  m('button', { onclick: showNameValue }, 'Show Current Value')
]);

m.render(target, view);

function showNameValue() {
  alert('Current value of firstName: ' + firstName());
}
