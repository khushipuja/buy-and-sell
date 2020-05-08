const express = require("express");

const app = express();
const register = require("./routes/register");
const login = require("./routes/login");
const products_save=require('./routes/products_save');
const getproduct=require('./routes/getproduct');
const cors = require("cors");
const db=require('./startup/config')
// require("./startup/mongodb")();

app.use(cors());
app.use(express.json());
app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/products_save",products_save);
app.use("/api/getproduct",getproduct);

const port = 8000 || process.env.PORT;

app.listen(port, () => console.log(`Listing on port ${port}`));
