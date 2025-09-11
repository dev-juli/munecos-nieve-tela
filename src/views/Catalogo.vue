<template>
  <div class="catalogo">
    <h2>Catálogo</h2>
    <div class="catalogo-lista">
      <Card v-for="muñeco in muñecos" :key="muñeco.titulo" :product="muñeco" />
    </div>
  </div>
</template>

<script>
import { products } from './products.js';
import Card from '@/components/Card.vue';

export default {
  name: "Catalogo",
  components: { Card },
  data() {
    return {
      muñecos: products,
    };
  },
};
</script>

<style scoped>
.catalogo {
  /* Añadimos padding para que no se pegue a los bordes y tenga espacio arriba/abajo */
  padding: 32px 16px;
  text-align: center;
}
.catalogo h2 {
  font-size: 2.2rem;
  color: #d4af37; /* Dorado para mejor contraste sobre fondo oscuro */
  margin-bottom: 32px;
  font-family: 'Montserrat', serif;
}
.catalogo-lista {
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
}
/* Media Query para ajustar el título en pantallas pequeñas */
@media (max-width: 480px) {
  .catalogo h2 {
    font-size: 1.8rem;
  }
}
</style>
