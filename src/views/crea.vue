<template>
  <div class="container mt-5">
    <div class="row align-items-center">
      <div class="col-md-6">
        <img src="../assets/image/foto 2.jpg" alt="Crear Empresa Image" class="img-fluid" />
      </div>
      <div class="col-md-6">
        <div class="texto-info text-center text-md-left">
          <h2 class="section-title">Te Ayudamos a Crear Tu Empresa</h2>
          <p>
            A Àger Gestió, estem compromesos a ajudar-te amb l'emocionant procés de crear la teva pròpia empresa.
            El nostre equip d'experts ofereix assessorament integral i serveis especialitzats per a simplificar
            i agilitzar la creació de la teva empresa.
          </p>
          <p>
            Oferim assessorament en l'elecció de la forma jurídica, la preparació de la documentació necessària,
            la gestió de tràmits legals i molt més. Estem aquí per ser el teu soci en cada pas del camí cap a
            l'èxit empresarial.
          </p>
          <router-link to="/contacte" class="btn btn-primary">Contacta amb nosaltres</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CrearEmpresaInfo',
};
</script>

