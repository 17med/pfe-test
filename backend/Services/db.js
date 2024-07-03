import mongoose from "mongoose";
async function connect() {
  try {
    await mongoose.connect(process.env.Db_Url);
    console.log("Connected to database");
  } catch (err) {
    console.log("error in connecting to database");
  }
}
export { connect };
