import mongose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env";

const connectToDatabase = async () => {
  try {
    if (!DB_URI) {
      throw Error("No database connection string provided");
    }
    await mongose.connect(DB_URI);
    console.log(`Connected to database in ${NODE_ENV} mode`);
  } catch (error) {
    console.error("Error connecting to database", error);
    process.exit(1);
  }
};

export default connectToDatabase;
