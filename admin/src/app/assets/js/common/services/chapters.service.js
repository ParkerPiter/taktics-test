class ChaptersService {
    getChapters() {
        return [
            {
                rank: 1,
                description: 'First Chapter',
                labourCoefficient: 1.2,
                materialCoefficient: 1.1,
                quantity: 100,
                labourCost: 200,
                materialCost: 150,
                unitSale: 3,
                totalCost: 350,
                totalSale: 300
            },
        ];
    }
}

export default ChaptersService;