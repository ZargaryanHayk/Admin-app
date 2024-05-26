import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import userRout from './routes/userRout.js';
import  ValditationRout from './routes/ValditationRout.js'

let one  = mongoose.connect('mongodb://localhost:27017/test1db', { useNewUrlParser: true, useUnifiedTopology: true });



const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', userRout);
// app.use('/admin',ValditationRout)

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
