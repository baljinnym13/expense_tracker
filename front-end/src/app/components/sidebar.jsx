"use client";

import { PlusIcon, EyeIcon } from "@/icons";
import { RecordModal } from "./record-modal";
import { useContext, useEffect, useState } from "react";
import { CategoryModal } from "./category-modal";
import axios from "axios";
import { apiUrl } from "@/utils/util";
import { DashboardContext } from "../context/dashboard-context";

export const SideBar = () => {
  return (
    <aside className="flex flex-col w-[250px] bg-white border border-[#E5E7EB] p-5 rounded-xl gap-4">
      <AddRecord />
      <RecordTypes />
      <RecordCategories />
    </aside>
  );
};

export const AddRecord = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <h1 className="mb-3 font-bold">Records</h1>
      <button
        className="btn bg-[#0166FF] text-white btn-sm"
        onClick={() => setIsOpen(true)}
      >
        <PlusIcon />
        Add
      </button>
      <input
        type="text"
        placeholder="search"
        className="input input-bordered w-full max-w-xs input-sm"
      />
      {/* <RecordModal isOpen={isOpen} close={handleClose} /> */}
    </>
  );
};

export const RecordTypes = () => {
  return (
    <div>
      <h3 className="font-semibold mb-3">Types</h3>
      <div>
        <label className="label cursor-pointer">
          <span className="label-text">All</span>
          <input
            type="radio"
            name="radio-1"
            className="radio radio-sm checked:bg-black"
            defaultChecked
          />
        </label>
      </div>
      <div>
        <label className="label cursor-pointer">
          <span className="label-text">Income</span>
          <input type="radio" name="radio-1" className="radio radio-sm" />
        </label>
      </div>
      <div>
        <label className="label cursor-pointer">
          <span className="label-text">Expense</span>
          <input type="radio" name="radio-1" className="radio radio-sm" />
        </label>
      </div>
    </div>
  );
};

export const RecordCategories = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  // const [catsData, setCatsData] = useState([]);
  const handleClose = () => {
    setCategoryOpen(false);
  };
  const catsData = useContext(DashboardContext);
  // const categoriesData = async () => {
  //   try {
  //     const res = await axios.get(`${apiUrl}/categories`);
  //     const { data } = res.data;
  //     console.log("categor", data);
  //     setCatsData(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // useEffect(() => {
  //   categoriesData();
  // }, []);

  return (
    <div>
      <div className="mb-3 flex justify-between">
        <h3 className="font-semibold ">Category</h3>
        <h4 className="text-xs text-gray-400">Clear</h4>
      </div>
      <div>
        {catsData.map((catData) => {
          return (
            <div className="flex items-center gap-2 mb-2">
              <EyeIcon />
              <p>{catData.name}</p>
            </div>
          );
        })}
      </div>
      <button
        className="btn btn-ghost btn-sm font-light p-1 mt-3"
        onClick={() => setCategoryOpen(true)}
      >
        <PlusIcon color="#0166FF" />
        Add Category
      </button>
      <CategoryModal categoryOpen={categoryOpen} close={handleClose} />
    </div>
  );
};
