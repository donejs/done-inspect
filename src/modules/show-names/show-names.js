
import $ from 'jquery';
import canViewCallbacks from 'can-view-callbacks';

import './show-names.less';

function getTopLeftPosition(el) {
  const bounds = el.getBoundingClientRect();
  return {
    left: bounds.left,
    top: (bounds.top === 0) ? bounds.top : bounds.top - 22,
  };
}

function addLabelToDocument(tag, positions) {
  positions.map((position) => {
    const div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.top = `${position.top}px`;
    div.style.left = `${position.left}px`;
    div.className = 'done-inspect-show-names-label';
    div.textContent = tag;
    document.body.appendChild(div);
  });
}

export default {
  group: 'components',
  title: 'Show Names',
  description: 'Annotate each component on the page with the name of the component',
  onChange() {
    this.checked = !this.checked;
    if (this.checked) {
      const remove = ['can-import', 'content', 'done-inspect'];
      Object.keys(canViewCallbacks._tags)
        .filter((tag) => !remove.includes(tag))
        .map((t) => {
          const elements = document.getElementsByTagName(t);
          const positions = [];
          for(let i = 0; i < elements.length; i++) {
            const element = elements[i];
            positions.push(getTopLeftPosition(element));
          }
          addLabelToDocument(t, positions);
        });
    } else {
      $('.done-inspect-show-names-label').remove();
    }
  },
};