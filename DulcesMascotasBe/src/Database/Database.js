import  Sequelize  from "sequelize";

const host= 'localhost';
const user= 'postgres';
const password= 'postgres';
const database= 'mascotas';
const port= '9091';


const sequelize = new Sequelize(database,user,password,{
    host: host,
    dialect: 'postgres',
    port: port
});

export {
  sequelize
}
