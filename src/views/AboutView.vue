<!-- ContactPage.vue -->
<template>
  <div class="contact-page">
    <h1>Contacte</h1>
    <div class="contact-info">
      <div class="contact-details">
        <p><strong>Teléfono de contacto:</strong> 973 455 278</p>
        <p><strong>Whatsapp:</strong> 722 47 26 80</p>
        <p><strong>Correo:</strong> info@agergestio.cat</p>
      </div>
    </div>
    <h2>Consulta ràpida</h2>
    <form @submit.prevent="submitForm">
      <label for="name">Nombre:</label>
      <input type="text" id="name" v-model="formData.name" required>

      <label for="email">Correo Electrónico:</label>
      <input type="email" id="email" v-model="formData.email" required>

      <label for="message">Mensaje:</label>
      <textarea id="message" v-model="formData.message" required></textarea>

      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      
    }
  }
};
</script>

<style scoped>
.contact-page {
  max-width: 600px;
  margin: auto;
}

.contact-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.contact-details {
  flex: 1;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 8px;
}

input,
textarea {
  margin-bottom: 16px;
  padding: 8px;
}

button {
  padding: 10px;
  background-color: #00652b;
  color: #fff;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #00652b;
}
</style>
