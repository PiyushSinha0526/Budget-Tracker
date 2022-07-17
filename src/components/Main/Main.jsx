import React from "react";
import ReactSwitch from "react-switch";
import { useTransactions } from "../../useTransactions";
import Form from "../Form/Form";
import List from "../List/List";
import Pictorial from "../Pictorial/Pictorial";

const Main = ({ toggleTheme, theme }) => {
  const { total: income, chartData: incomeData } = useTransactions("Income");
  const { total: expense, chartData: expenseData } = useTransactions("Expense");

  return (
    <div className="container px-8 py-6 my-6 mx-auto w-96 bg-white border-4 border-purple_light rounded-sm dark:bg-blue_dark grid gap-6 md:w-full md:grid-cols-2 md:grid-rows-2">
      <div className="self-center md:row-start-1 md:col-span-2 md:w-2/3 m-auto">
        <h2 className="uppercase text-3xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-tr from-purple_mid to-blue_dark border-b-4 border-purple_light">Budget Tracker</h2>
        <div className="mt-4 flex justify-between gap-4 text-purple_mid font-bold text-lg">
          <div className="flex"><h3 className="uppercase">Balance</h3>
            <span>- &#8377; {income - expense}</span></div>
          <ReactSwitch offColor="#1E293B" onColor="#ffffff" onHandleColor="#1E293B" checkedIcon uncheckedIcon onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        <Form />
      </div>
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
