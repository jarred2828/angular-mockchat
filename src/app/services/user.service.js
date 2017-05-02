export class UserService {
  constructor($window, $state, $log) {
    this.$window = $window;
    this.$state = $state;
    this.$log = $log;
  }

  getUser() {
    return this.$window.localStorage.getItem('username');
  }

  loggedInUser() {
    if (this.getUser()) {
      return true;
    }
    return false;
  }

  login(username) {
    this.$window.localStorage.setItem('username', username);
    this.$state.go('chat');
  }

  logout() {
    this.$window.localStorage.removeItem('username');
    this.$state.go('login');
  }

  static getInstance($window, $state, $log) {
    return new UserService($window, $state, $log);
  }
}
