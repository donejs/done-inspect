import _groupBy from 'lodash/groupBy';
import Component from 'can-component';
import DefineMap from 'can-define/map/map';
import stache from 'can-stache';

import view from './done-inspect.stache';
import './styles/done-inspect.less';

import moduleDefinitions from './modules/';
import groupTemplate from './modules/group.stache';
import moduleTemplate from './modules/module.stache';

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
      Object.keys(groups).map((group) => {
        fragment.appendChild(groupTemplate({
          group,
          modules: groups[group],
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
