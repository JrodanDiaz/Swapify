"use server";
import { getPostsTable } from "../_lib/_database/postQueries";
import { getTable } from "../_lib/_database/queries";

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

export const getPostsAction = async (formData: FormData) => {
  try {
    const table = await getPostsTable();
    if (!table) {
      console.log("no table");
    } else {
      console.log(table.rows);
    }
  } catch (err) {
    console.log(err);
  }
};
