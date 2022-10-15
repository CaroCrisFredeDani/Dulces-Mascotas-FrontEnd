import { Mascotas } from '../Models/Mascotas.js';

const getGatos = async (req, res) => {
  try {
    const mascotas = await Mascotas.findAll(
      {
        where:{
          idTipo:2
         }
      }
    );
    res.status(200).json(mascotas);
  } catch (error) {
    res.status(400).json({ mensaje: `${error}` });
  }
}

const getPerros = async (req, res) => {
  try {
    const mascotas = await Mascotas.findAll(
      {
        where:{
          idTipo:1
         }
      }
    );
    res.status(200).json(mascotas);
  } catch (error) {
    res.status(400).json({ mensaje: `${error}` });
  }
}

const postMascota = async (req, res) => {
  try {
    const { id,idTipo, nombre, raza,edad,imagen, descripcion, detalles, estado } = req.body;
    const newPerro = await Mascotas.create({
      id,
      idTipo,
      nombre,
      raza,
      edad,
      imagen,
      descripcion,
      detalles,
      estado
    });
    res.status(200).json(newPerro);
  } catch (error) {
    res.status(400).json({ mensaje: `${error}` });
  }
}

// Metodo para obtener un perro por el Id
const getMascotaId= async (req, res) => {
  try {
    const { id } = req.params;
    const perro = await Mascotas.findByPk(id);
    res.status(200).json(perro);

  } catch (error) {
    res.status(400).json({ mensaje: `${error}` });
  }
}

const putMascota = async (req, res) => {
  try {
    const { id } = req.params;
    const { idTipo } = req.body;
    const { nombre } = req.body;
    const { raza } = req.body;
    const { edad } = req.body;
    const { imagen } = req.body;
    const { descripcion } = req.body;
    const { detalles } = req.body;
    const { estado } = req.body;

    const oldPerro = await Mascotas.findByPk(id);
    oldPerro.idTipo = idTipo;
    oldPerro.nombre = nombre;
    oldPerro.raza = raza;
    oldPerro.edad = edad;
    oldPerro.imagen = imagen;
    oldPerro.descripcion = descripcion;
    oldPerro.detalles = detalles;
    oldPerro.estado = detalles;
    const modPerro = await oldPerro.save();

    res.status(200).json(modPerro);

  } catch (error) {
    res.status(400).json({ mensaje: `${error}` });
  }
}

const deleteMascota = async (req, res) => {
  try {

    const { id } = req.params;

    const respueta = await Mascotas.destroy({
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
  getGatos,
  getPerros,
  postMascota,
  putMascota,
  deleteMascota,
  getMascotaId
}
