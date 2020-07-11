/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-expressions */
/* eslint-disable class-methods-use-this */

export default class Сollapsible {
  constructor(collapsibleBlock) {
    this.collapsibleBlock = collapsibleBlock;
    this.button = this.collapsibleBlock.getElementsByClassName('collapsible__button')[0];
    this.text = this.collapsibleBlock.getElementsByClassName('collapsible__text')[0];
  }

  init() {
    this.button.addEventListener('click', () => {
      (this.text.classList.contains('collapsible-active')) ? this.text.classList.remove('collapsible-active') : this.text.classList.add('collapsible-active');
    });
  }
}
