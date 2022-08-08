const express = require('express');
const dotenv = require('dotenv');

// Load config
dotenv.config({ path: './config/config.env' });

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(`Server is running ${process.env.NODE_ENV} on PORT ${PORT}`)
);
