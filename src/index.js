import angular from 'angular';

import 'angular-ui-router';
import 'angular-ui-router/release/stateEvents';
import routesConfig from './routes';

import {pageModule} from './app/pages/index';
import {componentModule} from './app/components/index';
import {serviceModule} from './app/services/index';

import './index.less';

angular
  .module('app', ['ui.router', 'ui.router.state.events', pageModule, componentModule, serviceModule])
  .config(routesConfig)
  .run(['userService', '$rootScope', '$state', (userService, $rootScope, $state) => {
    const stateWatcher = $rootScope.$on('$stateChangeStart', (event, toState, toParams) => {
      if (userService.loggedInUser() && !toState.data.requireAuthentication) {
        event.preventDefault();
        $state.go('chat', {}, {notify: false});
      } else if (!userService.loggedInUser() && toState.data.requireAuthentication) {
        event.preventDefault();
        $state.go('login', {}, {notify: false});
      } else {
        event.preventDefault();
        $state.go(toState.name, toParams, {notify: false});
      }
    });

    $rootScope.$on('$destroy', stateWatcher);
  }]);
