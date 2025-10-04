<template>
  <div>
    <!-- Sección Hero con fondo rojo vino -->
    <section class="hero-section">
      <div class="hero-content-wrapper">
        <h1 class="hero-title">
          Donde cada hilo<br />
          cuenta una historia
        </h1>
        <p class="hero-desc">Descubre la magia de la Navidad con creaciones únicas, hechas a mano con amor y dedicación.</p>
        <router-link to="/catalogo" class="cta">Explora Nuestra Colección</router-link>
      </div>
    </section>

    <!-- Sección catálogo con fondo verde oscuro -->
    <section class="catalogo-preview">
      <h2 class="section-title verde">Nuestras Creaciones Destacadas</h2>
      <div class="catalogo-cards">
        <Card
          v-for="muñeco in featuredProducts"
          :key="muñeco.titulo"
          :product="muñeco"
        />
      </div>
      <div class="cta-container">
        <router-link to="/catalogo" class="cta-secondary">Ver Catálogo Completo</router-link>
      </div>
    </section>

  </div>
</template>

<script>
import { products } from './products.js';
import Card from '../components/Card.vue';

export default {
  name: "Home",
  components: { Card },
  data() {
    return {
      // Ampliamos la selección para que el carrusel tenga más elementos
      featuredProducts: products.filter((p) => p.featured),
    };
  },
};
</script>

<style scoped>
.hero-section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 24px;
  text-align: center;
  background-image: url('@/assets/fondo.jpg');
  background-size: cover;
  background-position: center;
  color: #fff;
}
.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Degradado sutil con el color de la marca para un look más cálido */
  background: linear-gradient(180deg, rgba(45, 15, 17, 0.6) 0%, rgba(122, 31, 35, 0.2) 50%, rgba(45, 15, 17, 0.6) 100%);
  z-index: 1;
}
.hero-title {
  font-size: 3.2rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 18px;
  font-family: 'Montserrat', serif;
  /* Sombra de texto ligeramente más fuerte para mejorar la legibilidad */
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.6);
}
.hero-desc {
  font-size: 1.2rem;
  margin-bottom: 24px;
  color: #fff;
}
.cta {
  background: linear-gradient(90deg, #d4af37 60%, #b22222 100%);
  color: #fff;
  border: none;
  padding: 12px 32px;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 18px;
  display: inline-block;
  box-shadow: 0 2px 8px #d4af3722;
  transition: background 0.2s;
}
.cta:hover {
  background: #d4af37;
  color: #7a1f23;
}
.hero-content-wrapper {
  position: relative;
  z-index: 2;
  max-width: 800px;
}

/* Sección catálogo verde oscuro */
.catalogo-preview {
  background: #1c2a22;
  padding: 48px 0 32px 0;
  margin-top: 0; /* Ya no se superpone con el hero */
}
.section-title.verde {
  color: #d4af37;
  font-size: 2rem;
  font-family: 'Montserrat', serif;
  margin: 0 auto 32px;
  max-width: 800px;
  text-align: center;;
}
.catalogo-cards {
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
}

.cta-container {
  text-align: center;
  margin-top: 48px;
}

.cta-secondary {
  background: transparent;
  color: #d4af37;
  border: 2px solid #d4af37;
  padding: 12px 32px;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s, color 0.3s;
}

.cta-secondary:hover {
  background-color: #d4af37;
  color: #1c2a22;
}

/* Responsividad */
@media (max-width: 1024px) {
  .hero-section {
    height: 80vh; /* Reducir altura en pantallas más pequeñas */
  }
  .catalogo-cards {
    flex-direction: column;
    align-items: center;
  }
}
@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  .catalogo-preview {
    padding: 32px 16px;
  }
}
</style>
