<template>
  <div class="muñeco-card">
    <div
      class="card-img"
      :style="{ backgroundImage: `url(${product.imagen})` }"
      role="img"
      :aria-label="product.titulo"
    ></div>
    <div class="card-overlay"></div>
    <div class="card-content">
      <div class="rating" v-if="product.rating">
        <span v-for="n in product.rating" :key="n">⭐</span>
      </div>
      <h3>{{ product.titulo }}</h3>
      <div class="card-footer">
        <div class="precio-wrapper">
          <span class="precio-anterior" v-if="product.precioAnterior">{{ product.precioAnterior }}</span>
          <span class="precio">{{ product.precio }}</span>
        </div>
        <a :href="whatsappUrl" target="_blank" class="cta">¡Lo quiero!</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    whatsappUrl() {
      const numero = '3165442220'; // Tu número de WhatsApp
      const mensaje = `Hola, ¡lo quiero! Me interesa el muñeco: ${this.product.titulo}`;
      return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    },
  },
};
</script>

<style scoped>
.muñeco-card {
  position: relative;
  width: 350px; /* Ancho consistente con el catálogo */
  aspect-ratio: 1 / 1; /* Imagen cuadrada como en el catálogo */
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  color: #fff;
}

.muñeco-card:hover {
  transform: scale(1.05);
}

.card-img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.4s ease;
}

.muñeco-card:hover .card-img {
  transform: scale(1.1); /* Zoom a la imagen al pasar el mouse */
}

.card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70%;
  background: linear-gradient(to top, rgba(28, 42, 34, 0.95) 20%, transparent);
  pointer-events: none; /* Para que no interfiera con el hover de la card */
}

.card-content {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
}

.rating {
  margin-bottom: 8px;
  font-size: 14px;
  text-shadow: 0 1px 2px rgba(0,0,0,0.7);
}

h3 {
  font-family: 'Montserrat', serif;
  font-size: 1.4rem;
  font-weight: 600;
  color: #fff;
  text-shadow: 0 2px 5px rgba(0,0,0,0.5);
  margin: 0 0 16px 0; /* Aumentamos margen para dar espacio al rating */
  flex-grow: 1; /* Empuja el footer hacia abajo */
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.precio-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.2;
}

.precio-anterior {
  font-size: 0.9rem;
  color: #ccc;
  text-decoration: line-through;
  opacity: 0.8;
}

.precio {
  font-size: 1.3rem;
  font-weight: 700;
  color: #d4af37; /* Dorado */
}

.cta {
  background: #d4af37;
  color: #1c2a22;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.2s;
  white-space: nowrap; /* Evita que el texto se rompa */
}

.cta:hover {
  background-color: #ffe066;
  transform: scale(1.05);
}
</style>