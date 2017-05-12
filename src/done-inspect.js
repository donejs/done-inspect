import _ from 'lodash';
import Component from 'can-component';
import DefineMap from 'can-define/map/map';
import stache from 'can-stache';

import view from './done-inspect.stache';
import './done-inspect.less';

import moduleDefinitions from './modules/';
import groupTemplate from './modules/group.stache';
import moduleTemplate from './modules/module.stache';

stache.registerPartial('module.stache', moduleTemplate);

export const viewModel = DefineMap.extend({
  expanded: {
    type: 'boolean',
    value: false,
  },
  options: {
    type: 'object',
    set(options) {
      this.expanded = (options.expanded) ? options.expanded : this.expanded;
      return options;
    },
  },
  renderedGroups: {
    get() {
      const modules = (this.options && this.options.modules) ? 
        moduleDefinitions.concat(this.options.modules) : 
        moduleDefinitions;
      const groups = _.groupBy(modules, 'group');

      const fragment = document.createDocumentFragment();
      _.sortBy(Object.keys(groups)).map((group) => {
        const modules = _.sortBy(groups[group], 'title');
        fragment.appendChild(groupTemplate({
          group,
          modules,
        }));
      });
      return fragment;
    },
  },
  toggleExpanded(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    this.expanded = !this.expanded;
  },
});

export default Component.extend({
  tag: 'done-inspect',
  viewModel,
  view,
});
