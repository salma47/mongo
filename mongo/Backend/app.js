const express = require("express");
const connectDB = require("./Config/connection");

const app = express();

//connection bD
connectDB();

// middleware
app.use(express.json());
app.use("/api/contacts", require("./Routes/contact"));
const port = 5000;

app.listen(port, () => console.log(`server run on port ${port}`));
