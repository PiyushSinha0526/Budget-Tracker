import React from "react";

const Main = () => {
  return (
    <div className="container bg-gray-500 px-8 py-8 flex flex-col gap-4">
      <h2 className="uppercase text-3xl text-center">Budget Tracker</h2>
      <div>
        <h3 className="uppercase">Your Balance</h3>
        <span>$1982</span>
      </div>
      <div className="flex gap-6 justify-center text-center items-center px-4 py-4">
          <div>Income <span>$1082</span></div>
          <div className="bg-black w-16 h-16 rounded-full"></div>
          <div>Expense <span>$900</span></div>
      </div>
    </div>
  );
};

export default Main;
