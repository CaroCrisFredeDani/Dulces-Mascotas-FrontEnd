<template>
  <div class="container">
    <h2 class="m-3">{{ mascota.nombre}}</h2>
    <div class="card mt-3">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <img :src="mascota.imagen" />
          </div>
          <div class="col-md-6">
            <h2>Mascota en adopción <strong>{{ mascota.nombre}}</strong> </h2>
            <p>
              {{mascota.detalles}}
            </p>
            
            <router-link  :to="{name: 'form',  params: {id: 2}}" class="btn btn-primary" >
              Formulario de Adopcion
            </router-link>
            
          </div>
        </div>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-body">
        <button @click="back" class="btn btn-warning">Regresar</button>
        <button @click="home" class="btn btn-success ml-2">Inicio</button>
      </div>
    </div>
  </div>
</template>
  <script>
export default {
  name: "DescripView",
  data(){
    return {
      mascota: [],
    };
  },

  methods: {

    // obtener la mascota seleccionada por el ID
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
    home() {
      this.$router.push("/");
    },
    
  },

  // metodo para inicializar el array de la mascota seleccionada
  mounted() {
    this.getMascotaId();
  },

};
</script>
  <style scoped>
img {
  width: 100%;
}
.btn{
  margin: 2%;
}
</style>