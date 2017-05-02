export class MessageViewController {
  constructor(userService) {
    this.userService = userService;
    this.messageInfo = {};
  }

  isMe(username) {
    return this.userService.getUser() === username;
  }

  sendMessage() {
    this.onSendMessage(this.messageInfo);
    this.messageInfo = {};
  }
}

MessageViewController.$inject = ['userService'];
