import angular from 'angular';
import SharedService from '../../common/services/sharedService.service';
import chaptersUrl from './views/chapters.index.html';
import ChaptersController from './controllers/chapters.index.controller';

export default angular.module('app.chapter', [])
  .config(routeConfig)
  .service('SharedService', SharedService)
  .controller('ChaptersController', ChaptersController)
  .name;

function routeConfig($stateProvider) {
  $stateProvider.state('chapter', {
    url: '/chapter',
    templateUrl: chaptersUrl,
    controller: ChaptersController,
    controllerAs: 'vm',
  });
}

routeConfig.$inject = ['$stateProvider']