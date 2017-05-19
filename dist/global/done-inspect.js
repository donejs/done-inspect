/*[global-shim-start]*/
(function(exports, global, doEval){ // jshint ignore:line
	var origDefine = global.define;

	var get = function(name){
		var parts = name.split("."),
			cur = global,
			i;
		for(i = 0 ; i < parts.length; i++){
			if(!cur) {
				break;
			}
			cur = cur[parts[i]];
		}
		return cur;
	};
	var set = function(name, val){
		var parts = name.split("."),
			cur = global,
			i, part, next;
		for(i = 0; i < parts.length - 1; i++) {
			part = parts[i];
			next = cur[part];
			if(!next) {
				next = cur[part] = {};
			}
			cur = next;
		}
		part = parts[parts.length - 1];
		cur[part] = val;
	};
	var useDefault = function(mod){
		if(!mod || !mod.__esModule) return false;
		var esProps = { __esModule: true, "default": true };
		for(var p in mod) {
			if(!esProps[p]) return false;
		}
		return true;
	};
	var modules = (global.define && global.define.modules) ||
		(global._define && global._define.modules) || {};
	var ourDefine = global.define = function(moduleName, deps, callback){
		var module;
		if(typeof deps === "function") {
			callback = deps;
			deps = [];
		}
		var args = [],
			i;
		for(i =0; i < deps.length; i++) {
			args.push( exports[deps[i]] ? get(exports[deps[i]]) : ( modules[deps[i]] || get(deps[i]) )  );
		}
		// CJS has no dependencies but 3 callback arguments
		if(!deps.length && callback.length) {
			module = { exports: {} };
			var require = function(name) {
				return exports[name] ? get(exports[name]) : modules[name];
			};
			args.push(require, module.exports, module);
		}
		// Babel uses the exports and module object.
		else if(!args[0] && deps[0] === "exports") {
			module = { exports: {} };
			args[0] = module.exports;
			if(deps[1] === "module") {
				args[1] = module;
			}
		} else if(!args[0] && deps[0] === "module") {
			args[0] = { id: moduleName };
		}

		global.define = origDefine;
		var result = callback ? callback.apply(null, args) : undefined;
		global.define = ourDefine;

		// Favor CJS module.exports over the return value
		result = module && module.exports ? module.exports : result;
		modules[moduleName] = result;

		// Set global exports
		var globalExport = exports[moduleName];
		if(globalExport && !get(globalExport)) {
			if(useDefault(result)) {
				result = result["default"];
			}
			set(globalExport, result);
		}
	};
	global.define.orig = origDefine;
	global.define.modules = modules;
	global.define.amd = true;
	ourDefine("@loader", [], function(){
		// shim for @@global-helpers
		var noop = function(){};
		return {
			get: function(){
				return { prepareGlobal: noop, retrieveGlobal: noop };
			},
			global: global,
			__exec: function(__load){
				doEval(__load.source, global);
			}
		};
	});
}
)({},window,function(__$source__, __$global__) { // jshint ignore:line
	eval("(function() { " + __$source__ + " \n }).call(__$global__);");
}
)
/*done-inspect@0.0.5#done-inspect.stache!steal-stache@3.0.5#steal-stache*/
define('done-inspect/done-inspect.stache', [
    'module',
    'can-stache',
    'can-stache/src/mustache_core',
    'can-view-import@3.0.7#can-view-import',
    'can-stache-bindings@3.0.19#can-stache-bindings'
], function (module, stache, mustacheCore) {
    var renderer = stache([
        {
            'tokenType': 'start',
            'args': [
                'div',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['id']
        },
        {
            'tokenType': 'attrValue',
            'args': ['done-inspect-toolbar']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['id']
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['done-inspect done-inspect-toolbar ']
        },
        {
            'tokenType': 'special',
            'args': ['#if expanded']
        },
        {
            'tokenType': 'attrValue',
            'args': ['expanded']
        },
        {
            'tokenType': 'special',
            'args': ['/if']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'attrStart',
            'args': ['role']
        },
        {
            'tokenType': 'attrValue',
            'args': ['region']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['role']
        },
        {
            'tokenType': 'attrStart',
            'args': ['aria-expanded']
        },
        {
            'tokenType': 'special',
            'args': ['expanded']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['aria-expanded']
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
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
            'args': ['done-inspect-toolbar-body']
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
            'tokenType': 'chars',
            'args': ['\n    ']
        },
        {
            'tokenType': 'start',
            'args': [
                'ul',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['done-inspect-plugins']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'ul',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n      ']
        },
        {
            'tokenType': 'special',
            'args': ['{renderedGroups']
        },
        {
            'tokenType': 'chars',
            'args': ['\n    ']
        },
        {
            'tokenType': 'close',
            'args': ['ul']
        },
        {
            'tokenType': 'chars',
            'args': ['\n  ']
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
                'button',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['aria-controls']
        },
        {
            'tokenType': 'attrValue',
            'args': ['done-inspect-toolbar']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['aria-controls']
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['done-inspect-toolbar-toggle']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'attrStart',
            'args': ['aria-label']
        },
        {
            'tokenType': 'attrValue',
            'args': ['[done-inspect] Toggle menu']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['aria-label']
        },
        {
            'tokenType': 'attrStart',
            'args': ['($click)']
        },
        {
            'tokenType': 'attrValue',
            'args': ['toggleExpanded(%event)']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['($click)']
        },
        {
            'tokenType': 'end',
            'args': [
                'button',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n    ']
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
            'args': ['aria-hidden']
        },
        {
            'tokenType': 'attrValue',
            'args': ['true']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['aria-hidden']
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['done-inspect-toolbar-logo']
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
            'tokenType': 'chars',
            'args': ['\n      ']
        },
        {
            'tokenType': 'start',
            'args': [
                'img',
                true
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['src']
        },
        {
            'tokenType': 'attrValue',
            'args': ['https://raw.githubusercontent.com/donejs/done-inspect/master/src/images/donejs-icon-full-color.png']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['src']
        },
        {
            'tokenType': 'end',
            'args': [
                'img',
                true
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n    ']
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
            'tokenType': 'close',
            'args': ['button']
        },
        {
            'tokenType': 'chars',
            'args': ['\n']
        },
        {
            'tokenType': 'close',
            'args': ['div']
        },
        {
            'tokenType': 'done',
            'args': []
        }
    ]);
    return function (scope, options, nodeList) {
        var moduleOptions = { module: module };
        if (!(options instanceof mustacheCore.Options)) {
            options = new mustacheCore.Options(options || {});
        }
        return renderer(scope, options.add(moduleOptions), nodeList);
    };
});
/*done-inspect@0.0.5#modules/select-wand/select-wand*/
define('done-inspect/modules/select-wand/select-wand', [
    'exports',
    'jquery',
    'can-view-callbacks',
    'done-inspect/modules/select-wand/select-wand.less'
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
/*done-inspect@0.0.5#modules/show-names/show-names*/
define('done-inspect/modules/show-names/show-names', [
    'exports',
    'jquery',
    'can-view-callbacks',
    'done-inspect/modules/show-names/show-names.less'
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
            div.className = 'done-inspect-show-names-label';
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
                (0, _jquery2.default)('.done-inspect-show-names-label').remove();
            }
        }
    };
});
/*done-inspect@0.0.5#modules/modules*/
define('done-inspect/modules/modules', [
    'exports',
    'done-inspect/modules/select-wand/select-wand',
    'done-inspect/modules/show-names/show-names'
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
/*done-inspect@0.0.5#modules/group.stache!steal-stache@3.0.5#steal-stache*/
define('done-inspect/modules/group.stache', [
    'module',
    'can-stache',
    'can-stache/src/mustache_core',
    'can-view-import@3.0.7#can-view-import',
    'can-stache-bindings@3.0.19#can-stache-bindings'
], function (module, stache, mustacheCore) {
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
    return function (scope, options, nodeList) {
        var moduleOptions = { module: module };
        if (!(options instanceof mustacheCore.Options)) {
            options = new mustacheCore.Options(options || {});
        }
        return renderer(scope, options.add(moduleOptions), nodeList);
    };
});
/*done-inspect@0.0.5#modules/module.stache!steal-stache@3.0.5#steal-stache*/
define('done-inspect/modules/module.stache', [
    'module',
    'can-stache',
    'can-stache/src/mustache_core',
    'can-view-import@3.0.7#can-view-import',
    'can-stache-bindings@3.0.19#can-stache-bindings'
], function (module, stache, mustacheCore) {
    var renderer = stache([
        {
            'tokenType': 'start',
            'args': [
                'li',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['role']
        },
        {
            'tokenType': 'attrValue',
            'args': ['menu-item']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['role']
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['done-inspect-plugin']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
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
                'label',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['done-inspect-plugin-switch']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'label',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n    ']
        },
        {
            'tokenType': 'start',
            'args': [
                'input',
                true
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['done-inspect-plugin-checkbox done-inspect-sr-only']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'attrStart',
            'args': ['type']
        },
        {
            'tokenType': 'attrValue',
            'args': ['checkbox']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['type']
        },
        {
            'tokenType': 'attrStart',
            'args': ['($change)']
        },
        {
            'tokenType': 'attrValue',
            'args': ['onChange()']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['($change)']
        },
        {
            'tokenType': 'end',
            'args': [
                'input',
                true
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n    ']
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
            'args': ['aria-hidden']
        },
        {
            'tokenType': 'attrValue',
            'args': ['true']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['aria-hidden']
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['done-inspect-plugin-indicator']
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
            'tokenType': 'chars',
            'args': ['\u2713']
        },
        {
            'tokenType': 'close',
            'args': ['div']
        },
        {
            'tokenType': 'chars',
            'args': ['\n    ']
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
            'args': ['done-inspect-plugin-info']
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
            'tokenType': 'chars',
            'args': ['\n      ']
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
            'args': ['done-inspect-plugin-title']
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
            'args': ['title']
        },
        {
            'tokenType': 'close',
            'args': ['div']
        },
        {
            'tokenType': 'chars',
            'args': ['\n      ']
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
            'args': ['done-inspect-plugin-description']
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
            'tokenType': 'chars',
            'args': ['        ']
        },
        {
            'tokenType': 'special',
            'args': ['description']
        },
        {
            'tokenType': 'chars',
            'args': ['\n      ']
        },
        {
            'tokenType': 'close',
            'args': ['div']
        },
        {
            'tokenType': 'chars',
            'args': ['\n    ']
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
            'tokenType': 'close',
            'args': ['label']
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
    return function (scope, options, nodeList) {
        var moduleOptions = { module: module };
        if (!(options instanceof mustacheCore.Options)) {
            options = new mustacheCore.Options(options || {});
        }
        return renderer(scope, options.add(moduleOptions), nodeList);
    };
});
/*done-inspect@0.0.5#done-inspect*/
define('done-inspect', [
    'exports',
    'lodash',
    'can-component',
    'can-define/map/map',
    'can-stache',
    'done-inspect/done-inspect.stache',
    'done-inspect/modules/modules',
    'done-inspect/modules/group.stache',
    'done-inspect/modules/module.stache',
    'done-inspect/done-inspect.less'
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
/*[global-shim-end]*/
(function(){ // jshint ignore:line
	window._define = window.define;
	window.define = window.define.orig;
}
)();