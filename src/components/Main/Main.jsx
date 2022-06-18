import React from "react";

import { useTransactions } from "../../useTransactions";
import Form from "../Form/Form";
import List from "../List/List";
import Pictorial from "../Pictorial/Pictorial";

const Main = () => {
  const { total: income, chartData: incomeData } = useTransactions("Income");
  const { total: expense, chartData: expenseData } = useTransactions("Expense");
  return (
    <div className="container bg-gray-500 px-8 py-8 flex flex-col gap-4">
      <h2 className="uppercase text-3xl text-center font-bold">Budget Tracker</h2>
      <div className="flex gap-4 text-white font-bold text-lg">
        <h3 className="uppercase ">Balance</h3>
        <span>${income - expense}</span>
      </div>
      <Form />
      <List />
      <Pictorial
        income={income}
        expense={expense}
        incomeData={incomeData}
        expenseData={expenseData}
      />
    </div>
  );
};

export default Main;
