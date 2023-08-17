const express = require("express");
require("../src/db/conn");
const MensRanking = require("../src/models/mens");
const router = require("../src/routers/men");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(router);

// app.get("/", (req, res) => {
//     console.log("Hey There Aditya");
//     res.send("Hey There Aditya");
// })

app.listen(port, () => {
    console.log(`connection is live at port no ${port}`);
})