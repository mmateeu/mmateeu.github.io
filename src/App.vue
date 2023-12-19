<template>
  <nav>
    <capcalera></capcalera>
  </nav>
  <router-view />
  <footer>
    <futer></futer>
  </footer>
</template>

<script lang="ts">
import capcalera from './components/capcalera.vue'
import futer from './components/footer.vue'

export default {
  name: 'App',
  components: {
    capcalera,
    futer,
  }
}

</script>

<style>
#app {
  font-family: 'Lexend Deca', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

nav a {
  font-family: 'Lexend Deca', sans-serif;
  text-decoration: none;
  color: #000000;
}

nav a.router-link-exact-active {
  color: #000000;
}



.texto-info {
  padding: 20px;
}

.section-title {
  color: #333;
}

.btn-primary {
  background-color: #00652b;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  display: inline-block;
  margin-top: 20px;
  border: 1px solid #00652b;
}

.btn-primary:hover {
  background-color: #00652b;
  border: 1px solid #00652b;
}

footer {
  .black-background {
    background-color: black;
    color: white;
    margin-top: 7%;
  }

  .background-overlay-2 {
    width: 100%;
    height: 100%;
    z-index: -1;
  }
}
</style>
