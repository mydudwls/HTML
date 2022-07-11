const express = require('express');
const app = express();
app.get("/", (req,res,next) => {
    console.log("first")
    res.send("second");
    next();
});

app.get("/", (req,res,next) => {
    console.log("second");
    res.send('응답처리...')
    return;
    next();
});

app.get("/", (req,res) => {
    console.log("third");
});

app.listen(3000);// 포트번호 입력 


