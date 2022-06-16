const express = require("express");
const mongoose = require("mongoose");
const app = express();
const FoodeModel = require("./models/Food");
const cors = require("cors");
app.use(express.json());
app.use(cors());
mongoose.connect(
  "mongodb+srv://newuser:12345@crud.r7u0ft5.mongodb.net/food?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.post("/insert", async (req, res) => {
  const foodName = req.body.foodName;
  const days = req.body.days;

  const food = new FoodeModel({ foodName: foodName, daysSinceIAte: days });
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
