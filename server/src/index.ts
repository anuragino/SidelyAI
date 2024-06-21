import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import routes from './routes';
import cors from 'cors';

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose.connect('mongodb+srv://user:admin@cluster0.vsrwnao.mongodb.net/').then(() => {
  console.log('Connected to MongoDB');
})

.catch(err => {
  console.error('Error connecting to MongoDB', err);
});
