class SharedService {
    constructor() {
        var budgets = [];

        this.getBudgets = function() {
            return budgets;
        };

        this.addBudget = function(budget) {
            if(budget)budgets.push(budget);
        };

        this.removeBudget = function(index) {
            if (index >= 0 && index < budgets.length) {
              budgets.splice(index, 1);
            }
        };

        this.clearBudgets = function() {
        budgets = [];
        };

        this.editBudget = function(index, updatedBudget) {
            if (index >= 0 && index < budgets.length) {
              budgets[index] = updatedBudget;
            } else {
              throw new Error('Índice fuera de rango');
            }
        };

        this.addChapter = function(budgetIndex, chapter) {
            if (budgetIndex >= 0 && budgetIndex < budgets.length) {
                if (!budgets[budgetIndex].chapters) {
                    budgets[budgetIndex].chapters = [];
                }
                budgets[budgetIndex].chapters.push(chapter);
            } else {
                throw new Error('Índice fuera de rango');
            }
        };
        this.editChapter = function(budgetIndex, chapterIndex, updatedChapter) {
            if (budgetIndex >= 0 && budgetIndex < budgets.length) {
                const chapters = budgets[budgetIndex].chapters;
                if (chapterIndex >= 0 && chapterIndex < chapters.length) {
                    chapters[chapterIndex] = updatedChapter;
                } else {
                    throw new Error('Índice de capítulo fuera de rango');
                }
            } else {
                throw new Error('Índice de presupuesto fuera de rango');
            }
        };
        this.removeChapter = function(budgetIndex, chapterIndex) {
            if (budgetIndex >= 0 && budgetIndex < budgets.length) {
                const chapters = budgets[budgetIndex].chapters;
                if (chapterIndex >= 0 && chapterIndex < chapters.length) {
                    chapters.splice(chapterIndex, 1);
                } else {
                    throw new Error('Índice de capítulo fuera de rango');
                }
            } else {
                throw new Error('Índice de presupuesto fuera de rango');
            }
        };
    }
}

export default SharedService;
