/*done-inspect@0.0.2#modules/modules*/
define([
    'exports',
    './show-names/show-names'
], function (exports, _showNames) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _showNames2 = _interopRequireDefault(_showNames);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = [_showNames2.default];
});