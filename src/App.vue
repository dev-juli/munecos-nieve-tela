<template>
  <!-- Header reutilizable -->
  <nav class="navbar" :class="navBarClass">
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
      <li><router-link to="/catalogo" @click="closeMobileNav">Catálogo</router-link></li>
      <li><router-link to="/personaliza" @click="closeMobileNav">Personaliza</router-link></li>
      <li><router-link to="/contacto" @click="closeMobileNav">Contacto</router-link></li>
    </ul>
  </nav>
  <main class="main-content" :class="{ 'content-view': $route.path !== '/' }">
    <router-view @header-theme="onHeaderThemeChange" />
  </main>
  <Footer />
  <transition name="fade">
    <div v-if="isMobileNavOpen" class="overlay" @click="closeMobileNav"></div>
  </transition>
</template>

<script>
import logoUrl from '@/assets/Logo.png';
import Footer from '@/components/Footer.vue';

export default {
  name: "App",
  components: { Footer },
  data() {
    return {
      logoUrl,
      isMobileNavOpen: false,
      headerTheme: 'default',
      isScrolled: false,
    };
  },
  computed: {
    navBarClass() {
      // Solo aplica el tema dinámico en la página de inicio
      if (this.$route.path === '/') {
        if (!this.isScrolled) {
          return 'navbar-transparent';
        }

        if (this.headerTheme === 'default') {
          return 'red-theme';
        }

        return this.headerTheme;
      }
      // En otras páginas, que sea transparente y fijo para una apariencia consistente
      return 'navbar-transparent';
    },
  },
  methods: {
    toggleMobileNav() {
      this.isMobileNavOpen = !this.isMobileNavOpen;
    },
    closeMobileNav() {
      this.isMobileNavOpen = false;
    },
    onHeaderThemeChange(theme) {
      this.headerTheme = theme;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
  },
  watch: {
    '$route'(to) {
      // Resetea el tema si no estamos en la página de inicio
      if (to.path !== '/') {
        this.headerTheme = 'default';
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll(); // Llama una vez al montar para el estado inicial
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style>
body {
  background: #1c2a22; /* Fondo verde oscuro para toda la aplicación */
  min-height: 100vh;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
}
.main-content {
  flex: 1;
}
.content-view {
  padding-top: 70px; /* Evita que el contenido se oculte detrás del header fijo */
}
#app {
  background: transparent;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.navbar {
  background: #ffffff;
  color: #b22222;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  height: 70px;
  font-family: 'Montserrat', sans-serif;
  border-bottom: 2px solid #b22222;
  position: sticky;
  top: 0;
  z-index: 100;
  box-sizing: border-box; /* Asegura que el padding se incluya en el ancho total */
  transition: background-color 0.4s ease, border-color 0.4s ease;
}
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.3rem;
  font-weight: bold;
}
.logo span {
  transition: color 0.4s ease;
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
  transition: color 0.4s ease, border-color 0.4s ease;
}
.nav-links li a.router-link-exact-active {
  border-bottom: 2px solid #b22222;
}

.hamburger {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px; /* Aumentar el área de toque para que sea más fácil de presionar */
  z-index: 1001;
}
.hamburger span {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px 0;
  border-radius: 2px; /* Bordes más suaves para un look más moderno */
  background: #b22222;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, background-color 0.4s ease;
}
/* Animación del hamburger a "X" cuando está activo */
.hamburger.is-active span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}
.hamburger.is-active span:nth-child(2) {
  transform: scaleX(0); /* La barra del medio se desvanece encogiéndose */
}
.hamburger.is-active span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
/* Transición para el overlay */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
/* --- Media Query para Navegación Móvil --- */
@media (max-width: 1024px) {
  .navbar {
    padding: 0 16px;
  }
  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    max-width: 300px;
    height: 100vh;
    background: #1c2a22; /* Fondo oscuro para consistencia */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    transition: right 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    z-index: 1000;
    box-shadow: -5px 0 25px rgba(0,0,0,0.2);
  }
  .nav-links.nav-active {
    right: 0;
  }
  .nav-links li a {
    font-size: 1.2rem;
    color: #d4af37; /* Dorado para contraste */
  }
  .hamburger {
    display: block;
  }
}

/* --- Tema Transparente para el inicio --- */
.navbar.navbar-transparent {
  /* Se posiciona sobre el hero y es completamente transparente */
  position: fixed;
  width: 100%;
  background: transparent;
  border-bottom-color: transparent;
}

.navbar.navbar-transparent .logo span,
.navbar.navbar-transparent .nav-links li a {
  color: #d4af37; /* Dorado para contraste sobre la imagen oscura */
}
.navbar.navbar-transparent .hamburger span {
  background-color: #d4af37; /* Dorado para contraste sobre la imagen oscura */
}

.navbar.navbar-transparent .nav-links li a.router-link-exact-active {
  border-bottom-color: transparent;
}

/* En móvil, el borde activo también debe ser dorado */
@media (max-width: 1024px) {
  .nav-links li a.router-link-exact-active {
    border-bottom-color: transparent;
  }
}

/* --- Temas dinámicos para el Header --- */
.navbar.red-theme,
.navbar.green-theme {
  border-bottom-color: transparent;
}

.navbar.red-theme {
  background-color: #7a1f23; /* rojo vino */
}

.navbar.green-theme {
  background-color: #1c2a22; /* verde oscuro */
}

/* Color de texto para temas dinámicos */
.navbar.red-theme .logo span,
.navbar.red-theme .nav-links li a,
.navbar.green-theme .logo span,
.navbar.green-theme .nav-links li a {
  color: #d4af37;
}

.navbar.red-theme .hamburger span,
.navbar.green-theme .hamburger span {
  background-color: #d4af37;
}

/* Color del borde inferior del enlace activo para temas dinámicos */
.navbar.red-theme .nav-links li a.router-link-exact-active,
.navbar.green-theme .nav-links li a.router-link-exact-active {
  border-bottom-color: transparent;
}

/* Cuando el menú está abierto, la X del hamburger es blanca para contrastar */
.navbar.nav-menu-open .hamburger span {
  background-color: #fff;
}
</style>
