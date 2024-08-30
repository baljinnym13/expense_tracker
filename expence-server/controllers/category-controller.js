const sql = require("../config/db");

const getAllCategory = async (req, res) => {
  // postgre select
  const data = await sql`SELECT * FROM categories`;
  res.status(200).json({ message: "success", user: data });
};

const createCategory = async (req, res) => {
  const { name, description, category_image } = req.body;
  const data =
    await sql`INSERT INTO categories (name, description, category_image)
   VALUES (  ${name}, ${description}, ${category_image})`;
  res.status(201).json({ message: "success" });
};
const updateCategory = () => {};
const deleteCategory = () => {};

module.exports = {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
