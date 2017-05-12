import $ from 'jquery';
import canViewCallbacks from 'can-view-callbacks';

import './select-wand.less';

function componentFromElement(element) {
  const tag = element.tagName.toLowerCase();
  if (tag === 'body' || tag === 'html') {
    return null;
  }
  const remove = ['can-import', 'content', 'done-inspect'];
  const components = Object.keys(canViewCallbacks._tags).filter((tag) => !remove.includes(tag));
  return (components.includes(tag)) ? element : componentFromElement(element.parentElement);
}

export default {
  group: 'components',
  title: 'Select Wand',
  description: 'Find, outline, and select components',
  onChange() {
    this.checked = !this.checked;
    if (this.checked) {
      $(document).on('mousemove', (e) => {
        let element = document.elementFromPoint(e.clientX, e.clientY);
        const component = componentFromElement(element);
        if (component) {
          $(".done-inspect-select-wand-outlined").removeClass("done-inspect-select-wand-outlined");
          $(component).addClass("done-inspect-select-wand-outlined");
        } else {
          $(".done-inspect-select-wand-outlined").removeClass("done-inspect-select-wand-outlined");
        }
      });
    } else {
      $(document).off('mousemove');
      $(".done-inspect-select-wand-outlined").removeClass("done-inspect-select-wand-outlined");
    }
  },
};