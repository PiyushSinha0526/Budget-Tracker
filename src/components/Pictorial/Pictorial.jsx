import React from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { Tab } from "@headlessui/react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Pictorial = ({ income, expense, incomeData, expenseData }) => {
  return (
    <div className="md:max-w-xs  ">
      <Tab.Group>
        <Tab.List className=" p-1 flex space-x-1 rounded-xl bg-blue_dark dark:bg-white">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-purple_mid",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-purple_mid focus:outline-none focus:ring-2 dark:ring-blue_dark dark:ring-offset-white",
                selected
                  ? "bg-white shadow dark:bg-purple_mid dark:text-white"
                  : "text-blue-100 hover:bg-purple_mid hover:text-white dark:text-blue_dark dark:hover:bg-purple_light"
              )
            }
          >
            Income
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-purple_mid",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-purple_mid focus:outline-none focus:ring-2 dark:ring-blue_dark dark:ring-offset-white",
                selected
                  ? "bg-white shadow dark:bg-purple_mid dark:text-white"
                  : "text-blue-100 hover:bg-purple_mid hover:text-white dark:text-blue_dark dark:hover:bg-purple_light"
              )
            }
          >
            Expense
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel
            className={classNames(

              "mt-2 rounded-xl dark:bg-white p-3 text-green-500 font-bold shadow-lg",
            )}
          >
            <span className="text-green-500 font-bold">Income &#8377; {income}</span>
            {income && <Doughnut data={incomeData} />}
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "mt-2 rounded-xl bg-white p-3 text-red-500 font-bold",
            )}
          >
            <span className="text-red-500 font-bold">Expense &#8377; {expense}</span>
            {expense && <Doughnut data={expenseData} />}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Pictorial;
