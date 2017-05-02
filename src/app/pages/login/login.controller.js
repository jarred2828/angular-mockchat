export class LoginController {
  constructor(userService) {
    this.name = '';
    this.userService = userService;
  }

  login() {
    this.userService.login(this.name);
  }
}

LoginController.$inject = ['userService'];
