const express = require("express");
let cors = require("cors");
const connectDB = require("./config/db");

const app = express();
app.use(cors());
// Connect Database

connectDB();

app.use(express.json({ extended: false }));
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });

app.get("/", (req, res) => res.send("Api Running"));

//Routes for Prize

const port = process.env.port || 5000;

app.use("/prize", require("./routes/prize"));
app.use("/prizeGet", require("./routes/prizeGet"));
app.use("/prizedel", require("./routes/prizeDel"));

//Routes for Secret
app.use("/secret", require("./routes/secret"));
app.use("/secretGet", require("./routes/secretGet"));
app.use("/secretdel", require("./routes/secretDel"));

//Route for X-Formula
app.use("/xformula", require("./routes/xFormula"));
app.use("/xformulaGet", require("./routes/xFormulaGet"));
app.use("/xformuladel", require("./routes/xFormulaDel"));

app.use("/profile", require("./routes/profilePost"));
app.use("/profileGet", require("./routes/profileGet"));
app.use("/signin", require("./routes/auth"));

app.listen(port, () => console.log(`Server started at port ${port}`));
