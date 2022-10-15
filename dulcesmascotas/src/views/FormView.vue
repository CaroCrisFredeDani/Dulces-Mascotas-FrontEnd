<template>
  <div class="container">
    <div class="card mt-3">
      <div class="card-body">
        <h2>Formulario de Adopción</h2>

        <div class="title">
          <h3>Mascota: <strong>{{mascota.nombre}} -  {{mascota.raza}}</strong> </h3>
        </div>
        <form>

          <div class="form-group mt-5">
            <label for="nombre">Nombres</label>
            <input v-model="form.nombre" type="text" class="form-control" id="nombre" aria-describedby="nombre" placeholder="Nombres">
 
          </div>

          <div class="form-group mt-4">
            <label for="email">Correo Electronico</label>
            <input v-model="form.email" type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Correo Electronico">
            <small id="emailHelp" class="form-text text-muted">Ej. adoptame@gmail.com</small>
          </div>

          <div class="form-group mt-4">
            <label for="telefono">telefono</label>
            <input v-model="form.telefono" type="text" class="form-control" id="telefono" placeholder="Telefono">
          </div>

        
          <button @click="back" class="btn btn-warning mt-4">Regresar</button>
          <button @click="registrarAdopcion" class="btn btn-primary mt-4">Adoptar!</button>

        </form>

        
 
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name: "FormView",
  data(){
    return {
      mascota:[
      ],
      form: {
        nombre:'',
        correo:'',
        telefono:'',
        mascota:''
      },
    };
  },
  
  methods: {

    // obtener la mascota seleccionada por el ID
    async registrarAdopcion() {
      const idMascota = this.$route.params.id;
      this.form.mascota = idMascota;
      try {
        const res = await fetch('http://localhost:5500/adoptante',{
          method: 'POST',
          body: JSON.stringify(this.form),
          headers: {
            'Content-Type': 'application/json', 
          }
         
        });

        if(await res.status ==200){
          window.alert("Adopción exitosa!, gracias por adoptar una mascota");
          this.$router.push('/');
        }else{
          window.alert("Error al registrar la adopción");
        }
        
          
      
        
 
      } catch (error) {
       console.log(error);
      }

    },
    async getMascotaId() {
      try {
        const id = this.$route.params.id;

        const res = await fetch(`http://localhost:5500/mascotas/${id}` , {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        this.mascota = await res.json();

      } catch (error) {
        console.log(error);
      }
    },

    back() {
      this.$router.go(-1);
    },

    
  },


  // metodo para inicializar el array de la mascota seleccionada
  mounted() {
    this.getMascotaId();
  },

};


</script>

<style scoped>
.btn{
  margin: 2%;
}
.title h3{
  text-align: left;
}

.form-group label{
  text-align: left;
}
</style>