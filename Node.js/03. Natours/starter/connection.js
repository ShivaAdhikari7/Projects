const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const mongoose = require("mongoose");

const app = require("./app");

mongoose
  .connect(`${process.env.MONGO_URI}/natours`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database connection successful");
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
