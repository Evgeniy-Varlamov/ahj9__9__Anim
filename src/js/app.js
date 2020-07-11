/* eslint-disable class-methods-use-this */
// import ArrData from './ArrData.js';
// import DisplayForm from './DisplayForm.js';

import Сollapsible from './Сollapsible';
import CallbackChat from './CallbackChat';
import Liker from './Liker';

if (document) {
  const collapsibleBlock = document.getElementById('collapsible__block');
  const collapsible = new Сollapsible(collapsibleBlock);
  collapsible.init();

  const callbackChatBlock = document.getElementById('callback-chat__block');
  const chat = new CallbackChat(callbackChatBlock);
  chat.init();

  const likerBlock = document.getElementById('liker__block');
  const liker = new Liker(likerBlock);
  liker.init();
}
