const sql = require("../config/db");

const getAllUser = async (req, res) => {
  const data = await sql`SELECT * FROM users`;
  console.log("DATA", data);
  res.status(200).json({ message: "success", user: data });
};
const createUser = async (req, res) => {
  const user = req.body;
  const columns = object.key(user);
  try {
    const data = await sql`INSERT INTO users ${sql(user, columns)};
    `;
    res.status(201).json({ message: "success", data });
  } catch (error) {
    res.status(400).json({ error });
  }
};
const updateUser = async (req, res) => {
  const user = req.body;
  const columns = object.key(user);
  const { id } = req.params;
  try {
    const data = await sql`UPDATE users SET ${sql(
      user,
      columns
    )} WHERE id=${id}`;
    res.status(200).json({ message: "success", data });
  } catch (error) {
    res.status(400).json({ error });
  }
};
const deleteUser = async (req, res) => {
  const { id } = req.params;
  const data = await sql`DELETE FROM employees WHERE eid=${id}`;
  console.log("DATA", data);
  res.status(200).json({ message: "delete success", user: data });
};

module.exports = { getAllUser, createUser, updateUser, deleteUser };
// const updateCategory = async (req, res) => {
//   const category = req.baby;
//   const { id } = req.params;
//   const columns = object.keys(category);
//   try {
//     const data = await sql`UPDATE categories SET ${sql(
//       category,
//       columns
//     )} WHERE id = ${id}`;
//     res.status(200).json({ message: "update success", data });
//   } catch (error) {
//     res.status(400).json({ error: "update failed" });
//   }
// };
