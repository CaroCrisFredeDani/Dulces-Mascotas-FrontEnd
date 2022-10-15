import express from 'express';
const app = express();
import router from './src/Routes/routes.js';
import { sequelize } from './src/Database/Database.js';
import cors from 'cors';
import './src/Models/Adoptante.js';
import './src/Models/Mascotas.js';
import './src/Models/TipoMascota.js';

const testDb = async () => {
  try {
    await sequelize.sync();
    console.log('Connection has been established successfully.');
    app.use(cors());
    app.use(express.json({ extended: false }));
    app.use(router);

    app.set('port', 5500);
    app.listen(app.get('port'));
    console.log(`Servidor Activo en Puerto ${app.get('port')}`);
  } catch (error) {
    console.error('Unable to connect to the database '+error);
  }
}

testDb();

