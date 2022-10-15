import { DataTypes }  from 'sequelize';
import { sequelize } from '../Database/Database.js';

const Mascotas = sequelize.define('mascotas', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey: true
  },
  idTipo: {
    type: DataTypes.INTEGER,
  },
  nombre: {
    type: DataTypes.STRING
  },
  raza: {
    type: DataTypes.STRING
  },
  
  edad: {
    type: DataTypes.STRING
  },
  imagen: {
    type: DataTypes.STRING
  },
  descripcion: {
    type: DataTypes.TEXT
  },
  detalles: {
    type: DataTypes.TEXT
  },
  estado: {
    type: DataTypes.CHAR
  }
});



export {
  Mascotas
}
