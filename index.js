const express = require('express');
const app = express();
const indexRouter = require("./routes/index");
const userRouter = require("./routes/api/users");

app.use("/",indexRouter);
app.use("/api/users",userRouter);


app.listen(3000)
