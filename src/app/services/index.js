import angular from 'angular';

import {UserService} from './user.service';
import {MockReplyService} from './mock-reply.service';

export const serviceModule = 'app.services';

angular
  .module(serviceModule, [])
  .factory('userService', ['$window', '$state', '$log', UserService.getInstance])
  .factory('mockReplyService', MockReplyService.getInstance);
