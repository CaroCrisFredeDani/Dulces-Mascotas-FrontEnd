import { DataTypes }  from 'sequelize';
import { sequelize } from '../Database/Database.js';

const TipoMascota = sequelize.define('tipoMascota', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey: true
  },
  tipo: {
    type: DataTypes.STRING
  },
  
});




export {
    TipoMascota
}
