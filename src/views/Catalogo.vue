<template>
  <div class="catalogo">
    <h2>Nuestros Muñecos</h2>
    <div class="catalogo-lista">
      <div class="muñeco-card" v-for="muñeco in muñecos" :key="muñeco.titulo">
        <img :src="muñeco.imagen" :alt="muñeco.titulo" />
        <h3>{{ muñeco.titulo }}</h3>
        <p>{{ muñeco.descripcion }}</p>
        <span class="precio">{{ muñeco.precio }}</span>
        <button class="cta">{{ muñeco.boton }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import muñecoImg from '@/assets/muñeco.jpg';
import meñecaImg from '@/assets/meñeca vieja.jpg';
import dosmuñecosImg from '@/assets/dosmuñecos.jpg';
import cositasImg from '@/assets/cositas.jpg';

export default {
  name: "Catalogo",
  data() {
    return {
      muñecos: [
        {
          titulo: "El Clásico Nevado",
          descripcion: "Nuestro muñeco de nieve original. Ideal para tu decoración y cumpleaños.",
          precio: "$250.000",
          imagen: muñecoImg,
          boton: "Encargar",
        },
        {
          titulo: "Sr. Elegante",
          descripcion: "Un caballero de nieve, perfecto para un toque de distinción.",
          precio: "$55.00",
          imagen: meñecaImg,
          boton: "Encargar",
        },
        {
          titulo: "Sr. Dulce Nieve",
          descripcion: "Encantador y tierno, ideal para los más pequeños.",
          precio: "$40.00",
          imagen: dosmuñecosImg,
          boton: "Encargar",
        },
        {
          titulo: "El Aventurero Congelado",
          descripcion: "Listo para la exploración, con espíritu intrépido y juguetón.",
          precio: "$48.00",
          imagen: cositasImg,
          boton: "Encargar",
        },
      ],
    };
  },
};
</script>

<style scoped>
.catalogo {
  /* Añadimos padding horizontal para que no se pegue a los bordes en móvil */
  padding: 32px 16px;
  text-align: center;
}
.catalogo-lista {
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
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
  align-self: center; /* Centramos la imagen en el contenedor flex */
}
.muñeco-card h3 {
  color: #b22222;
  font-size: 1.1rem;
  margin-bottom: 6px;
}
.muñeco-card p {
  font-size: 0.95rem;
  margin-bottom: 8px;
  /* Hacemos que la descripción ocupe el espacio sobrante para alinear los botones */
  flex-grow: 1;
}
.precio {
  display: block;
  color: #b22222;
  font-weight: bold;
  margin-bottom: 10px;
}
.cta {
  background: #b22222;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 7px 18px;
  cursor: pointer;
}

/* Media Query para hacer el diseño adaptable a dispositivos móviles */
@media (max-width: 480px) {
  .muñeco-card {
    /* En pantallas pequeñas, la tarjeta ocupa más ancho */
    width: 90%;
    max-width: 340px; /* Evita que la tarjeta sea demasiado ancha */
  }
}
</style>
