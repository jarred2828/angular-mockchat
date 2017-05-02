export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('chat', {
      url: '/',
      component: 'chat',
      data: {
        requireAuthentication: true
      }
    })
    .state('login', {
      url: '/login',
      component: 'login',
      data: {
        requireAuthentication: false
      }
    });
}
