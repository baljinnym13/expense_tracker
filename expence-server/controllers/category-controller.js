const sql = require("../config/db");

const getAllCategory = async (req, res) => {
  // postgre select
  const data = await sql`SELECT * FROM categories`;
  res.status(200).json({ message: "success", user: data });
};

const createCategory = () => {};
const updateCategory = () => {};
const deleteCategory = () => {};

module.exports = {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
