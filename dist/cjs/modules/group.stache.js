/*done-inspect@0.0.2#modules/group.stache!steal-stache@3.0.5#steal-stache*/
var stache = require('can-stache');
var mustacheCore = require('can-stache/src/mustache_core');
require('can-view-import@3.0.7#can-view-import');
require('can-stache-bindings@3.0.19#can-stache-bindings');
var renderer = stache([
    {
        'tokenType': 'start',
        'args': [
            'li',
            false
        ]
    },
    {
        'tokenType': 'end',
        'args': [
            'li',
            false
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['\n  ']
    },
    {
        'tokenType': 'start',
        'args': [
            'div',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['class']
    },
    {
        'tokenType': 'attrValue',
        'args': ['done-inspect-plugins-separator']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['class']
    },
    {
        'tokenType': 'end',
        'args': [
            'div',
            false
        ]
    },
    {
        'tokenType': 'special',
        'args': ['group']
    },
    {
        'tokenType': 'close',
        'args': ['div']
    },
    {
        'tokenType': 'chars',
        'args': ['\n  ']
    },
    {
        'tokenType': 'start',
        'args': [
            'ul',
            false
        ]
    },
    {
        'tokenType': 'end',
        'args': [
            'ul',
            false
        ]
    },
    {
        'tokenType': 'special',
        'args': ['#each modules as module']
    },
    {
        'tokenType': 'chars',
        'args': ['\n      ']
    },
    {
        'tokenType': 'special',
        'args': ['>module.stache']
    },
    {
        'tokenType': 'special',
        'args': ['/each']
    },
    {
        'tokenType': 'chars',
        'args': ['\n  ']
    },
    {
        'tokenType': 'close',
        'args': ['ul']
    },
    {
        'tokenType': 'chars',
        'args': ['\n']
    },
    {
        'tokenType': 'close',
        'args': ['li']
    },
    {
        'tokenType': 'done',
        'args': []
    }
]);
module.exports = function (scope, options, nodeList) {
    var moduleOptions = { module: module };
    if (!(options instanceof mustacheCore.Options)) {
        options = new mustacheCore.Options(options || {});
    }
    return renderer(scope, options.add(moduleOptions), nodeList);
};