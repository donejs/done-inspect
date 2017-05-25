/*done-inspect@0.0.6#modules/modules*/
define([
    'exports',
    './select-wand/select-wand',
    './show-names/show-names'
], function (exports, _selectWand, _showNames) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _selectWand2 = _interopRequireDefault(_selectWand);
    var _showNames2 = _interopRequireDefault(_showNames);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = [
        _selectWand2.default,
        _showNames2.default
    ];
});