import QUnit from 'steal-qunit';
import plugin from './done-inspect';

QUnit.module('done-inspect');

QUnit.test('Initialized the plugin', function(){
  QUnit.equal(typeof plugin, 'function');
});
