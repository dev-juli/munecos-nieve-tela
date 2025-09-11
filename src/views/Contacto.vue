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
  box-sizing: border-box; /* Para que el padding se incluya en el ancho total */
  background: #fff;
  border-radius: 12px;
  padding: 32px;
  text-align: center;
  box-shadow: 0 2px 12px #0001;
  margin: 32px auto;
  max-width: 500px;
  /* Hacemos que la tarjeta ocupe el 90% del ancho disponible */
  width: 90%;
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

/* Media Query para ajustar el padding en pantallas pequeñas */
@media (max-width: 480px) {
  .contacto {
    /* Reducimos el padding en móviles para dar más espacio al contenido */
    padding: 24px 16px;
  }
}
</style>