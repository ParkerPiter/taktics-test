export default function BatchesController($rootScope) {
    const vm = this;
    vm.batches = [];

    vm.formData = {
        rank: 0,
        description: '',
        amount: 0,
        materialCostImport: 0,
        labourCostImport: 0,
        unitaryCostImport: 0,
        totalCostImport: 0,
        unitarySaleCost: 0,
        totalSaleImport: 0
    };

    vm.addBatch = function() {
        vm.formData.unitaryCostImport = vm.formData.materialCostImport + vm.formData.labourCostImport;
        vm.formData.totalCostImport = vm.formData.unitaryCostImport * vm.formData.amount;
        vm.formData.unitarySaleCost = vm.formData.unitaryCostImport;
        vm.formData.totalSaleImport = vm.formData.unitarySaleCost * vm.formData.amount;

        const newBatch = { ...vm.formData };
        vm.batches.push(newBatch);
        vm.resetForm();
    };

    vm.deleteBatch = function(batch) {
        const index = vm.batches.indexOf(batch);
        if (index > -1) {
            vm.batches.splice(index, 1);
        }
    };

    vm.resetForm = function() {
        vm.formData = {
            rank: vm.batches.length + 1,
            description: '',
            amount: 0,
            materialCostImport: 0,
            labourCostImport: 0,
            unitaryCostImport: 0,
            totalCostImport: 0,
            unitarySaleCost: 0,
            totalSaleImport: 0
        };
    };

    vm.resetForm();
}

BatchesController.$inject = ['$rootScope'];
