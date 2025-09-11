<template>
  <div class="home">
    <div class="hero">
      <img :src="heroBgUrl" alt="Navidad" class="hero-bg" />
      <div class="hero-content">
        <h1>hacemos las cosas<br>con amor</h1>
        <p>Cada muñeco es una obra de arte, hecho a mano con amor y dedicación.</p>
        <router-link to="/catalogo" class="cta">Explora Nuestra Colección</router-link>
      </div>
    </div>
    <div class="catalogo-preview">
      <div
        class="muñeco-card"
        v-for="muñeco in muñecos"
        :key="muñeco.titulo"
      >
        <img :src="muñeco.imagen" :alt="muñeco.titulo" />
        <h3>{{ muñeco.titulo }}</h3>
        <p>{{ muñeco.descripcion }}</p>
        <span class="precio">{{ muñeco.precio }}</span>
        <button class="cta">{{ muñeco.boton }}</button>
      </div>
    </div>
    <div class="personaliza-section">
      <h2>¿Quieres un Muñeco de Nieve Único?</h2>
      <p>Crea tu propio muñeco de nieve artesanal. Elige colores, accesorios y detalles que lo hagan especial.</p>
      <a class="whatsapp" href="https://wa.me/3165442220" target="_blank">¡Personalízalo vía WhatsApp!</a>
          <img :src="personalizaUrl" alt="Personaliza" />
    </div>
  </div>
</template>

<script>
import heroBgUrl from '@/assets/fondo.jpg';
import personalizaUrl from '@/assets/imagen1.jpg';
import muñecoImg from '@/assets/muñeco.jpg';
import meñecaImg from '@/assets/meñeca vieja.jpg';
import dosmuñecosImg from '@/assets/dosmuñecos.jpg';
import cositasImg from '@/assets/cositas.jpg';

export default {
  name: "Home",
  data() {
    return {
      heroBgUrl,
      personalizaUrl,
      muñecos: [
        {
          titulo: "El Clásico Nevado",
          descripcion: "Nuestro muñeco de nieve original. Ideal para tu decoración de Navidad.",
          imagen: muñecoImg,
        },
        {
          titulo: "Sra. Elegante",
          descripcion: "Una dama de nieve, perfecta para un toque de distinción.",
          imagen: meñecaImg,
        },
        {
          titulo: "Pareja de nieve",
          descripcion: "Encantadores y tiernos, ideal para las decoraciones.",
          imagen: dosmuñecosImg,
        },
      ],
    };
  },
};
</script>

<style scoped>
.home {
  /* Añadimos padding horizontal para que no se pegue a los bordes en móvil */
  padding: 24px 16px;
}
.hero {
  position: relative;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 32px;
  /* Truco para que el hero ocupe todo el ancho a pesar del padding del padre */
  margin-left: -16px;
  margin-right: -16px;
}
.hero-bg {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
}
.hero-content {
  position: absolute;
  top: 30px;
  left: 40px;
  color: #b22222;
  text-shadow: 0 2px 8px #fff;
}
.hero-content h1 {
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 12px;
}
.hero-content p {
  font-size: 1.1rem;
  margin-bottom: 18px;
}
.cta {
  background: #b22222;
  color: #fff;
  border: none;
  padding: 10px 28px;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
}
.catalogo-preview {
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap; /* Permitimos que las tarjetas pasen a la siguiente línea */
  margin-bottom: 32px;
}
.muñeco-card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 12px #0001;
  padding: 18px;
  width: 210px;
  text-align: center;
  /* Usamos flexbox para alinear el contenido interno verticalmente */
  display: flex;
  flex-direction: column;
}
.muñeco-card img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  margin-bottom: 10px;
}
.muñeco-card h3 {
  color: #b22222;
  font-size: 1.1rem;
  margin-bottom: 6px;
}
.muñeco-card p {
  font-size: 0.95rem;
  margin-bottom: 8px;
  /* Hacemos que la descripción ocupe el espacio sobrante */
  flex-grow: 1;
}
.precio {
  display: block;
  color: #b22222;
  font-weight: bold;
  margin-bottom: 10px;
}
.muñeco-card .cta {
  background: #b22222;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 7px 18px;
  cursor: pointer;
}
.personaliza-section {
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  box-shadow: 0 2px 12px #0001;
}
.personaliza-section h2 {
  color: #b22222;
  font-size: 1.3rem;
  margin-bottom: 10px;
}
.personaliza-section p {
  font-size: 1rem;
  margin-bottom: 14px;
}
.whatsapp {
  background: #ff9800;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 22px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 12px;
  text-decoration: none;
  display: inline-block;
}
.personaliza-section img {
  width: 320px;
  margin-top: 14px;
  border-radius: 8px;
}

/* --- Media Queries para Responsividad --- */

@media (max-width: 768px) {
  .hero-content {
    left: 30px;
  }
  .hero-content h1 {
    font-size: 2.2rem;
  }
  .hero-content p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .hero {
    height: 250px;
  }
  .hero-bg {
    height: 100%; /* La imagen de fondo ocupa toda la altura del contenedor */
  }
  .hero-content {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* Centramos el contenido perfectamente */
    width: 90%;
    text-align: center;
  }
  .muñeco-card {
    /* En pantallas pequeñas, la tarjeta ocupa más ancho */
    width: 90%;
    max-width: 340px;
  }
  .personaliza-section img {
    /* La imagen se ajusta al contenedor para evitar desbordamiento */
    width: 100%;
  }
}
</style>
