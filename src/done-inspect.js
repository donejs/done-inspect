import _ from 'lodash';
import Component from 'can-component';
import DefineMap from 'can-define/map/map';
import stache from 'can-stache';

import moduleDefinitions from './modules/';
import groupTemplate from './modules/group.stache';
import moduleTemplate from './modules/module.stache';

import view from './done-inspect.stache';
import './styles/done-inspect.less';

stache.registerPartial('module.stache', moduleTemplate);

export const viewModel = DefineMap.extend({
  expanded: {
    type: 'boolean',
    value: false,
  },
  modules: {
    get() {
      const groups = _.groupBy(moduleDefinitions, 'group');
      let templates = [];
      Object.keys(groups).map((group) => {
        templates.push(groupTemplate({
          group,
          modules: groups[group],
        }));
      });
      const fragment = document.createDocumentFragment();
      templates.forEach((template) => {
        fragment.appendChild(template);
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
