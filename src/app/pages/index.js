import angular from 'angular';

import {chat} from './chat/chat';
import {login} from './login/login';

export const pageModule = 'app.pages';

angular
  .module(pageModule, [])
  .component('chat', chat)
  .component('login', login);
