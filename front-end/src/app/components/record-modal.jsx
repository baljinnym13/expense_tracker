"use client";
import { useContext, useState } from "react";
import { DashboardContext } from "../context/dashboard-context";
import { AddRecord } from ".";
import { addRequestMeta } from "next/dist/server/request-meta";
import { UserContext } from "../context/user-context";

export const RecordModal = ({ isOpen, close }) => {
  const catsData = useContext(DashboardContext);
  const { user } = useContext(UserContext);
  const [activeTab, setActiveTab] = useState("INC");
  const [recordData, setRecordData] = useState({
    uid: "",
    cid: "",
    name: "",
    amount: "",
    transaction_type: "",
    description: "",
  });
  const recordAdd = async () => {
    return;
    setRecordData({ ...recordData, uid: user.id });
    setRecordData({ ...recordData, transaction_type: activeTab });
    // try{const }
    console.log("uid", user.id);
    console.log("uid", transaction_type);
    console.log("click", recordData);
  };

  return (
    <dialog open={isOpen} className="modal">
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="modal-box max-w-[800px]">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={close}
          >
            ✕
          </button>
          <h3 className="text-lg font-bold">Add Record</h3>
          <div className="divider"></div>
          <div className="flex gap-12">
            <RightSide
              catsData={catsData}
              recordAdd={recordAdd}
              setRecordData={setRecordData}
              recordData={recordData}
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            />
            <LeftSide setRecordData={setRecordData} recordData={recordData} />
          </div>
        </div>
      </div>
    </dialog>
  );
};

export const RightSide = ({
  catsData,
  recordAdd,
  recordData,
  setRecordData,
  setActiveTab,
  activeTab,
}) => {
  // const [activeTab, setActiveTab] = useState("INC");

  return (
    <div className="w-2/5">
      <div className="flex space-x-1 bg-gray-200 rounded-full mb-3">
        <button
          className={`px-11 py-2 rounded-full transition-colors duration-300 ${
            activeTab === "EXP"
              ? "bg-blue-500 text-white"
              : "bg-transparent text-black"
          }`}
          onClick={() => setActiveTab("EXP")}
        >
          Expense
        </button>
        <button
          className={`px-11 py-2 rounded-full transition-colors duration-300 ${
            activeTab === "INC"
              ? "bg-green-500 text-white"
              : "bg-transparent text-black"
          }`}
          onClick={() => setActiveTab("INC")}
        >
          Income
        </button>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <input
          type="text"
          placeholder="Amount"
          className="input input-bordered"
          onChange={(e) => {
            setRecordData({ ...recordData, amount: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="name"
          className="input input-bordered"
          onChange={(e) => {
            setRecordData({ ...recordData, name: e.target.value });
          }}
        />
        <div className="flex flex-col">
          <label>Category</label>
          <select
            className="select select-bordered"
            onChange={(e) => {
              console.log("E.VALEU", e.target.value);
              setRecordData({ ...recordData, cid: e.target.value });
            }}
          >
            <option disabled selected>
              Choose
            </option>
            {catsData?.map((cat) => (
              <option value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>
        <div className="flex gap-3">
          <div className="flex flex-col">
            <label>Date</label>
            <input type="date" className="input input-bordered" />
          </div>
          <div className="flex flex-col">
            <label>Time</label>
            <input type="time" className="input input-bordered" />
          </div>
        </div>
      </div>
      <div className="mt-3">
        <button
          onClick={recordAdd}
          className={`btn ${
            activeTab === "EXP" ? "bg-blue-500" : "bg-green-500"
          } text-white w-full`}
        >
          Add Record
        </button>
      </div>
    </div>
  );
};

export const LeftSide = ({ setRecordData, recordData }) => {
  return (
    <div className="flex flex-col w-3/5 gap-3">
      <label>Note</label>
      <textarea
        name="note"
        id="note"
        className="h-[280px] textarea textarea-bordered"
        placeholder="Write here"
        onChange={(e) => {
          setRecordData({ ...recordData, description: e.target.value });
        }}
      ></textarea>
    </div>
  );
};
