import Component from 'can-component';
import DefineMap from 'can-define/map/map';
import stache from 'can-stache';
import _groupBy from 'lodash/groupBy';
import _sortBy from 'lodash/sortBy';

import view from './done-inspect.stache';

import moduleDefinitions from './modules/';
import groupTemplate from './modules/group.stache';
import moduleTemplate from './modules/module.stache';

import './styles/done-inspect.less';

stache.registerPartial('module.stache', moduleTemplate);

export const viewModel = DefineMap.extend({
  expanded: {
    type: 'boolean',
    value: false,
  },
  renderedGroups: {
    get() {
      const fragment = document.createDocumentFragment();
      const groups = _groupBy(moduleDefinitions, 'group');
      _sortBy(Object.keys(groups)).map((group) => {
        const modules = _sortBy(groups[group], 'title');
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
