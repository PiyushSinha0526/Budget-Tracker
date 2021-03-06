const incomeColors = ['#123123', '#154731', '#165f40', '#16784f', '#14915f', '#10ac6e', '#0bc77e', '#04e38d',];
const expenseColors = ['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79', '#ffae8a', '#cc474b',];

export const incomeCategories = [
  { type: 'Business', amount: 0, color: incomeColors[0] },
  { type: 'Investments', amount: 0, color: incomeColors[1] },
  { type: 'Extra income', amount: 0, color: incomeColors[2] },
  { type: 'Deposits', amount: 0, color: incomeColors[3] },
  { type: 'Lottery, gambling', amount: 0, color: incomeColors[4] },
  { type: 'Gifts', amount: 0, color: incomeColors[5] },
  { type: 'Salary', amount: 0, color: incomeColors[6] },
  { type: 'Rental income', amount: 0, color: incomeColors[7] },
];

export const expenseCategories = [
  { type: 'Bills', amount: 0, color: expenseColors[0] },
  { type: 'Vehicle', amount: 0, color: expenseColors[1] },
  { type: 'Food & Drinks', amount: 0, color: expenseColors[2] },
  { type: 'Shopping', amount: 0, color: expenseColors[3] },
  { type: 'Transportation', amount: 0, color: expenseColors[4] },
  { type: 'Housing', amount: 0, color: expenseColors[5] },
  { type: 'Life & Entertainment', amount: 0, color: expenseColors[6] },
  { type: 'Communication, PC', amount: 0, color: expenseColors[7] },
  { type: 'Pets', amount: 0, color: expenseColors[8] },
  { type: 'Other', amount: 0, color: expenseColors[9] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => c.amount = 0);
  expenseCategories.forEach((c) => c.amount = 0);
};