/*done-inspect@0.0.2#done-inspect*/
define([
    'exports',
    'can-component',
    'can-define/map',
    'can-stache',
    'lodash/groupBy',
    'lodash/sortBy',
    './done-inspect.stache',
    './modules/modules',
    './modules/group.stache',
    './modules/module.stache',
    'css!./styles/done-inspect.less.css'
], function (exports, _canComponent, _map, _canStache, _groupBy2, _sortBy2, _doneInspect, _modules, _group, _module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.viewModel = undefined;
    var _canComponent2 = _interopRequireDefault(_canComponent);
    var _map2 = _interopRequireDefault(_map);
    var _canStache2 = _interopRequireDefault(_canStache);
    var _groupBy3 = _interopRequireDefault(_groupBy2);
    var _sortBy3 = _interopRequireDefault(_sortBy2);
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
        renderedGroups: {
            get: function get() {
                var fragment = document.createDocumentFragment();
                var groups = (0, _groupBy3.default)(_modules2.default, 'group');
                (0, _sortBy3.default)(Object.keys(groups)).map(function (group) {
                    var modules = (0, _sortBy3.default)(groups[group], 'title');
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