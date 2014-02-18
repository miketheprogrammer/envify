var test = require('tape');

var envify = require('./index');
var config = require('config');
test("Config should be bound to process.env", function (t) {
  t.plan(1);
  var expected = '';
  if (process.env.NODE_ENV !== 'staging') {
    expected = 'hello world from Michael Hernandez';
  } else {
    expected = 'goodbye world from Michael Hernandez';
  }

  var env = process.env;
  var real = env.var1 + env.var2 + "from " + env.name;

  t.equals(real, expected);
});

test("Envify export should be === to config", function (t) {
  t.plan(1);

  t.deepEquals(envify, config);
})