<template>
    <div>
      <div class="container">
        <h2 class="m-3">Perros en Adopción</h2>
        <div class="row row-cols-1 row-cols-md-3">  
            <CardPerroComp :perros="perros"/>
      
        </div>
      </div>
    </div>
</template>
<script>

import CardPerroComp from "@/components/CardPerroComp.vue";

export default {
  name: "PerrosView",
  components: {
    CardPerroComp,
  },


  data(){
    return {
      perros: [],
    };
  },
//metodos de conexion al bk 

methods: {
  async getPerros() {
      try {
        const res = await fetch("http://localhost:5500/mascotas/perros", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        this.perros = await res.json();
        console.log(this.perros);
      } catch (error) {
        console.log(error);
      }
    },
},


// metodo para inicializar el array perros
mounted() {
  
    this.getPerros();
  },

};







</script>