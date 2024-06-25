import { pool } from "./PostgresPool";
import { RegisterBody } from "../_types/types";
import { ServerResponse } from "../_types/types";
import { QueryResult } from "pg";

export const createTable = async () => {
  try {
    const res = await pool.query(
      "CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, email VARCHAR(100) NOT NULL, username VARCHAR(100) NOT NULL, location VARCHAR(100) NOT NULL, password VARCHAR(100) NOT NULL)"
    );
  } catch (err) {
    console.log(
      "CREATE TABLE FAILED ==========================================="
    );

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
    console.log("GET TABLE ERROR ==========================================");

    console.log(err);
  }
};

export const userAlreadyExist = async (userName: string) => {
  try {
    const res = await pool.query("SELECT * FROM users WHERE username = $1", [
      userName,
    ]);

    return res.rows.length > 0;
  } catch (err) {
    console.log(err);
  }
};

export const updateUserEmail = async (
  user: RegisterBody,
  oldUsername: string
) => {
  try {
    // We need to use User Context here green fnga
    //   if (await userAlreadyExist(user.username)) {
    //     return {success: false, message: "User Already Exists" }
    //   }
    const res = await pool.query(
      "UPDATE users SET email = $1, username = $2, password = $3, location = $4 WHERE username = $5",
      [user.email, user.username, user.password, user.location, oldUsername]
    );
  } catch (error) {
    console.log(error);
  }
};

export const getUserId = async (
  username: string
): Promise<number | ServerResponse> => {
  try {
    type UserId = { id: number };
    const query = "SELECT id FROM users WHERE username = $1";
    const userRow: QueryResult<UserId> = await pool.query(query, [username]);
    if (userRow.rows.length === 0)
      return { success: false, message: "User has no id" };
    return userRow.rows[0].id;
  } catch (err) {
    console.log(err);
    return { success: false, message: "Unknown error occurred" };
  }
};
