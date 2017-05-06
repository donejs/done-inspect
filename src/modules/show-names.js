
import $ from 'jquery';
import canViewCallbacks from 'can-view-callbacks';

function getTopLeftPosition(el) {
  const styles = window.getComputedStyle(el);
  const bounds = el.getBoundingClientRect();
  return {
    left: el.offsetLeft,
    top: Math.abs(bounds.top - parseFloat(styles.marginTop) + 18), 
  };
}

function addLabelToDocument(tag, positions) {
  positions.map((position) => {
    const div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.top = position.top;
    div.style.left = position.left;
    div.className = 'done-inspect-show-name-label';
    div.textContent = tag;
    document.body.appendChild(div);
  });
}

export default {
  group: 'components',
  title: 'Show Names',
  description: 'Annotation each component on the page with the name of the component',
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
      $('.done-inspect-show-name-label').remove();
    }
  },
}