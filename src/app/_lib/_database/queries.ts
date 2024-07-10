import { pool } from "./PostgresPool";
import { AsyncFunctionResult, RegisterBody } from "../_types/types";
import { ServerResponse } from "../_types/types";
import { QueryResult } from "pg";

export const createTable = async () => {
  try {
    const res = await pool.query(
      "CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, email VARCHAR(100) NOT NULL, username VARCHAR(100) NOT NULL, location VARCHAR(100) NOT NULL, password VARCHAR(100) NOT NULL)"
    );
  } catch (err) {
    console.log("CreateTable Failed");
    console.log(err);
  }
};

export const createUser = async (user: RegisterBody) => {
  try {
    const res = await pool.query(
      "INSERT INTO users (email, username, location, password) VALUES ($1, $2, $3, $4)",
      [user.email, user.username, user.location, user.password]
    );
  } catch (err) {
    console.log(err);
  }
};

export const getTable = async () => {
  try {
    const table = await pool.query("SELECT * FROM users");
    return table;
  } catch (err) {
    console.log("getTable failed");
    console.log(err);
  }
};

export const userAlreadyExist = async (userName: string, email: string, id?: string): Promise<AsyncFunctionResult<{userExists: boolean}>> => {
  try {

    let query = "SELECT * FROM users WHERE (username = $1 OR email = $2)" 
    const values = [userName, email]

    if(id) {
      query += " AND id != $3";
      values.push(id);
    }

    const res = await pool.query(query, values);
    return {
      success: true,
      userExists: res.rows.length > 0 
    }

  } catch (err) {
    console.log("User Already Exists failed");
    console.log(err);
    return {success: false, userExists: false}
  }
};

export const updateUser = async (user: RegisterBody, id: string): Promise<AsyncFunctionResult<{}>> => {
  try {
    const res = await pool.query(
      "UPDATE users SET email = $1, username = $2, password = $3, location = $4 WHERE id = $5",
      [user.email, user.username, user.password, user.location, id]
    );
    return {success: true}
  } catch (error) {
    console.log("ur mom", error);
    return {success: false}
  }
};

export const getUserId = async (
  username: string
): Promise<string | ServerResponse> => {
  try {
    type UserId = { id: number };
    const query = "SELECT id FROM users WHERE username = $1";
    const userRow: QueryResult<UserId> = await pool.query(query, [username]);
    if (userRow.rows.length === 0)
      return { success: false, message: "User does not exist" };
    return userRow.rows[0].id.toString();
  } catch (err) {
    console.log(err);
    return { success: false, message: "Unknown error occurred" };
  }
};
