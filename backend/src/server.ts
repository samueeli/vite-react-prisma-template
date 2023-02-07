require('dotenv').config();
const bodyParser = require('body-parser');
import express from 'express';
import userRouter from './routes/users.routes';
const cors = require('cors');

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
  res.send('Hello World');
});

app.use('/api/users', userRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
