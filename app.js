require("dotenv").config();

const mongoose=require("mongoose");
const express = require('express');
const app = express();
const bodyParser=require("body-parser");
const cors = require('cors');

// Routers
const authRoute = require('./routers/authRoute');
const postRoute= require('./routers/postRoute');

// DB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(()=>console.log("DB is Connected"))
    .catch((err)=>console.log('error is '+err));

//Middlewares
app.use(bodyParser.json());
app.use(cors());

//App
app.use("/api",[postRoute,authRoute]);

app.listen(process.env.PORT,()=>console.log(`server running on port ${process.env.PORT}`));