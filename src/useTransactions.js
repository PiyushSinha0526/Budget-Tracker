import { useContext } from "react";
import { BudgetTrackerContext } from "./context/context";

import { resetCategories, incomeCategories, expenseCategories } from './constants/categories'

export const useTransactions = (title) => {
    resetCategories()
    const { transactions } = useContext(BudgetTrackerContext)
    const filteredTransactions = transactions.filter(f => f.type === title)
    const total = filteredTransactions.reduce((acc, currVal) => acc += currVal.amount, 0)
    const categories = title === 'Income' ? incomeCategories : expenseCategories

    filteredTransactions.forEach(ft => {
        const category = categories.find((c) => c.type === ft.category)
        if (category) category.amount += ft.amount
    });

    const filteredCategories = categories.filter((c) => c.amount > 0)
    const chartData = {
        datasets: [{
            data: filteredCategories.map((c) => c.amount),
            backgroundColor: filteredCategories.map((c) => c.color),
        }],
        labels: filteredCategories.map((c) => c.type),
    }
    return { total, chartData }
}
