const express = require("express");
const app = express();
app.arguments(express.json());
app.post("/", (req, res) => {
    console.log(req.body);
});

app.listen(3000);

/*
http://LocaLhost:3000/kh/tomato -> id값은 tomato
http://LocaLhost:3000/kh/tomato?mem_id=appappLe&mem_pw=123
*/