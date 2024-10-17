angular.module('batchesModule').service('BatchesService', function() {
    // Métodos para interactuar con los lotes
    this.calculateUnitaryCost = function(batch) {
        return batch.materialCost + batch.labourCost;
    };

    this.calculateTotalCost = function(batch) {
        return batch.unitaryCost * batch.amount;
    };

    this.calculateUnitarySaleCost = function(batch, saleCoefficients) {
        return (batch.materialCost * saleCoefficients.material) + (batch.labourCost * saleCoefficients.labour);
    };

    this.calculateTotalSale = function(batch) {
        return batch.unitarySaleCost * batch.amount;
    };
});
