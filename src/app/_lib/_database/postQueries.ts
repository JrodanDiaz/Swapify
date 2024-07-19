import { pool } from "./PostgresPool";

export const createPostTable = async () => {
    try {
      const res = await pool.query(
        "CREATE TABLE IF NOT EXISTS posts (id VARCHAR(100) NOT NULL, title VARCHAR(100) NOT NULL, size VARCHAR(100) NOT NULL, description VARCHAR(500), swap VARCHAR(100) NOT NULL, condition VARCHAR(100) NOT NULL, image TEXT[] NOT NULL)"
      );
    }
    catch(error) {
      console.log(error)
    }
  }

  export const getTable = async () => {
    try {
      const table = await pool.query("SELECT * FROM posts");
      return table;
    } catch (err) {
      console.log("getTable failed");
      console.log(err);
    }
  };

  