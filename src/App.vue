<template>
  <nav class="navbar">
    <div class="logo">
      <img :src="logoUrl" alt="Christmas Dreams" />
      <span>christmas dreams <span class="tree">🌲</span></span>
    </div>
    <button class="hamburger" @click="toggleMobileNav" :class="{ 'is-active': isMobileNavOpen }">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <ul class="nav-links" :class="{ 'nav-active': isMobileNavOpen }">
      <li><router-link to="/" @click="closeMobileNav">Inicio</router-link></li>
      <li><router-link to="/catalogo" @click="closeMobileNav">Nuestros Muñecos</router-link></li>
      <li><router-link to="/personaliza" @click="closeMobileNav">Personaliza el Tuyo</router-link></li>
      <li><router-link to="/contacto" @click="closeMobileNav">Contacto</router-link></li>
    </ul>
  </nav>
  <router-view />
  <!-- Overlay para el fondo cuando el menú móvil está abierto -->
  <div v-if="isMobileNavOpen" class="overlay" @click="closeMobileNav"></div>
</template>

<script>
import logoUrl from '@/assets/Logo.png';

export default {
  name: "App",
  data() {
    return {
      logoUrl,
      isMobileNavOpen: false,
    };
  },
  methods: {
    toggleMobileNav() {
      this.isMobileNavOpen = !this.isMobileNavOpen;
    },
    closeMobileNav() {
      this.isMobileNavOpen = false;
    }
  },
};
</script>

<style>
body {
  background: linear-gradient(to bottom, #e6ced0, #ffffff);
  min-height: 100vh;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
}
#app {
  background: transparent;
}
.navbar {
  background: #eaf6ff;
  color: #b22222;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  height: 70px;
  font-family: 'Montserrat', sans-serif;
  border-bottom: 2px solid #b22222;
}
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.3rem;
  font-weight: bold;
}
.logo img {
  width: 40px;
  height: 40px;
}
.tree {
  font-size: 1.2rem;
}
.nav-links {
  list-style: none;
  display: flex;
  gap: 24px;
  margin: 0;
  padding: 0;
}
.nav-links li a {
  color: #b22222;
  text-decoration: none;
  font-weight: 500;
  padding-bottom: 2px;
  border-bottom: 2px solid transparent;
}
.nav-links li a.router-link-exact-active {
  border-bottom: 2px solid #b22222;
}

.hamburger {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001; /* Asegura que esté sobre el menú y el overlay */
}

.hamburger span {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px 0;
  background: #b22222;
  transition: all 0.3s ease-in-out;
}

/* Animación del hamburger a "X" cuando está activo */
.hamburger.is-active span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}
.hamburger.is-active span:nth-child(2) {
  opacity: 0;
}
.hamburger.is-active span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

.overlay {
  display: none; /* Oculto por defecto */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999; /* Debajo del menú, encima del contenido */
}

/* --- Media Query para Navegación Móvil --- */
@media (max-width: 768px) {
  .navbar {
    padding: 0 16px;
  }
  .nav-links {
    position: fixed;
    top: 0;
    right: -100%; /* Empieza fuera de la pantalla */
    width: 70%;
    max-width: 300px;
    height: 100vh;
    background: #f8faff;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    transition: right 0.4s cubic-bezier(0.23, 1, 0.32, 1); /* Transición más suave */
    z-index: 1000;
    box-shadow: -5px 0 15px rgba(0,0,0,0.1);
  }

  .nav-links.nav-active {
    right: 0; /* Se desliza hacia adentro */
  }

  .nav-links li a {
    font-size: 1.2rem;
  }

  .hamburger {
    display: block;
  }

  .overlay {
    display: block; /* Solo se muestra en móvil cuando v-if es true */
  }
}
</style>
