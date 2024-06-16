import { pool } from "./PostgresPool";
import { RegisterBody } from "../_types/types";

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

export const userAlreadyExist =  async (userName: string) => {
  try {
    const res = await pool.query(
      "SELECT * FROM users WHERE username = $1", 
      [userName]
    )

    return res.rows.length > 0
  }

  catch(err) {
    console.log(err)
  }
}

export const updateUserEmail = async (newEmail: string, userName: string, password: string) => {
  try{
    const res = await pool.query(
      "UPDATE users SET email = $1 WHERE username = $2 AND password = $3", 
      [newEmail, userName, password]
    )
  }

  catch(error){
    console.log(error)
  }
}