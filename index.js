const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => { 
    res.writeHead(200, {"Content-Type": "application/json"});
    res.write(JSON.stringify({"status": "Working"}));
    res.end();
});


app.listen(5000, () => {
    console.log("Online");
});