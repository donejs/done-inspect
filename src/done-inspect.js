import Component from 'can-component';
import DefineMap from 'can-define/map/map';
import stache from 'can-stache';
import view from './done-inspect.stache';
import './styles/done-inspect.less';

export const viewModel = DefineMap.extend({
  expanded: {
    type: 'boolean',
    value: false,
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
