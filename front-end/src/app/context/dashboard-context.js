"use client";

import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "@/utils/util";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  //   const [chartData, setChartData] = useState(null);
  const [catsData, setCatsData] = useState([]);
  //   const getChartData = async () => {
  //     try {
  //       const res = await axios.get(`${apiUrl}/records/chart`);
  //       console.log("ST", res.data.donut, res.data.bar);
  //       setChartData({ donut: res.data.donut, bar: res.data.bar });
  //     } catch (error) {
  //       console.error(error);
  //       toast.error("Failed to fetch transactions");
  //     }
  //   };

  //   useEffect(() => {
  //     getChartData();
  //   }, []);
  const categoriesData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/categories`);
      const { data } = res.data;
      console.log("categor", data);
      setCatsData(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    categoriesData();
  }, []);

  return (
    <DashboardContext.Provider value={catsData}>
      {children}
    </DashboardContext.Provider>
  );
};
