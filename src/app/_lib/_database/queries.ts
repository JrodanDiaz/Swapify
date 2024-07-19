import { pool } from "./PostgresPool";
import { AsyncFunctionResult, RegisterBody, AuthResponse, RealUser } from "../_types/types";
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
      return { success: false, message: "User does not exist getUserID" };
    return userRow.rows[0].id.toString();
  } catch (err) {
    console.log(err);
    return { success: false, message: "Unknown error occurred" };
  }
};

export const login = async (username_: string, password_: string): Promise<AuthResponse> => {
  try {
    const userRow: QueryResult<RealUser> = await pool.query(
      "SELECT * FROM users WHERE username = $1 AND password = $2", 
      [username_, password_]
    )

    if (userRow.rows.length === 0) {
      return { success: false, message: "user does not exist loginQuery", user: undefined }
    }

    const loggedinUser: User = {
      id: userRow.rows[0].id,
      email: userRow.rows[0].email,
      username: username_,
      location: userRow.rows[0].location,
      password : password_
    }

    return { success: true, message: "Yayyy", user: loggedinUser }

  }
  catch(error) {
    console.log(error)
    return {success:false, message: "internal server error", user: undefined}
  }
}

export const getUserFromID = async (id: string): Promise<AuthResponse> => {
  try {
    const userRow = await pool.query(
      "SELECT * FROM users WHERE id = $1", 
      [id]
    )

    if (userRow.rows.length === 0) {
      return {success:false, message: "user does not exist getUserFromId", user: undefined}
    }
    const user: User = {
      id: id,
      email: userRow.rows[0].email,
      username: userRow.rows[0].username,
      location: userRow.rows[0].location,
      password: userRow.rows[0].password
    }

    return {success:true, message: "Yayyy", user: user}
  }

  catch(error) {
    console.log(error)
    return {success: false, message: "internal server error", user: undefined}
  }

}