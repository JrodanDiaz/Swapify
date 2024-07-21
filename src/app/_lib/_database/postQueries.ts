import { pool } from "./PostgresPool";
import { ServerResponse, Listing } from "../_types/types";

  export const createPostTable = async () => {
    try {
      const res = await pool.query(
        "CREATE TABLE IF NOT EXISTS posts (id VARCHAR(100) NOT NULL, title VARCHAR(100) NOT NULL, size VARCHAR(100) NOT NULL, description VARCHAR(500), swap VARCHAR(100) NOT NULL, condition VARCHAR(100) NOT NULL, images BLOB[] NOT NULL)"
      )
      return {success: true, message: "Created Post Table"}
    }
    catch(error) {
      console.log(error)
      return {success: false, message: "Internal Server Error"}
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

  export const postListing = async (listing: Listing): Promise<ServerResponse> => {

    const array = [listing.imageOne, listing.imageTwo, listing.imageThree] 
    const imagesArray = array.filter((item) => item)

    try{
      const table = await pool.query(
        "INSERT INTO post (id, title, size, description, swap, condition, images) VALUES ($1, $2, $3, $4, $5, $6, $7)", 
        [listing.id, listing.title, listing.size, listing.description, listing.swap, listing.condition, imagesArray]
      )
      return {success: true, message: "successfully posted listing"}
    }
    catch(error) {
      console.log(error)
      return {success: false, message: "Could not post listing"}

    }
  }



  