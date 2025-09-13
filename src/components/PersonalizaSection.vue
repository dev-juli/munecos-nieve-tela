<template>
  <section class="personaliza-section">
    <div class="personaliza-container">
      <div class="personaliza-image">
        <img src="@/assets/imagen1.png" alt="Personaliza tu muñeco de nieve" />
      </div>
      <div class="personaliza-content">
        <h2 class="section-title">¿Quieres un Muñeco de Nieve Único?</h2>
        <p>
          Crea tu propio muñeco de nieve artesanal. Elige colores, accesorios y detalles que lo
          hagan especial y reflejen tu estilo.
        </p>
        <a class="whatsapp-cta" href="https://wa.me/3165442220?text=Hola%2C%20quiero%20un%20mu%C3%B1eco%20personalizado.%20Me%20gustar%C3%ADa%20saber%20si%20pueden%20crear%20uno%20basado%20en%20una%20idea%20o%20imagen%20que%20tengo." target="_blank">
          ✨ ¡Personalízalo ahora!
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// Este componente es puramente presentacional.
</script>

<style scoped>
.personaliza-section {
  background: #7a1f23; /* Rojo vino */
  padding: 64px 32px;
  width: 100%;
  box-sizing: border-box;
}

.personaliza-container {
  display: flex;
  align-items: center;
  gap: 48px;
  max-width: 960px;
  margin: 0 auto;
}

.personaliza-image {
  flex: 0 0 40%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.personaliza-image img {
  width: 100%;
  display: block;
  transition: transform 0.4s ease;
}

.personaliza-image:hover img {
  transform: scale(1.05);
}

.personaliza-content {
  flex: 1;
  text-align: left;
  color: #fff;
}

.section-title {
  color: #d4af37; /* Dorado */
  font-size: 2.2rem;
  font-family: 'Montserrat', serif;
  margin-bottom: 16px;
  letter-spacing: 1px;
}

.personaliza-content p {
  font-size: 1.1rem;
  margin-bottom: 32px;
  color: #f0f0f0;
  line-height: 1.7;
}

.whatsapp-cta {
  background: #d4af37;
  color: #7a1f23;
  border: none;
  border-radius: 8px;
  padding: 14px 32px;
  font-size: 1.1rem;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  font-weight: bold;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.2);
  transition: all 0.3s ease;
}

.whatsapp-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(212, 175, 55, 0.3);
  background: #fff;
}

/* Responsive styles */
@media (max-width: 768px) {
  .personaliza-container {
    flex-direction: column;
    gap: 32px;
  }
  .personaliza-content,
  .section-title {
    text-align: center;
  }
}
</style>