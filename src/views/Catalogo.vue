<template>
  <div class="catalogo-container">
    <div class="catalogo-header">
      <h1>Nuestro Arte Hecho a Mano</h1>
      <p class="subtitulo">
        Cada muñeco es una pieza única, creada con dedicación y cariño para llevar la magia de la
        Navidad a tu hogar.
      </p>
    </div>
    <div class="catalogo-showcase">
      <section
        class="producto-item"
        v-for="(muñeco, index) in muñecos"
        :key="muñeco.titulo"
      >
        <div class="producto-imagen">
          <img :src="muñeco.imagen" :alt="muñeco.titulo" />
        </div>
        <div class="producto-contenido">
          <span class="tag-hecho-mano">Hecho a mano</span>
          <h2>{{ muñeco.titulo }}</h2>
          <p class="descripcion">{{ muñeco.descripcion }}</p>
          <div class="precio-container">
            <span class="precio-valor">{{ muñeco.precio }}</span>
          </div>
          <a :href="whatsappLink(muñeco)" class="cta-comprar" target="_blank">✨ ¡Lo quiero! ✨</a>
        </div>
      </section>

      <!-- Card para Personalizar -->
      <router-link to="/personaliza" class="personaliza-card-link">
        <section class="producto-item personaliza-card">
          <h3>¿No encuentras lo que buscas?</h3>
          <p>Crea un muñeco de nieve único, diseñado por ti.</p>
          <span class="cta-personalizar">¡Personaliza el Tuyo!</span>
        </section>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { products } from './products.js';

const muñecos = ref(products);

const whatsappLink = (muñeco) => {
  const numero = '3165442220'; // Tu número de WhatsApp
  const mensaje = `¡Hola! Estoy interesado en el muñeco "${muñeco.titulo}". ¿Podrían darme más información?`;
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
};
</script>

<style scoped>
.catalogo-container {
  background: #1c2a22; /* Verde oscuro, como en Home */
  min-height: 100vh; /* Ocupa toda la altura visible */
  padding: 90px 24px 60px; /* Ajustado para subir más el título */
  font-family: 'Montserrat', sans-serif;
  box-sizing: border-box;
}

.catalogo-header {
  margin: 0 auto 48px;
  max-width: 1100px;
  text-align: center;
}

.catalogo-header h1 {
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 2.8rem;
  color: #d4af37; /* Dorado, para contraste en fondo oscuro */
}

.catalogo-header .subtitulo {
  font-size: 1.1rem;
  color: #e0e0e0; /* Color claro para texto */
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.catalogo-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 340px));
  gap: 32px;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
}

.producto-item {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.producto-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
}

.producto-imagen img {
  width: 100%;
  height: 200px; /* Altura de imagen reducida */
  object-fit: cover;
}

.producto-contenido {
  display: flex;
  padding: 12px 20px; /* Padding vertical reducido */
  flex-direction: column;
  flex-grow: 1; /* Empuja el botón hacia abajo */
  text-align: left;
}

.tag-hecho-mano {
  background-color: #d4af37; /* Dorado */
  color: #fff;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  align-self: flex-start;
  margin-bottom: 8px; /* Margen reducido */
}

.producto-contenido h2 {
  font-size: 1.4rem;
  color: #b22222; /* Rojo fuego */
  margin: 0 0 6px 0;
}

.descripcion {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #666;
  flex-grow: 1;
  margin-bottom: 10px; /* Margen reducido */
}

.precio-valor {
  font-size: 1.6rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 12px; /* Margen reducido */
}

.cta-comprar {
  background: linear-gradient(45deg, #b22222, #d4af37);
  color: white;
  text-decoration: none;
  padding: 10px 20px; /* Botón más compacto */
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 15px rgba(178, 34, 34, 0.3);
}

.cta-comprar:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(178, 34, 34, 0.4);
}

.personaliza-card-link {
  text-decoration: none;
}

.personaliza-card {
  background: linear-gradient(135deg, #7a1f23, #a32a2f);
  color: white;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 32px;
}

.personaliza-card h3 {
  font-size: 1.5rem;
  color: #d4af37;
  margin: 0 0 12px 0;
}

.personaliza-card p {
  font-size: 1rem;
  color: #f0f0f0;
  margin-bottom: 24px;
  line-height: 1.6;
}

.cta-personalizar {
  background: #d4af37;
  color: #7a1f23;
  padding: 12px 28px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  display: inline-block;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

@media (min-width: 1024px) {
  .catalogo-header h1 {
    font-size: 3.5rem;
  }
}
</style>
