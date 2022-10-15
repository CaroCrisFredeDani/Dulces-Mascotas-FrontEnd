<template>
    <div>
      <div class="container">
        <h2 class="m-3">Gatos en Adopción</h2>

        <div class="row row-cols-1 row-cols-md-3">
            <CardGatoComp :gatos="gatos" />
        </div>
      </div>
    </div>
</template>
<script>
import CardGatoComp from "@/components/CardGatoComp.vue";
export default {
  name: "AdopcionesView",
  components: {
    CardGatoComp,
  },

  data(){
    return {
      gatos: [],
    };
  },
//metodos de conexion al bk 

methods: {
  async getGatos() {
      try {
        const res = await fetch("http://localhost:5500/mascotas/gatos", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        this.gatos = await res.json();
 
      } catch (error) {
        console.log(error);
      }
    },
},


// metodo para inicializar el array Gatos
mounted() {
  
    this.getGatos();
  },

};
</script>