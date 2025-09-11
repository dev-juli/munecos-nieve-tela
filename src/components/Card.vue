<template>
  <div class="muñeco-card">
    <img :src="product.imagen" :alt="product.titulo" />
    <div class="card-content">
      <h3>{{ product.titulo }}</h3>
      <p>{{ product.descripcion }}</p>
      <span class="precio">{{ product.precio }}</span>
      <a :href="whatsappUrl" target="_blank" class="cta">{{ product.boton }}</a>
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
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 15px rgba(212,175,55,0.08);
  width: 260px;
  text-align: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  border: 2px solid #d4af37;
}
.muñeco-card:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 8px 25px rgba(212,175,55,0.18);
}
.muñeco-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}
.card-content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
h3 {
  color: #7a1f23;
  font-size: 1.1rem;
  margin-bottom: 6px;
  font-family: 'Montserrat', serif;
}
p {
  font-size: 0.95rem;
  margin-bottom: 8px;
  flex-grow: 1;
}
.precio {
  font-size: 1.2rem;
  font-weight: bold;
  color: #d4af37;
  margin-bottom: 12px;
}
.cta {
  background: #b22222;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 22px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: background 0.2s;
  align-self: center;
  text-decoration: none;
}
.cta:hover {
  background-color: #c93434;
}
</style>