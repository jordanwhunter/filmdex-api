require('dotenv').config();

const express = require ('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true, useNewUrlParser: true }));
app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log('Connected To Your Mongo Database!')
  } catch (error) {
    console.log(error);
  }
}
connectDB();

app.listen(3000, () => console.log('Server Is Listening On Port 3000!'))