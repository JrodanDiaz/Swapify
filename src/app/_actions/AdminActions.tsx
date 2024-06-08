"use server";
import { getTable } from "../_database/queries";
import { createTable } from "../_database/queries";

export const getUsersAction = async (formData: FormData) => {
  try {
    const table = await getTable();
    if (!table) {
      console.log("no table");
    } else {
      console.log(table.rows);
    }
  } catch (err) {
    console.log(err);
  }
};
