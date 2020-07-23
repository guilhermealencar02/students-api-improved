/*Imports */
import express from 'express';
import mongoose from 'mongoose';

import {
  studentRouter
} from './routes/studentRoutes.js';

const app = express();

/*Conexao com o MongoDB*/
(async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://' +
      process.env.USERDB +
      ':' +
      process.env.PWDDB +
      '@bootcamp.tl3sv.mongodb.net/grades?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (error) {
    console.log('Erro ao conectar no MongoDB Atlas');
  }
})();

app.use(express.json());
app.use(studentRouter);

app.listen(process.env.PORT, () => console.log('Servidor em execução'));