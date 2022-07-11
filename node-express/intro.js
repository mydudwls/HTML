// import express from "express";
const express = require('express'); //npm i --save-dev express
// nodeJS 에서 COmmonJS사용하면 
// 아래에서 require를 사용하려면 package.json에 type:module이 아니라 common.js로 변경해준다.
// nodeJS 에서 CommonJS사용하려면
// ES6 improt express from "express" 와 같음!! 
const app = express();

app.get("/", (req,res) => {
    console.log("get");
    res.send("안녕하세요. 서버의 응답이다.");
})
app.listen(3000);// 포트번호 입력 




