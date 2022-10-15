<template>

        <div class="card"  
        v-for="perro in perros" :key="perro.id">

        <img :src="perro.imagen" />
            <div class="card-body">
                <h5><strong>Nombre: </strong> {{perro.nombre}} </h5>

                <h5><strong>Raza: </strong> {{perro.raza}} </h5>

                <h6><strong>Edad: {{perro.edad}}</strong> </h6>

                <h6 v-if="perro.estado != Adoptado" class="adopted"> <strong>Estado: </strong> Adoptado</h6>

                <p class="card-text">{{perro.descripcion}}</p>
            </div>

            <router-link 
            :to="{name: 'descrip', params: {id: perro.id }}" 
            class="btn btn-block bg-warning">Ver
        </router-link>
            
        </div>
       



   
</template>
<script>
export default {
    name: 'CardPerroComp',
    props: {
        perros: Array
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