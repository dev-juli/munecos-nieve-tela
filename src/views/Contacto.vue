<template>
  <div class="contacto-page">
    <div class="contacto-container">
      <div class="contacto-header">
        <h1>Hablemos</h1>
        <p class="subtitulo">
          Estamos aquí para convertir tus ideas en realidad. ¡Contáctanos y creemos juntos algo <span class="highlight">mágico</span>!
        </p>
      </div>
      <div class="contacto-info">
        <div class="info-item">
          <h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" class="icon" stroke="none"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.803 6.166l-1.225 4.485 4.574-1.196zM12 18c-3.313 0-6-2.687-6-6s2.687-6 6-6 6 2.687 6 6-2.687 6-6 6zm0-10c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm3.225 6.225c-.14-.28-.502-.442-.683-.498-.182-.055-1.062-.523-1.228-.58-.165-.056-.285-.087-.405.087-.12.175-.463.58-.568.698-.105.118-.21.132-.39.087-.18-.045-1.252-.462-2.38-1.468-.88-.78-1.48-1.742-1.656-2.04-.175-.3-.018-.462.07-.603.08-.13.175-.213.262-.338.088-.125.118-.213.175-.353.057-.14.028-.263-.018-.353-.045-.09-.405-1.012-.555-1.38-.148-.368-.3-.318-.42-.318h-.42c-.12 0-.3.045-.463.213-.165.168-.63.615-.63 1.5 0 .885.645 1.742 1.44 2.615.8.873 1.853 1.592 3.225 2.198.313.145.564.24.763.312.2.073.54.06.75-.045.21-.105.63-.435.72-.86.09-.425.09-.788.06-.86-.03-.073-.12-.118-.262-.213z"></path></svg>
            WhatsApp
          </h3>
          <p>Para una atención más rápida y personalizada.</p>
          
          <a href="https://wa.me/3165442220" target="_blank" class="cta-contacto"
            >Chatea con nosotros</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contacto",
};
</script>

<style scoped>
.contacto-page {
  background: #1c2a22; /* Verde oscuro, como en Home */
  min-height: 100vh;
  padding: 90px 24px 60px; /* Ajustado para subir más el título */
  font-family: 'Montserrat', sans-serif;
  box-sizing: border-box;
}

.contacto-container {
  color: #fff;
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
}

.contacto-header h1 {
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 2.8rem;
  color: #d4af37; /* Dorado */
}

.contacto-header .subtitulo {
  font-size: 1.1rem;
  color: #e0e0e0;
  max-width: 600px;
  margin: 0 auto 48px;
  line-height: 1.6;
}

.highlight {
  font-style: italic;
  color: #d4af37;
  font-weight: 600;
}

.contacto-info {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px; /* Antes: 32px o 48px */
}

.info-item {
  background: rgba(255, 255, 255, 0.03);
  padding: 32px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: background 0.3s;
}

.info-item:hover {
  background: rgba(255, 255, 255, 0.05);
}

.info-item h3 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 1.8rem;
  color: #d4af37;
  margin: 0 0 12px 0;
  font-family: 'Playfair Display', serif;
}

.icon {
  color: #d4af37;
}

.info-item p {
  margin: 0 0 24px 0;
  color: #ccc;
  line-height: 1.6;
}

.cta-contacto {
  display: inline-block;
  color: #1c2a22;
  background: #d4af37;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  font-family: 'Playfair Display', serif;
  letter-spacing: 0.5px;
  transition: background-color 0.3s, transform 0.2s;
}

.cta-contacto:hover {
  background-color: #c8a430; /* Dorado un poco más oscuro */
  transform: translateY(-2px) scale(1.05);
}

@media (min-width: 768px) {
  .contacto-info {
    /* Ajustamos para centrar la única tarjeta de contacto */
    grid-template-columns: minmax(0, 450px);
    justify-content: center;
  }
}
</style>
