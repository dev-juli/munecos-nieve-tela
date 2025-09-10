<template>
  <div class="contacto">
    <h2>Contacto</h2>
    <p>¿Tienes dudas o quieres hacer un pedido especial? Escríbenos:</p>
    <ul>
      <li>
        Email:
        <a href="mailto:info@christmasdreams.com">info@christmasdreams.com</a>
      </li>
      <li>
        WhatsApp:
        <a href="https://wa.me/3165442220" target="_blank">316 544 2220</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Contacto",
};
</script>

<style scoped>
.contacto {
  background: #fff;
  border-radius: 12px;
  padding: 32px;
  text-align: center;
  box-shadow: 0 2px 12px #0001;
  margin: 32px auto;
  max-width: 500px;
}
.contacto ul {
  list-style: none;
  padding: 0;
}
.contacto li {
  margin-bottom: 10px;
  font-size: 1.1rem;
}
.contacto a {
  color: #b22222;
  text-decoration: none;
  font-weight: bold;
}
</style>