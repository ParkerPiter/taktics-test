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
    function checkClientEnter (event){
        console.log('event', event.which)
        if(event.which === 13){
            const budgetList = SharedService.getBudgets();
            for (let i = 0; i < budgetList.length; i++) {
                if (budgetList[i].clientName === budgetChapter.clientName) {
                    budgetChapter = budgetList[i];
                }
            }
        }
    }



    vm.chapters = SharedService.getBudgets() ? SharedService.getBudgets().chapters : [];
    vm.formData = {
        rank: '',
        description: '',
        labourCoefficient: '',
        materialCoefficient: '',
        quantity: '',
        labourCost: '',
        materialCost: '',
        unitSale: '',
        totalCost: '',
        totalSale: ''
    };

    // Función para añadir un capítulo
    vm.addChapter = function() {
        const selectedBudget = SharedService.getBudgets();
        console.log(selectedBudget)
        if (selectedBudget && !selectedBudget.chapters) {
            selectedBudget.chapters = [];
        }

        const newChapter = {
            rank: selectedBudget.chapters.length + 1,
            description: '',
            saleCoefficientMaterial: 1,
            saleCoefficientLabor: 1,
            totalCost: 0,
            totalSale: 0,
            batches: []
        };

        selectedBudget.chapters.push(newChapter);
        vm.chapters = selectedBudget.chapters; // Actualizar la lista de capítulos
    };

    // Función para eliminar un capítulo
    vm.deleteChapter = function(chapter) {
        const selectedBudget = SharedService.getBudgets();
        selectedBudget.chapters = selectedBudget.chapters.filter(function(c) {
            return c !== chapter;
        });
        vm.chapters = selectedBudget.chapters; // Actualizar la lista de capítulos
    };

    // Función para resetear el formulario
    vm.resetForm = function() {
        vm.formData = {
            rank: '',
            description: '',
            labourCoefficient: '',
            materialCoefficient: '',
            quantity: '',
            labourCost: '',
            materialCost: '',
            unitSale: '',
            totalCost: '',
            totalSale: ''
        };
    };
}

ChaptersController.$inject = ['$rootScope', 'SharedService'];
