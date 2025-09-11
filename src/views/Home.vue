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
          descripcion: "Nuestro muñeco de nieve original. Ideal para tu decoración y cumpleaños.",
          imagen: muñecoImg,
        },
        {
          titulo: "Sr. Elegante",
          descripcion: "Un caballero de nieve, perfecto para un toque de distinción.",
          imagen: meñecaImg,
        },
        {
          titulo: "Sr. Dulce Nieve",
          descripcion: "Encantador y tierno, ideal para los más pequeños.",
          imagen: dosmuñecosImg,
        },
        {
          titulo: "El Aventurero Congelado",
          descripcion: "Listo para la exploración, con espíritu intrépido y juguetón.",
          imagen: cositasImg,
        },
      ],
    };
  },
};
</script>

<style scoped>
.home {
  padding: 24px 0;
}
.hero {
  position: relative;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 32px;
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
  margin-bottom: 32px;
}
.muñeco-card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 12px #0001;
  padding: 18px;
  width: 210px;
  text-align: center;
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
</style>
