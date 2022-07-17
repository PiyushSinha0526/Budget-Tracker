import React, { useContext, useState } from "react";
import { Tab } from "@headlessui/react";
import ListItem from "./ListItem";
import { BudgetTrackerContext } from '../../context/context'
import { useEffect } from "react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const List = () => {
  const { deleteTransaction, transactions } = useContext(BudgetTrackerContext)
  const [datas, setDatas] = useState({})
  useEffect(() => {
    setDatas({
      all: [...transactions],
      income: transactions.filter(tf => tf.type === 'Income'),
      expense: transactions.filter(tf => tf.type === 'Expense')
    })
  }, [transactions])
  return (
    <div className="w-full max-w-md px-2 py-4 sm:px-0 md:py-0">
      <Tab.Group>
        <Tab.List className=" p-1 flex space-x-1 rounded-xl bg-blue_dark dark:bg-white">
          {Object.keys(datas).map((type, idx) => (
            <Tab
              key={idx}
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
              {type}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(datas).map((lists, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3 shadow-lg",
              )}
            >
              {lists.length ? <ul className="overflow-auto h-80 flex flex-col gap-1">
                {lists.map((list) => (
                  <ListItem key={list.id} data={list} deleteTransaction={deleteTransaction} />
                ))}
              </ul> : <span className="p text-blue_dark">nothing here!</span>}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default List;
