import { forEach } from "angular";

export default function ChaptersController($rootScope, SharedService) {
    const vm = this;
    let budgetChapter = initBudgetChapter();
    function initBudgetChapter (){
        return {
            name: '',
            thumbnail: '',
            date: '',
            clientName: '',
            totalSale: 0,
            totalCost: 0
        }
    }
    vm.addChapter = function() {
        if (budgetChapter) {
            const newChapter = {
                rank: budgetChapter.chapters.length + 1,
                description: '',
                saleCoefficientMaterial: 1,
                saleCoefficientLabor: 1,
                totalCost: 0,
                totalSale: 0,
                batches: []
            };
            SharedService.addChapter(budgetChapter.id - 1, newChapter);
        }
    };

    vm.editChapter = function(chapterIndex) {
        if (budgetChapter) {
            const updatedChapter = angular.copy(vm.formData);
            SharedService.editChapter(budgetChapter.id - 1, chapterIndex, updatedChapter);
        }
    };

    vm.removeChapter = function(chapterIndex) {
        if (budgetChapter) {
            SharedService.removeChapter(budgetChapter.id - 1, chapterIndex);
        }
    };
}

ChaptersController.$inject = ['$rootScope', 'SharedService'];
