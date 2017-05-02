import angular from 'angular';

import {navbar} from './navbar/navbar';
import {messageview} from './messageview/messageview';

export const componentModule = 'app.components';

angular
  .module(componentModule, [])
  .component('navbar', navbar)
  .component('messageView', messageview);
