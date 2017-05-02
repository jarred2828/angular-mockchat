import angular from 'angular';

import {UserService} from './user.service';
import {MockReplyService} from './mock-reply.service';

export const serviceModule = 'app.services';

angular
  .module(serviceModule, [])
  .service('userService', UserService.getInstance)
  .service('mockReplyService', MockReplyService.getInstance);
