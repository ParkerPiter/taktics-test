import angular from 'angular';
import SharedService from '../../common/services/sharedService.service';
import budgetUrl from './views/budget.index.html';
import BudgetController from './controllers/budget.index.controller';

import appChapters from '../chapters/app.chapters';
import chaptersUrl from '../chapters/views/chapters.index.html';
import ChaptersController from '../chapters/controllers/chapters.index.controller';

export default angular.module('app.budget', [appChapters])
  .config(routeConfig)
  .service('SharedService', SharedService)
  .controller('BudgetController', BudgetController)
  .controller('ChaptersController', ChaptersController)
  .name;

function routeConfig($stateProvider) {
  $stateProvider.state('budget', {
    url: '/budget',
    views: {
      '': {
        templateUrl: budgetUrl,
        controller: BudgetController,
        controllerAs: 'vm'
      },
      'chapter@budget': {
        templateUrl: chaptersUrl,
        controller: ChaptersController,
        controllerAs: 'vm'
      },
    }
  });
}

routeConfig.$inject = ['$stateProvider'];
