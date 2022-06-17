import React from "react";

const ListItem = ({ data, deleteTransaction }) => {
  const { amount, category, type, id } = data;
  return (
    <li className="px-3 py-2 mr-3 flex justify-between items-center rounded-md shadow-md 
    ">
      <div className="flex gap-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke={type.toLowerCase()==='income'?"green": 'red'}
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div>
          <div className="flex gap-4">
            <h3>{category}</h3>
            <span>${amount}</span>
          </div>
          <div className="relative">
            <span className="mr-4">20 may 2022</span>
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 cursor-pointer hover:text-red-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        onClick={()=>deleteTransaction(id)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </li>
  );
};

export default ListItem;
