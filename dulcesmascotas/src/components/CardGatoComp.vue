<template>
   <div class="card" v-for="gato in gatos" :key="gato.id">

    <img :src="gato.imagen" />
        <!--
             <img v-bind:src="require(`../assets/img/mascotas/${gato.image}`)" >
            ../assets/img/mascotas/
            {{gato.imagen}}
            <img :src="require(`../assets/img/mascotas/${gato.image}`)" >
        -->
            <div class="card-body">
                <h5><strong>Nombre: </strong> {{gato.nombre}} </h5>

                <h5><strong>Raza: </strong> {{gato.raza}} </h5>

                <h6 ><strong>Edad: {{gato.edad}}</strong> </h6>

                <h6 v-if="gato.estado == 'Adoptado'" class="adopted"> <strong>Estado: </strong> Adoptado</h6>

                <p class="card-text">{{gato.descripcion}} </p>
            </div>


            <router-link 
            :to="{name: 'descrip', params: {id: gato.id }}" 
            class="btn btn-block bg-warning" >Ver
        </router-link>


            
        </div>
       
</template>
<script>
export default {
    name: 'CardGatoComp',
    props: {
        gatos: Array
    }

    
}
</script>

<style scoped>
    img {
        height: 150px;
        margin: 2%;
        border-radius: 10px;
    }
    .card{
        width: 18rem;
        margin: 2%;
    }

    .btn{
        margin-bottom: 20px;
    }
    .adopted{
        color: brown;
    }
</style>