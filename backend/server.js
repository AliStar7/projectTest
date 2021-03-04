import express from 'express';
import userRouter from './routers/userRouter.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/projectTest', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
 

app.get('/api/posts', (req, res) => {
    res.send(url);
})
app.use('/api/users', userRouter);

app.get('/', (req, res) =>{
    res.send('Server is ready');
});

app.use((err, req, res, next) =>{
    res.status(500).send({message:err.message});
});

const port = process.env.PORT || 5000;
app.listen(port, () =>{
    console.log(`Serve at http://localhost:${port}`);
});