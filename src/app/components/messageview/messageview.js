import {MessageViewController} from './messageview.controller';

export const messageview = {
  restrict: 'E',
  bindings: {
    messages: '=',
    onSendMessage: '&'
  },
  template: require('./messageview.html'),
  controller: MessageViewController
};
