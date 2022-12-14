import { Adoptante } from '../Models/Adoptante.js';


const getAdoptante = async (req, res) => {
  try {
    const adoptantes = await Adoptante.findAll();
    res.status(200).json(adoptantes);
  } catch (error) {
    res.status(400).json({ mensaje: `${error}` });
  }

}

const postAdoptante = async (req, res) => {
  try {
    const { nombre, correo, telefono ,mascota} = req.body;

    const newAdoptante = await Adoptante.create({
      nombre,
      correo,
      telefono,
      mascota
    });

    res.status(200).json(newAdoptante);

  } catch (error) {
    res.status(400).json({ mensaje: `${error}` });
  }

}

const putAdoptante = async (req, res) => {
  try {

    const { id } = req.params;
    const { nombre } = req.body;
    const { correo } = req.body;
    const { telefono } = req.body;
    const { mascota } = req.body;

    const oldAdoptante = await Adoptante.findByPk(id);
    oldAdoptante.nombre=nombre;
    oldAdoptante.correo=correo;
    oldAdoptante.telefono=telefono;
    oldAdoptante.mascota=mascota;
    const modAdoptante = await oldAdoptante.save();

    res.status(200).json(modAdoptante);

  } catch (error) {
    res.status(400).json({ mensaje: `${error}` });
  }
}

const deleteAdoptante = async (req, res) => {
  try {

    const { id } = req.params;

    const respueta = await Adoptante.destroy({
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
  getAdoptante,
  postAdoptante,
  putAdoptante,
  deleteAdoptante
}
