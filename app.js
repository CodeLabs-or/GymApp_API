import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();

// dotenv
dotenv.config();

//Configuraciones
app.set('port', process.env.PORT || 3080);
app.set('json spaces', 2)

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.text());
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app