<template>
  <div class="personaliza">
    <h2>Personaliza tu Muñeco</h2>
    <p>Elige colores, accesorios y detalles para crear tu muñeco único.</p>
    <img :src="personalizaUrl" alt="Personaliza" />
    <a class="whatsapp" href="https://wa.me/3165442220" target="_blank">¡Personalízalo vía WhatsApp!</a>
  </div>
</template>

<script>
import personalizaUrl from '@/assets/imagen1.jpg';

export default {
  name: "Personaliza",
  data() {
    return { personalizaUrl };
  },
};
</script>

<style scoped>
.personaliza {
  background: #fff;
  border-radius: 12px;
  padding: 32px;
  text-align: center;
  box-shadow: 0 2px 12px #0001;
  margin: 32px auto;
  max-width: 500px;
}
.personaliza img {
  width: 320px;
  margin-top: 14px;
  border-radius: 8px;
}
.whatsapp {
  background: #ff9800;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 22px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 18px;
  text-decoration: none;
  display: inline-block;
}
</style>
