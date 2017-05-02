export class NavbarController {
  constructor(userService) {
    this.username = userService.getUser();
    this.userService = userService;
  }

  logout() {
    this.userService.logout();
  }
}

NavbarController.$inject = ['userService'];
