<template>
 
  <div >
    <div class="title">
      <h1>Bienvenidos a Dulces Mascotas</h1>
    </div>
    
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/img/1.jpg"  alt="">
        <div class="carousel-caption d-none d-md-block">
          <h5>Tu mejor amigo</h5>
          <p>Encuentra tu mascota ideal</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/img/2.jpg"  alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Perritos locos</h5>
          <p>Siempre quieren jugar</p>
        </div>
      </div>

      <div class="carousel-item">
        <img src="../assets/img/4.jpg" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Alguien en quien confiar</h5>
          <p>Sin importar donde estes, tu amigo siempre te cuidara</p>
        </div>
      </div>
      
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    
    
  </div>
</div>
</template>

<script>
export default {
  name: 'WelcomeComp'
}
</script>

<style >

.carousel{
  margin-left: 10% ;
  margin-right: 10% ;
}

.carousel-inner{
  height: 500px;
}

.carousel-item img{
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 20px;
}

.title{
  margin-top: 20px;
  width: 100%;
  text-align: center;
}

</style>