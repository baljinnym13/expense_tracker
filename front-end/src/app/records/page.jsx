"use client";

import { useContext, UseContext, useEffect, useState } from "react";
import { UserContext } from "../context/user-context";
import axios from "axios";
import { apiUrl } from "@/utils/util";

const Records = () => {
  const { user } = useContext(UserContext);

  const recordsCardData = async (req, res) => {
    try {
      const res = await axios.get(`${apiUrl}/records`);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    recordsCardData();
  }, [user.id]);

  return <div>Records</div>;
};

export default Records;
