import React from "react";

const Record = ({ transaction }) => {
  console.log(transaction);
  return (
    <div className="flex justify-between gap-2 items-center py-4 px-6 border-b border-gray-200">
      <div className="flex flex-row gap-4 items-center">
        <span className="w-10 h-10 bg-[#0166FF] rounded-full flex items-center justify-center">
          <img src="home.svg" alt="home" />
        </span>
        <div>
          <p className="py-2">{transaction.name}</p>
          <p className="font-thin text-sm">3 hours ago</p>
        </div>
      </div>
      <p
        className={`${
          transaction.transaction_type === "exp"
            ? "text-red-400"
            : "text-[#84CC16]"
        }`}
      >
        {transaction.amount}₮
      </p>
    </div>
  );
};

export default Record;
