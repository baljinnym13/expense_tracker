const sql = require("../config/db");

const getAllRecords = async (req, res) => {
  const records =
    await sql`SELECT name, transaction_type, amount FROM records WHERE uid='ed53f7c0-46da-4599-80a9-506b2c4b1c64';`;
  console.log("recdata", records);
  res.status(200).json({ message: "success", records });
};

const getUserRecords = async (req, res) => {
  try {
    const { id } = req.params;
    const userRecords =
      await sql`SELECT name, transaction_type, amount FROM records WHERE uid=${id};`;

    res.status(200).json({ message: "success", userRecords });
  } catch (error) {
    console.error(error);
  }
};
const createRecords = () => {};
const updateRecords = () => {};
const deleteRecords = () => {};

module.exports = {
  getAllRecords,
  createRecords,
  updateRecords,
  deleteRecords,
  getUserRecords,
};
