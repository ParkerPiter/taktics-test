export default function BudgetController($rootScope, SharedService) {
    const vm = this;
    function initBudget (){
        return {
            name: '',
            thumbnail: '',
            date: '',
            clientName: '',
        }
    }
    vm.selectedBudget = {
        name: '',
        thumbnail: '',
        date: '',
        clientName: '',
    }
    vm.filteredBudgets = [];
    vm.filters = {
        name: '',
        clientName: '',
        startDate: null,
        endDate: null
    };
    vm.formData = {
        name: '',
        thumbnail: '',
        date: '',
        fromDate: '',
        toDate: '',
        clientName: '',
        totalCostImport: '',
        totalSaleImport: '',
        chapters: []
    };
    vm.editMode = false;
    vm.useStaticData = true;

    vm.formatDate = function(dateStr) {
        if (!dateStr) return '';
        const [day, month, year] = dateStr.split('/');
        return `${year}-${month}-${day}`;
    };

    vm.createBudget = function() {
        vm.selectedBudget = initBudget();
        vm.editMode = true;
    };

    vm.editBudget = function(budget) {
        vm.selectedBudget = budget;
        vm.editMode = true;
    };

    vm.saveBudget = function() {
        const listBudget = SharedService.getBudgets();
        if (vm.selectedBudget.id) {
            for (let i = 0; i < listBudget.length; i++) {
                if (listBudget[i].id === vm.selectedBudget.id) {
                    SharedService.editBudget(i, vm.selectedBudget);
                }
            }
        } else {
            const budget = vm.selectedBudget;
            budget.id = listBudget.length + 1;
            SharedService.addBudget(budget);
        }
        vm.filterBudgets();
        vm.editMode = false;
        vm.resetForm();
    };

    vm.deleteBudget = function(budget) {
        if (confirm('¿Estás seguro de que deseas eliminar este presupuesto?')) {
            const listBudget = SharedService.getBudgets();
            for (let i = 0; i < listBudget.length; i++) {
                if (listBudget[i].id === budget.id) {
                    SharedService.removeBudget(i);
                }
            }   
        }
        vm.filterBudgets();
    };

    vm.resetForm = function() {
        vm.selectedBudget = initBudget();
        SharedService.addBudget(null);
        vm.editMode = false;
        vm.formData = {
            name: '',
            thumbnail: '',
            date: '',
            fromDate: '',
            toDate: '',
            clientName: '',
            totalCostImport: '',
            totalSaleImport: '',
            chapters: []
        };
    };

    vm.handleFileSelect = function(event) {
        const file = event.target ? event.target.files[0] : null;
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                $rootScope.$apply(function() {
                    vm.formData.thumbnail = e.target?.result;
                });
            };
            reader.readAsDataURL(file);
        }
    };

    vm.filterBudgets = function() {
        const getAll = angular.copy(SharedService.getBudgets());
        vm.filteredBudgets = getAll.filter(function(budget) {
            return (
                (!vm.filters.name || budget.name.toLowerCase().includes(vm.filters.name.toLowerCase())) &&
                (!vm.filters.clientName || budget.clientName.toLowerCase().includes(vm.filters.clientName.toLowerCase())) &&
                (!vm.filters.startDate || new Date(budget.date) >= new Date(vm.filters.startDate)) &&
                (!vm.filters.endDate || new Date(budget.date) <= new Date(vm.filters.endDate))
            );
        });
    };

    vm.filteredBudgets = angular.copy(SharedService.getBudgets());
}

BudgetController.$inject = ['$rootScope', 'SharedService'];
