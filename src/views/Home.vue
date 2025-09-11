<template>
  <div>
    <!-- Sección Hero con fondo rojo vino -->
    <section class="hero-section">
      <div class="hero-content-wrapper">
        <h1 class="hero-title">
          hacemos las cosas<br />
          con amor
        </h1>
        <p class="hero-desc">Cada muñeco es una obra de arte, hecho a mano con amor y dedicación.</p>
        <router-link to="/catalogo" class="cta">Explora Nuestra Colección</router-link>
      </div>
    </section>

    <!-- Sección catálogo con fondo verde oscuro -->
    <section class="catalogo-preview" ref="catalogoSection" data-section-id="catalogo">
      <h2 class="section-title verde">Catálogo</h2>
      <div class="catalogo-cards">
        <Card v-for="muñeco in muñecos" :key="muñeco.titulo" :product="muñeco" />
      </div>
    </section>

    <!-- Sección personaliza con fondo rojo vino -->
    <section class="personaliza-section" ref="personalizaSection" data-section-id="personaliza">
      <div class="personaliza-container">
        <div class="personaliza-image">
          <img src="@/assets/imagen1.jpg" alt="Personaliza" />
        </div>
        <div class="personaliza-content">
          <h2 class="section-title rojo">¿Quieres un Muñeco de Nieve Único?</h2>
          <p>Crea tu propio muñeco de nieve artesanal. Elige colores, accesorios y detalles que lo hagan especial.</p>
          <a class="whatsapp" href="https://wa.me/3165442220" target="_blank">¡Personalízalo vía WhatsApp!</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { products } from './products.js';
import Card from '@/components/Card.vue';

export default {
  name: "Home",
  components: { Card },
  data() {
    return {
      muñecos: products,
      observer: null,
      intersectingSections: new Set(),
    };
  },
  watch: {
    intersectingSections: {
      handler(newSet) {
        // La sección 'personaliza' está más abajo, le damos prioridad si ambas están visibles.
        if (newSet.has('personaliza')) {
          this.$emit('header-theme', 'green-theme');
        } else if (newSet.has('catalogo')) {
          this.$emit('header-theme', 'red-theme');
        } else {
          this.$emit('header-theme', 'default');
        }
      },
      deep: true,
    },
  },
  mounted() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.dataset.sectionId;
          if (entry.isIntersecting) {
            this.intersectingSections.add(sectionId);
          } else {
            this.intersectingSections.delete(sectionId);
          }
        });
      },
      { threshold: 0.3 } // Se activa cuando el 30% de la sección es visible
    );

    if (this.$refs.catalogoSection) this.observer.observe(this.$refs.catalogoSection);
    if (this.$refs.personalizaSection) this.observer.observe(this.$refs.personalizaSection);
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
    // Resetea el tema al salir de la página de inicio
    this.$emit('header-theme', 'default');
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
  background: rgba(0, 0, 0, 0.4); /* Overlay oscuro para legibilidad */
  z-index: 1;
}
.hero-title {
  font-size: 3.2rem;
  font-weight: bold;
  color: #d4af37;
  margin-bottom: 18px;
  font-family: 'Montserrat', serif;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
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
  border-radius: 32px;
  margin-top: 0; /* Ya no se superpone con el hero */
  box-shadow: 0 4px 24px #0002;
}
.section-title.verde {
  color: #d4af37;
  font-size: 2rem;
  font-family: 'Montserrat', serif;
  margin-bottom: 32px;
  text-align: center;
  letter-spacing: 2px;
}
.catalogo-cards {
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Sección personaliza rojo vino */
.personaliza-section {
  background: #7a1f23;
  border-radius: 32px;
  padding: 48px 32px;
  box-shadow: 0 2px 12px #0001;
  margin: 48px 0;
}
.personaliza-container {
  display: flex;
  align-items: center;
  gap: 48px;
  max-width: 900px;
  margin: 0 auto;
}
.personaliza-image {
  flex: 0 0 40%;
}
.personaliza-image img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}
.personaliza-content {
  flex: 1;
  text-align: left;
}
.section-title.rojo {
  color: #d4af37;
  font-size: 2.2rem;
  font-family: 'Montserrat', serif;
  margin-bottom: 16px;
  letter-spacing: 2px;
  text-align: left;
}
.personaliza-section p {
  font-size: 1.1rem;
  margin-bottom: 24px;
  color: #fff;
}
.whatsapp {
  background: linear-gradient(90deg, #d4af37 60%, #ff9800 100%);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 12px 28px;
  font-size: 1.1rem;
  cursor: pointer;
  margin-bottom: 12px;
  text-decoration: none;
  display: inline-block;
  font-weight: bold;
  box-shadow: 0 2px 8px #d4af3722;
  transition: background 0.2s;
}
.whatsapp:hover {
  background: #d4af37;
  color: #7a1f23;
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
  .personaliza-container {
    flex-direction: column;
    gap: 32px;
  }
  .personaliza-content,
  .personaliza-content .section-title.rojo {
    text-align: center;
  }
}
@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  .catalogo-preview {
    padding: 32px 16px;
    border-radius: 12px;
  }
  .personaliza-section {
    padding: 32px 16px;
    border-radius: 24px;
  }
}
</style>
