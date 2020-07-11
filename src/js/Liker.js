/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-expressions */
/* eslint-disable class-methods-use-this */

export default class Liker {
  constructor(likerBlock) {
    this.likerBlock = likerBlock;
    this.likerButton = this.likerBlock.getElementsByClassName('liker__button')[0];
  }

  init() {
    this.likerButton.addEventListener('click', () => {
      const rand = Math.floor(Math.random() * 4) + 1;
      const img = document.createElement('img');
      img.src = './heart.png';
      img.className = 'heart';
      img.style.animationName = `heart${rand}`;
      this.likerBlock.appendChild(img);
      img.addEventListener('animationend', () => {
        this.likerBlock.removeChild(img);
      });
    });
  }
}
