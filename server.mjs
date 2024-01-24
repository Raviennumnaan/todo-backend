import mongoose from "mongoose";
import app from "./app.mjs";

const DB = process.env.DATABASE_URL.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
console.log(DB);

mongoose.connect(DB).then(() => console.log("DB connection successfull"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}...`);
});
