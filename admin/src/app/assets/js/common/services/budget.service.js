// class BudgetService {
//     BudgetServices();
//     this.formatDate(date){
//         const day = date.getDate().toString().padStart(2, '0');
//         const month = (date.getMonth() + 1).toString().padStart(2, '0');
//         const year = date.getFullYear();
//         return `${day}/${month}/${year}`
//     }
//     this.getBudget() {
//         const date = new Date();
//         return {
//             name: 'Proyecto X',
//             thumbnail: 'https://i.ytimg.com/vi/496rKwfxi3E/maxresdefault.jpg',
//             fromDate: this.formatDate(date),
//             toDate: this.formatDate(date),
//             clientName: 'Cliente Y',
//             totalCostImport: 10000,
//             totalSaleImport: 15000,
//             chapters: [
//             ]
//         };
//     }
// }

// export default BudgetService

class BudgetService {
    constructor() {
        this.budgets = [
            {
                id: 1,
                name: 'Presupuesto 1',
                thumbnail: 'https://example.com/image1.jpg',
                date: new Date(),
                clientName: 'Cliente A',
                totalCostImport: 1000,
                totalSaleImport: 1200,
                chapters: []
            },
            {
                id: 2,
                name: 'Presupuesto 2',
                thumbnail: 'https://example.com/image2.jpg',
                date: new Date(),
                clientName: 'Cliente B',
                totalCostImport: 2000,
                totalSaleImport: 2500,
                chapters: []
            }
        ];
    }

    getBudgets() {
        return this.budgets;
    }
}

export default BudgetService;
