<template>
  <div class="inicio-container">
    <img src="../assets/image/Ager-3.jpg" alt="Fondo de Inicio" class="inicio-background" />
    <div id="cabecera">
      <div id="imcabecera" class="container-fluid">
        <img src="../assets/image/banner.jpg" class="img" alt="banner" width="50%" height="50%">
      </div>
      <div class="background-overlay-2">
        <div id="serveis">
          <h1>&nbsp;</h1>
          <h1>&nbsp;</h1>
          <h1>&nbsp;</h1>
          <h1 id="serveis" class="display-1">
            <p class="text-center"> QUE FEM?
            </p>
          </h1>
          <h1>&nbsp;</h1>
          <h1>&nbsp;</h1>

          <div id="serveis" style="margin-left: 10%; margin-right: 10%;" class="row">
            <div class="col-xxl-4 col-sm-12">
              <div class="card" style="width: 100%;">
                <img src="../assets/image/control financer.jpg" class="card-img.top" alt="Icono2">
                <div class="title text-center py-5">
                  <h2> TRÀMITS CONTABLES I </h2>
                  <h2>&nbsp; FISCALS</h2>
                  <p class="card-body">
                    Ens encarguem de presetnar els diferents tipus d'impostos i llibres de contabilitat per evitar
                    posibles problemes amb Hisenda.
                  </p>
                  <router-link to="/contables" class="btn btn-primary">Més Informació</router-link>
                </div>
              </div>
            </div>

            <div class="col-xxl-4 col-sm-12">
              <div class="card" style="width: 100%;">
                <img src="../assets/image/foto 3.jpg" class="card-img.top" alt="Icono2">
                <div class="title text-center py-5">
                  <h2> TRÀMITS LABORALS</h2>
                  <h2>&nbsp; I D'OFICI</h2>
                  <p class="card-body">
                    T'ajudem amb les altes, baixes i tot allò que tingui a veure amb els contractes de treball.
                  </p>
                  <router-link to="/laboral" class="btn btn-primary">Més Informació</router-link>
                </div>
              </div>
            </div>

            <div class="col-xxl-4 col-sm-12">
              <div class="card" style="width: 100%;">
                <img src="../assets/image/foto 2.jpg" class="card-img.top" alt="Icono2">
                <div class="title text-center py-5">
                  <h2> CREA UNA EMPRESA AMB </h2>
                  <h2>&nbsp; NOSALTRES</h2>
                  <p class="card-body">
                    T'assesorem juridicament, en tots els aspectes relacionats amb els estatus i el començament
                    d'una societat com a tal.
                  </p>
                  <router-link to="/crea" class="btn btn-primary">Més Informació</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="background-overlay-2">
        <div id="equip">

          <h1>&nbsp;</h1>
          <h1>&nbsp;</h1>
          <h1 id="equip" class="display-1">
            <p class="text-center"> EL NOSTRE EQUIP </p>
          </h1>
          <h1>&nbsp;</h1>
          <h1>&nbsp;</h1>

          <div class="container-sm">
            <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="../assets/image/ester.png" width="100%" alt="oficina1">
                </div>
                <div class="carousel-item">
                  <img src="../assets/image/marc.png" width="100%" alt="oficina2">
                </div>
                <div class="carousel-item">
                  <img src="../assets/image/maria.png" width="100%" alt="oficina3">
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="background-overlay-2">
        <div id="ubicacio">
          <h1>&nbsp;</h1>
          <h1>&nbsp;</h1>
          <h1 id="contacte" class="display-1">
            <p class="text-center">ON SÓM ?</p>
          </h1>
          <h1>&nbsp;</h1>
          <h1>&nbsp;</h1>

          <div style="margin-left: 10%; margin-right: 10%;" class="row">
            <div id="mapa">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.930380352511!2d0.7595565765009588!3d42.00176965766139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a65a04a5f03a2f%3A0x6d5cab551609b3b0!2sAGER%20GESTI%C3%93%20ASSESSORS!5e0!3m2!1sca!2ses!4v1698936426799!5m2!1sca!2ses"
                width="100%" height="500">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'cabecera-ca',
}
</script>
<style>
.inicio-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  object-fit: cover;
}

.background-overlay-2 {
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: -1;
}
</style>