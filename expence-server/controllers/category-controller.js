const sql = require("../config/db");

const getAllCategory = async (req, res) => {
  // postgre select
  try {
    const data = await sql`SELECT * FROM categories`;
    res.status(200).json({ message: "success", user: data });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const createCategory = async (req, res) => {
  const category = req.body;
  const columns = object.keys(category);
  try {
    const data = await sql`INSERT INTO categories ${sql(category, columns)})`;
    res.status(201).json({ message: "success", data });
  } catch {
    res.status(400).json({ message: "error" });
  }
};
const updateCategory = async (req, res) => {
  const category = req.baby;
  const { id } = req.params;
  const columns = object.keys(category);
  try {
    const data = await sql`UPDATE categories SET ${sql(
      category,
      columns
    )} WHERE id = ${id}`;
    res.status(200).json({ message: "update success", data });
  } catch (error) {
    res.status(400).json({ error: "update failed" });
  }
};
const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await sql`DELETE FROM categories WHERE id = ${id} `;
    res.status(200).json({ message: "delete success", data });
  } catch (error) {
    res.status(400).json({ error: "delete failed" });
  }
};

module.exports = {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
