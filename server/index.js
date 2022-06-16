const express = require("express");
const mongoose = require("mongoose");
const app = express();
const FoodeModel = require("./models/Food");
app.use(express.json());
mongoose.connect(
  "mongodb+srv://newuser:12345@crud.r7u0ft5.mongodb.net/food?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.get("/", async (req, res) => {
  const food = new FoodeModel({ foodName: "Apple", daysSinceIAte: 3 });
  try {
    await food.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

app.listen(3001, () => {
  console.log(`Server is running on port 3001...`);
});
