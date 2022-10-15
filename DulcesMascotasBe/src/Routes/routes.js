import  {Router} from 'express';
import { deleteAdoptante, getAdoptante, postAdoptante, putAdoptante } from '../Controllers/ControllerAdoptante.js';
import { getGatos,getPerros, postMascota, putMascota, deleteMascota , getMascotaId} from '../Controllers/ControllerMascotas.js';
import {  getTipoMascota,postTipoMascota,putTipoMascota,deletetipoMascota} from '../Controllers/ControllerTipoMascota.js'

const router=Router();

router.get('/',(req,res)=>{
  res.send("Hola estamos en Index");
});

router.get('/tipoMascota',getTipoMascota);

router.post('/tipoMascota',postTipoMascota);

router.put('/tipoMascota/:id',putTipoMascota);

router.delete('/tipoMascota/:id',deletetipoMascota);



router.get('/mascotas/perros',getPerros);

router.get('/mascotas/gatos',getGatos);

router.get('/mascotas/:id',getMascotaId);

router.post('/mascotas',postMascota);

router.put('/mascotas/:id',putMascota);

router.delete('/mascotas/:id',deleteMascota);


router.get('/adoptante',getAdoptante);

router.post('/adoptante',postAdoptante);

router.put('/adoptante/:id',putAdoptante);

router.delete('/adoptante/:id',deleteAdoptante);

export default router;
