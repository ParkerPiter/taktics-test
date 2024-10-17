import angular from 'angular';
import batchesUrl from './views/batches.index.html';
import BatchesController from './controllers/batches.index.controller';

export default angular.module('app.batches', [])
  .config(routeConfig)
  .controller('BatchesController', BatchesController)
  .name;

function routeConfig($stateProvider) {
  $stateProvider.state('batches', {
    url: '/batches',
    templateUrl: batchesUrl,
    controller: BatchesController,
    controllerAs: 'vm',
  });
}

routeConfig.$inject = ['$stateProvider']