export class MockReplyService {
  constructor() {
    this.mockData = [
      {username: 'John Smith', content: 'I am fine thank you!'},
      {username: 'Wilson Kim', content: 'Nice to meet you too'},
      {username: 'Daniel Wu', content: 'Good. How about you?'}
    ];
  }

  getRandomItem() {
    const index = Math.floor(Math.random() * this.mockData.length);
    return this.mockData[index];
  }

  static getInstance() {
    return new MockReplyService();
  }
}

MockReplyService.$inject = [];
