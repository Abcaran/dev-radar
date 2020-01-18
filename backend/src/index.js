const expresss = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const app = expresss();

mongoose.connect(
  "mongodb+srv://samirsaadi:$abcaran1551$@cluster0-7lkx2.mongodb.net/finddevDB?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors());
app.use(expresss.json());
app.use(routes);

app.listen(3333);
