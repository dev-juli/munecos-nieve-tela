<template>
  <div class="personaliza-page">
    <div class="personaliza-container">
      <div class="personaliza-image">
        <img :src="personalizaUrl" alt="Personaliza" />
      </div>
      <div class="personaliza-content">
        <h2>¿Quieres un Muñeco de Nieve Único?</h2>
        <p>Crea tu propio muñeco de nieve artesanal. Elige colores, accesorios y detalles que lo hagan especial.</p>
        <a class="whatsapp" href="https://wa.me/3165442220" target="_blank">¡Personalízalo vía WhatsApp!</a>
      </div>
    </div>
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
.personaliza-page {
  padding: 32px 16px;
}
.personaliza-container {
  display: flex;
  align-items: center;
  gap: 48px;
  max-width: 900px;
  margin: 0 auto;
  background: #7a1f23;
  border-radius: 32px;
  padding: 48px 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}
.personaliza-image {
  flex: 0 0 40%;
}
.personaliza-image img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  display: block;
}
.personaliza-content {
  flex: 1;
  text-align: left;
}
.personaliza-content h2 {
  color: #d4af37;
  font-size: 2.2rem;
  font-family: 'Montserrat', serif;
  margin-top: 0;
  margin-bottom: 16px;
  letter-spacing: 2px;
}
.personaliza-content p {
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

/* Responsive styles */
@media (max-width: 768px) {
  .personaliza-container {
    flex-direction: column;
    gap: 32px;
    padding: 32px 24px;
  }
  .personaliza-content,
  .personaliza-content h2 {
    text-align: center;
  }
}
</style>
