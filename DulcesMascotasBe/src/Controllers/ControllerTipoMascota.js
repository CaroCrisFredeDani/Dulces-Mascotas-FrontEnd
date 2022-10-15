import {  TipoMascota } from '../Models/TipoMascota.js';

const getTipoMascota = async (req, res) => {
  try {
    const tipo = await TipoMascota.findAll();
    res.status(200).json(tipo);
  } catch (error) {
    res.status(400).json({ mensaje: `${error}` });
  }

}

const postTipoMascota = async (req, res) => {
  try {
    const { id, tipo } = req.body;

    const newtipoMascota = await TipoMascota.create({
      id,
      tipo
    });

    res.status(200).json(newtipoMascota);
  } catch (error) {
    res.status(400).json({ mensaje: `${error}` });
  }

}

const putTipoMascota = async (req, res) => {
  try {

    const { id } = req.params;
    const { tipo } = req.body;
   

    const oldtipoMascota = await TipoMascota.findByPk(id);
    oldtipoMascota.tipo=nombre;
    const modtipoMascota = await oldtipoMascota.save();

    res.status(200).json(modtipoMascota);

  } catch (error) {
    res.status(400).json({ mensaje: `${error}` });
  }
}

const deletetipoMascota = async (req, res) => {
  try {

    const { id } = req.params;

    const respueta = await TipoMascota.destroy({
       where:{
        id
       }
    });

    res.status(200).json({
      body: {
        id
      }
    });

  } catch (error) {
    res.status(400).json({ mensaje: `${error}` });
  }

}


export {
  getTipoMascota,
  postTipoMascota,
  putTipoMascota,
  deletetipoMascota
}
