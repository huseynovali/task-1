const express = require('express');
const cors = require('cors')
const { db } = require('./config/db');
const locationRouter = require('./router/locationRoute');
const jobRouter = require('./router/jobRouter');

const app = express();
require('dotenv').config()
const port = 8080;

db.connect();

app.use(express.json())
app.use(cors());



app.use("/locations",locationRouter);
app.use("/jobs",jobRouter)
app.listen(port,()=>console.log("server listen ..."+port))