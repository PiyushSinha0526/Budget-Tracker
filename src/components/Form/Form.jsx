import React, { useContext, useState } from "react";
import { BudgetTrackerContext } from "../../context/context";
import formatDate from '../../utils/formatDate';
import {
  incomeCategories,
  expenseCategories,
} from "../../constants/categories";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  amount: "1",
  category: "",
  type: "Income",
  date: formatDate(new Date()),
};
const Form = () => {
  const [formData, setFormData] = useState(initialState);
  const { addTransaction } = useContext(BudgetTrackerContext);

  const selectedCategory =
    formData.type === "Income" ? incomeCategories : expenseCategories;


  const createTransaction = (e) => {
    e.preventDefault();
    const transaction = {
      ...formData,
      category: formData.category === '' ? formData.type === "Income" ? incomeCategories[0].type : expenseCategories[0].type : formData.category,
      amount: Number(formData.amount),
      id: uuidv4(),
    };
    addTransaction(transaction);
    setFormData(initialState);
  };
  return (
    <div className="bg-purple_mid mt-4 px-4 py-4 rounded-md ">
      <form action="" className=" flex flex-col gap-2">
        <div className="flex gap-2 md:flex-col">
          <div className="md:w-full md:flex gap-4">
            <label htmlFor="amount" className="text-blue_dark font-bold md:w-1/4">Amount </label>
            <input
              min={1}
              type="number"
              name="amount"
              id="amount"
              value={formData.amount}
              onChange={(e) =>
                setFormData({ ...formData, amount: e.target.value })
              }
              className="w-full px-2 py-1 outline-none rounded-md"
            />
          </div>
          <div className="md:w-full md:flex gap-4">
            <label htmlFor="date" className="text-blue_dark font-bold md:w-1/4">Date </label>
            <input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: formatDate(e.target.value) })
              }
              className="w-full px-2 py-1 outline-none rounded-md"
            />
          </div>
        </div>
        <select
          className="py-2 pl-3 text-sm rounded-md border-r-8 border-transparent"
          label="Type"
          value={formData.type}
          onChange={(e) => {
            setFormData({ ...formData, type: e.target.value });
          }}
        >
          <option value="Income" className="bg-gray-800 text-white">Income</option>
          <option value="Expense" className="bg-gray-800 text-white">Expense</option>
        </select>
        <div className="col-span-6 sm:col-span-3">
          <select
            id="country"
            name="country"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            {selectedCategory.map((c) => (
              <option value={c.type} key={c.type} className="bg-gray-800 text-white">
                {c.type}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="font-bold border-2 py-2 rounded-md bg-blue_dark text-white hover:bg-white hover:border-black hover:text-purple_mid" onClick={createTransaction}>
          Add Budget
        </button>
      </form>
    </div>
  );
};

export default Form;
