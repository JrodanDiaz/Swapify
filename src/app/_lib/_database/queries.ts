import { pool } from "./PostgresPool";
import { AsyncFunctionResult, RegisterBody, AuthResponse } from "../_types/types";
import { ServerResponse } from "../_types/types";
import { QueryResult } from "pg";
import { User } from "../_types/types";

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

export const login = async (username_: string, password_: string): Promise<AuthResponse> => {
  try {
    const userRow = await pool.query(
      "SELECT * FROM users WHERE (username = $1 AND password = $2)", 
      [username_, password_]
    )

    if (userRow.rows.length === 0) {
      return {success:false, message: "user does not exist", user: undefined}
    }
    const id = userRow.rows[0].id
    const email = userRow.rows[0].email
    const username = username_
    const location = userRow.rows[0].location
    const password  = password_

    const loggedinUser: User = {password: password, email: email, username: username, location: location, id: id}

    console.log({password, email, username, location, id})
    return {success:true, message: "Yayyy", user: loggedinUser}

  }
  catch(error) {
    console.log(error)
    return {success:false, message: "internal server error", user: undefined}
  }
}
