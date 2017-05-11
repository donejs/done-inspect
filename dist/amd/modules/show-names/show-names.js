/*done-inspect@0.0.0#modules/show-names/show-names*/
define([
    'exports',
    'jquery',
    'can-view-callbacks',
    'css!./show-names.less.css'
], function (exports, _jquery, _canViewCallbacks) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _jquery2 = _interopRequireDefault(_jquery);
    var _canViewCallbacks2 = _interopRequireDefault(_canViewCallbacks);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    function getTopLeftPosition(el) {
        var styles = window.getComputedStyle(el);
        var bounds = el.getBoundingClientRect();
        return {
            left: el.offsetLeft,
            top: Math.abs(bounds.top - parseFloat(styles.marginTop) + 18)
        };
    }
    function addLabelToDocument(tag, positions) {
        positions.map(function (position) {
            var div = document.createElement('div');
            div.style.position = 'absolute';
            div.style.top = position.top;
            div.style.left = position.left;
            div.className = 'done-inspect-show-name-label';
            div.textContent = tag;
            document.body.appendChild(div);
        });
    }
    exports.default = {
        group: 'components',
        title: 'Show Names',
        description: 'Annotation each component on the page with the name of the component',
        onChange: function onChange() {
            this.checked = !this.checked;
            if (this.checked) {
                var remove = [
                    'can-import',
                    'content',
                    'done-inspect'
                ];
                Object.keys(_canViewCallbacks2.default._tags).filter(function (tag) {
                    return !remove.includes(tag);
                }).map(function (t) {
                    var elements = document.getElementsByTagName(t);
                    var positions = [];
                    for (var i = 0; i < elements.length; i++) {
                        var element = elements[i];
                        positions.push(getTopLeftPosition(element));
                    }
                    addLabelToDocument(t, positions);
                });
            } else {
                (0, _jquery2.default)('.done-inspect-show-name-label').remove();
            }
        }
    };
});