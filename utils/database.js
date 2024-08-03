import mongoose from "mongoose";
import { Processor } from "postcss";

let isConnected = false; //tract the connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    // , {
    //   dbName: "share_prompts",
    //   userUrlParser: true,
    //   useUnifiedTopology: true,
    // });

    isConnected = true;
    console.log("mongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
