/*done-inspect@0.0.5#done-inspect*/
define([
    'exports',
    'lodash',
    'can-component',
    'can-define/map',
    'can-stache',
    './done-inspect.stache',
    './modules/modules',
    './modules/group.stache',
    './modules/module.stache',
    'css!./done-inspect.less.css'
], function (exports, _lodash, _canComponent, _map, _canStache, _doneInspect, _modules, _group, _module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.viewModel = undefined;
    var _lodash2 = _interopRequireDefault(_lodash);
    var _canComponent2 = _interopRequireDefault(_canComponent);
    var _map2 = _interopRequireDefault(_map);
    var _canStache2 = _interopRequireDefault(_canStache);
    var _doneInspect2 = _interopRequireDefault(_doneInspect);
    var _modules2 = _interopRequireDefault(_modules);
    var _group2 = _interopRequireDefault(_group);
    var _module2 = _interopRequireDefault(_module);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    _canStache2.default.registerPartial('module.stache', _module2.default);
    var viewModel = exports.viewModel = _map2.default.extend({
        expanded: {
            type: 'boolean',
            value: false
        },
        options: {
            type: 'object',
            set: function set(options) {
                this.expanded = options.expanded ? options.expanded : this.expanded;
                return options;
            }
        },
        renderedGroups: {
            get: function get() {
                var modules = this.options && this.options.modules ? _modules2.default.concat(this.options.modules) : _modules2.default;
                var groups = _lodash2.default.groupBy(modules, 'group');
                var fragment = document.createDocumentFragment();
                _lodash2.default.sortBy(Object.keys(groups)).map(function (group) {
                    var modules = _lodash2.default.sortBy(groups[group], 'title');
                    fragment.appendChild((0, _group2.default)({
                        group: group,
                        modules: modules
                    }));
                });
                return fragment;
            }
        },
        toggleExpanded: function toggleExpanded(ev) {
            ev.preventDefault();
            ev.stopPropagation();
            this.expanded = !this.expanded;
        }
    });
    exports.default = _canComponent2.default.extend({
        tag: 'done-inspect',
        viewModel: viewModel,
        view: _doneInspect2.default
    });
});