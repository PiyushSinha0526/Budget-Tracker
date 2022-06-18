import React, { useContext, useState } from "react";
import { Tab } from "@headlessui/react";
import ListItem from "./ListItem";
import {BudgetTrackerContext} from '../../context/context'
import { useEffect } from "react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const List = () => {
  const {deleteTransaction, transactions} = useContext(BudgetTrackerContext)
  const [datas,setDatas] = useState({})
  useEffect(() => {
    setDatas({
      all: [...transactions],
      income: transactions.filter(tf=>tf.type==='Income'),
      expense: transactions.filter(tf=>tf.type==='Expense')
    })
  }, [transactions])
  return (
    <div className="w-full max-w-md px-2 py-4 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(datas).map((type, idx) => (
            <Tab
              key={idx}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
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
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              {lists.length?<ul className="overflow-auto h-72 flex flex-col gap-1">
                {lists.map((list) => (
                  <ListItem key={list.id} data={list} deleteTransaction={deleteTransaction}/>
                  ))}
              </ul>: <span className="p">nothing here! add budget</span>}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default List;
