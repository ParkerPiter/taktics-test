import angular from 'angular';
import dashboardUrl from './views/dashboard.index.html';
import DashboardController from './controllers/dashboard.index.controller';
import appBudget from '../budget/app.budget';
import budgetUrl from '../budget/views/budget.index.html'
import BudgetController from '../budget/controllers/budget.index.controller';
import appChapters from '../chapters/app.chapters';
import chaptersUrl from '../chapters/views/chapters.index.html'
import ChaptersController from '../chapters/controllers/chapters.index.controller';
import appBatches from '../batches/app.batches';
import batchesUrl from '../batches/views/batches.index.html'
import BatchesController from '../batches/controllers/batches.index.controller';

export default angular.module('app.dashboard', [appBudget, appChapters, appBatches])
  .config(routeConfig)
  .name;

function routeConfig($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/home',
    views: {
      '': {
        templateUrl: dashboardUrl,
        controller: DashboardController,
        controllerAs: 'vm'
      },
      'budget@home': {
        templateUrl: budgetUrl,
        controller: BudgetController,
        controllerAs: 'vm'
      },
      'chapter@home':{
        templateUrl: chaptersUrl,
        controller: ChaptersController,
        controllerAs: 'vm'
      },
      'batch@home': {
        templateUrl: batchesUrl,
        controller: BatchesController,
        controllerAs: 'vm'
      }
    }
  });
  $urlRouterProvider.when('/home', '/home/dashboard');
}

routeConfig.$inject = ['$stateProvider', '$urlRouterProvider']