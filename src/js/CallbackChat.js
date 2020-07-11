/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-expressions */
/* eslint-disable class-methods-use-this */

export default class CallbackChat {
  constructor(callbackChat) {
    this.callbackChat = callbackChat;
    this.form = this.callbackChat.getElementsByClassName('chat__form')[0];
    this.btnOpen = this.callbackChat.getElementsByClassName('chat__open-button')[0];
    this.btnCLose = this.callbackChat.getElementsByClassName('chat__close-button')[0];
  }

  init() {
    this.btnOpen.addEventListener('click', () => {
      this.btnOpen.classList.remove('callback-chat__active');
      this.btnOpen.classList.add('callback-chat__disabled');
      this.form.classList.remove('callback-chat__disabled');
      this.form.classList.add('callback-chat__active');
    });
    this.btnCLose.addEventListener('click', () => {
      this.btnOpen.classList.add('callback-chat__active');
      this.btnOpen.classList.remove('callback-chat__disabled');
      this.form.classList.add('callback-chat__disabled');
      this.form.classList.remove('callback-chat__active');
    });
  }
}
