<template>
  <div class="card">
    <img v-if="imageUrl" :src="imageUrl" :alt="titulo" class="card-img" />
    <h3 class="card-title">{{ titulo }}</h3>
    <p class="card-desc">{{ descripcion }}</p>
    <p class="card-precio">{{ precio }}</p>
    <button class="card-btn">{{ boton }}</button>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    titulo: String,
    descripcion: String,
    precio: String,
    boton: String,
    imagen: String
  },
  computed: {
    imageUrl() {
      if (!this.imagen) {
        return null;
      }
      // Esto asume que las imágenes están en `src/assets`
      // y este componente está en `src/components`
      try {
        return new URL(`../assets/${this.imagen}`, import.meta.url).href;
      } catch (e) {
        console.error(`No se pudo resolver la imagen: ${this.imagen}`);
        return null;
      }
    }
  }
};
</script>

<style scoped>
.card {
  background: #fff;
  border: 2px solid #e2c97a;
  border-radius: 18px;
  padding: 18px 14px 22px 14px;
  text-align: center;
  width: 240px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  position: relative;
  margin-bottom: 10px;
}
.card-img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 10px;
}
.card-title {
  font-size: 1.15rem;
  color: #b22222;
  margin-bottom: 6px;
  font-weight: bold;
}
.card-desc {
  font-size: 0.98rem;
  color: #666;
  margin-bottom: 10px;
}
.card-precio {
  font-size: 1.08rem;
  color: #b22222;
  font-weight: bold;
  margin-bottom: 14px;
}
.card-btn {
  background-color: #b22222;
  color: white;
  border: none;
  padding: 8px 22px;
  border-radius: 7px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  transition: background 0.2s;
}
.card-btn:hover {
  background-color: #d8ca00;
  color: #b22222;
}
</style>