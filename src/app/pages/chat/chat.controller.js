const moment = require('moment');

export class ChatController {
  constructor(userService, mockReplyService, $timeout, $log) {
    this.userService = userService;
    this.mockReplyService = mockReplyService;
    this.$timeout = $timeout;
    this.$log = $log;
    this.messages = [];
  }

  randomPostMessage() {
    const randomItem = this.mockReplyService.getRandomItem();
    this.$log.log(randomItem);
    randomItem.sendTime = moment().format('YYYY-MM-DD HH:mm');
    this.messages.push(randomItem);
  }

  sendMessage(messageInfo) {
    this.messages.push({
      username: this.userService.getUser(),
      content: messageInfo.content,
      sendTime: moment().format('YYYY-MM-DD HH:mm')
    });

    this.$timeout(() => {
      this.randomPostMessage();
    }, 2000);
  }
}

ChatController.$inject = ['userService', 'mockReplyService', '$timeout', '$log'];
