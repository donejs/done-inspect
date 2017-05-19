/*done-inspect@0.0.5#modules/select-wand/select-wand*/
define([
    'exports',
    'jquery',
    'can-view-callbacks',
    'css!./select-wand.less.css'
], function (exports, _jquery, _canViewCallbacks) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _jquery2 = _interopRequireDefault(_jquery);
    var _canViewCallbacks2 = _interopRequireDefault(_canViewCallbacks);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    function componentFromElement(element) {
        var tag = element.tagName.toLowerCase();
        if (tag === 'body' || tag === 'html') {
            return null;
        }
        var remove = [
            'can-import',
            'content',
            'done-inspect'
        ];
        var components = Object.keys(_canViewCallbacks2.default._tags).filter(function (tag) {
            return !remove.includes(tag);
        });
        return components.includes(tag) ? element : componentFromElement(element.parentElement);
    }
    exports.default = {
        group: 'components',
        title: 'Select Wand',
        description: 'Find, outline, and select components',
        onChange: function onChange() {
            this.checked = !this.checked;
            if (this.checked) {
                (0, _jquery2.default)(document).on('mousemove', function (e) {
                    var element = document.elementFromPoint(e.clientX, e.clientY);
                    var component = componentFromElement(element);
                    if (component) {
                        (0, _jquery2.default)('.done-inspect-select-wand-outlined').removeClass('done-inspect-select-wand-outlined');
                        (0, _jquery2.default)(component).addClass('done-inspect-select-wand-outlined');
                    } else {
                        (0, _jquery2.default)('.done-inspect-select-wand-outlined').removeClass('done-inspect-select-wand-outlined');
                    }
                });
            } else {
                (0, _jquery2.default)(document).off('mousemove');
                (0, _jquery2.default)('.done-inspect-select-wand-outlined').removeClass('done-inspect-select-wand-outlined');
            }
        }
    };
});