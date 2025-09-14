<template>
  <div class="catalogo-container">
    <div class="catalogo-header">
      <h1>Nuestro Arte Hecho a Mano</h1>
      <p class="subtitulo">
        Cada muñeco es una pieza única, creada con dedicación y cariño para llevar la magia de la
        Navidad a tu hogar.
      </p>
    </div>
    <!-- Sección de Valor Agregado -->
    <div class="valor-agregado-container">
      <div class="valor-item">✔️ Hecho a mano en Colombia</div>
      <div class="valor-item">✔️ Envíos a todo el país</div>
      <div class="valor-item">✔️ Calidad premium garantizada</div>
    </div>

    <div class="catalogo-showcase">
      <section
        class="producto-item"
        v-for="muñeco in muñecos"
        :key="muñeco.titulo"
        @click="openProductModal(muñeco)"
      >
        <div class="producto-imagen">
          <div
            class="imagen-fondo"
            :style="{ backgroundImage: `url(${muñeco.imagen})` }"
            role="img"
            :aria-label="muñeco.titulo"
          ></div>
        </div>
        <div class="producto-contenido">
          <h2>{{ muñeco.titulo }}</h2>
          <div class="precio-container">
            <span class="precio-valor">{{ muñeco.precio }}</span>
          </div>
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

    <!-- Modal de Detalle del Producto -->
    <ProductDetailModal
      :is-open="isModalOpen"
      :product="selectedProduct"
      @close="closeProductModal"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { products } from './products.js';
import ProductDetailModal from '../components/ProductDetailModal.vue';

const muñecos = ref(products);

// State for the modal
const selectedProduct = ref(null);
const isModalOpen = ref(false);

const openProductModal = (product) => {
  selectedProduct.value = product;
  isModalOpen.value = true;
};

const closeProductModal = () => {
  isModalOpen.value = false;
  // Optional: delay clearing product to allow for fade-out animation
  setTimeout(() => {
    selectedProduct.value = null;
  }, 300);
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

.valor-agregado-container {
  display: flex;
  justify-content: center;
  gap: 16px 32px;
  flex-wrap: wrap;
  max-width: 900px;
  margin: 0 auto 48px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  color: #e0e0e0;
}

.valor-item {
  font-size: 0.9rem;
  font-weight: 500;
}

.catalogo-showcase {
  display: grid;
  /* Ajustado para tarjetas más anchas */
  grid-template-columns: repeat(auto-fill, 350px); /* Ancho fijo para tarjetas consistentes */
  gap: 32px;
  justify-content: center;
  max-width: 1400px; /* Aumentamos el ancho máximo */
  margin: 0 auto;
}

.producto-item {
  display: flex;
  flex-direction: column; /* Cambiamos a un diseño vertical, más amigable */
  background: rgba(255, 255, 255, 0.03); /* Fondo oscuro sutil */
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1); /* Borde para definir la card */
  overflow: hidden;
  transition: background 0.3s, transform 0.3s;
  cursor: pointer;
}

.producto-item:hover {
  background: rgba(255, 255, 255, 0.05); /* Un poco más claro al pasar el mouse */
  transform: translateY(-5px);
}

.producto-imagen {
  width: 100%;
  aspect-ratio: 1 / 1; /* Mantiene la imagen cuadrada */
  justify-content: center;
  position: relative; /* Para posicionar el adorno de Navidad */
}

/* Adorno de moño navideño en la esquina de la imagen */
.producto-imagen::after {
  content: '';
  position: absolute;
  bottom: 15px; /* Ajuste de posición del moño */
  right: 15px;
  width: 50px; /* Un poco más grande */
  height: 50px; /* Un poco más grande */
  /* Nuevo SVG de moño más detallado y bonito */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cg transform='translate(50,50) rotate(-45)'%3E%3Cpath d='M -30 -15 C -50 -30, -50 30, -30 15 L 0 0 Z' fill='%23b22222' stroke='%23d4af37' stroke-width='3'/%3E%3Cpath d='M 30 -15 C 50 -30, 50 30, 30 15 L 0 0 Z' fill='%23b22222' stroke='%23d4af37' stroke-width='3'/%3E%3C/g%3E%3Ccircle cx='50' cy='50' r='10' fill='%23d4af37' stroke='%23b22222' stroke-width='2'/%3E%3Cpath d='M 40 65 L 30 90 L 45 65 Z' fill='%23b22222' stroke='%23d4af37' stroke-width='2'/%3E%3Cpath d='M 60 65 L 70 90 L 55 65 Z' fill='%23b22222' stroke='%23d4af37' stroke-width='2'/%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
  pointer-events: none; /* Para que no interfiera con el mouse */
  filter: drop-shadow(0 2px 2px rgba(0,0,0,0.4)); /* Sombra para destacar */
  transform: rotate(15deg); /* Ligera rotación para un look más natural */
}

.imagen-fondo {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.producto-contenido {
  padding: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  text-align: center;
  justify-content: center;
}

.producto-contenido h2 {
  color: #d4af37; /* Color dorado de la marca */
  margin: 0 0 8px 0;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.2;
  /* Asegura espacio para 2 líneas y centra el texto para consistencia */
  min-height: 3.6rem; /* 1.5rem (font-size) * 1.2 (line-height) * 2 (lines) */
  display: flex;
  align-items: center;
  justify-content: center;
}

.precio-container {
  display: flex;
  align-items: baseline;
  justify-content: center;
  padding-top: 8px;
  margin: 0;
}

.precio-valor {
  color: #ffffff; /* Blanco para destacar el precio */
  font-weight: 500;
  margin: 0;
  font-size: 1.6rem;
}

.personaliza-card-link {
  text-decoration: none;
}

.personaliza-card {
  flex-direction: column; /* Mantiene la dirección vertical para esta card específica */
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

/* --- Responsividad para las nuevas cards --- */
@media (max-width: 680px) {
  .catalogo-showcase {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 1024px) {
  .catalogo-header h1 {
    font-size: 3.5rem;
  }
}
</style>
