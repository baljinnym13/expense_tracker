"use client";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user-context";
import axios from "axios";
import { apiUrl } from "../../../utils/util";
import { toast } from "react-toastify";
import Record from "../../components/home-records";
import BarChart from "@/app/components/dashboard/BarChart";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
} from "chart.js";
Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Legend);
import DoughnurChart from "@/app/components/dashboard/Doughnut";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [transactionData, setTransactionData] = useState([]);

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records/${user.id}`);
      setTransactionData(res.data.userRecords);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch transactions");
    }
  };

  useEffect(() => {
    if (user && user.id) {
      fetchTransactions();
    }
  }, [user.id]);

  return (
    <div className="max-w-[1200px] mx-auto py-8 flex flex-col gap-6">
      <div className="flex gap-6">
        <div className="w-[384px] h-[216px] p-4 rounded-xl bg-[#0166FF] relative flex flex-col justify-between">
          <img
            src="./geld-white.svg"
            alt="logo"
            className=" top-8 left-8 w-16 h-16"
          />
          <div className="text-white ">
            <p className="opacity-50 font-normal">Cash</p>
            <span className="font-medium">10,000,00</span>
          </div>
          <div className="absolute bottom-0 right-0 z-10 ">
            <img src="Shape.svg" alt="shape" className="opacity-80 " />
            <img
              src="nfc.svg"
              alt="nfc"
              className="w-10 h-10 absolute bottom-5 right-5 z-20  "
            />
          </div>
        </div>
        <div className="w-[384px] h-[216px] rounded-xl border border-[#0166FF]">
          <div className="flex gap-2 items-center py-4 px-6 border-b border-gray-200">
            <img src="greendot.svg" alt="" />
            Your income
          </div>
          <div className="flex flex-col py-[10px] px-6">
            <p className="font-semibold text-3xl py-2">1,200,000₮</p>
            <p className="font-thin text-sm py-2">Your income Amount</p>
            <p className="flex gap-2 font-normal text-sm py-4">
              <img src="income-up.svg" alt="income" /> 32% from last month
            </p>
          </div>
        </div>
        <div className="w-[384px] h-[216px] rounded-xl border border-[#0166FF]">
          <div className="flex gap-2 items-center py-4 px-6 border-b border-gray-200">
            <img src="bluedot.svg" alt="" />
            Total Expenses
          </div>
          <div className="flex flex-col py-[10px] px-6">
            <p className="font-semibold text-3xl py-2"> -1,200,000₮</p>
            <p className="font-thin text-sm py-2">Your expense Amount</p>
            <p className="flex gap-2 font-normal text-sm py-4">
              <img src="down-side.svg" alt="income" /> 32% from last month
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-6 mt-6">
        <div className="w-[588px] h-[284px] rounded-xl border border-[#0166FF]">
          <div className="flex gap-2 items-center py-4 px-6 border-b border-gray-200">
            Income - Expense
          </div>
          <div className="h-3/4">
            <BarChart />
          </div>
        </div>
        <div className="w-[588px] h-[284px] rounded-xl border border-[#0166FF]">
          <div className="flex justify-between gap-2 items-center py-4 px-6 border-b border-gray-200">
            <p> Income - Expense</p>
            <p className="font-thin"> Jun 1 - Nov 30</p>
          </div>
          <div className="h-3/4">
            <DoughnurChart />
          </div>
        </div>
      </div>

      <div className="w-full h-[full] rounded-xl border border-[#0166FF]">
        <div className="flex justify-between gap-2 items-center py-4 px-6 border-b border-gray-200">
          <p className="font-semibold">Last Records</p>
          <p className="font-thin"> Jun 1 - Nov 30</p>
        </div>

        {transactionData.map((tr) => (
          <Record transaction={tr} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
