<template>
  <nav class="navbar">
    <router-link to="/" class="logo">
      <img :src="logoUrl" alt="Christmas Dreams Logo" />
      <h1>Christmas Dreams</h1>
    </router-link>
    <button
      ref="hamburgerButton"
      class="hamburger"
      @click="toggleMobileNav"
      :class="{ 'is-active': isMobileNavOpen }"
      :aria-expanded="isMobileNavOpen"
      aria-controls="mobile-nav-menu"
      :aria-label="isMobileNavOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
    <ul
      id="mobile-nav-menu"
      ref="mobileNavMenu"
      class="nav-links"
      :class="{ 'nav-active': isMobileNavOpen }"
      @keydown="trapFocus"
    >
      <li><router-link to="/" @click="closeMobileNav">Inicio</router-link></li>
      <li><router-link to="/catalogo" @click="closeMobileNav">Nuestros Muñecos</router-link></li>
      <li><router-link to="/personaliza" @click="closeMobileNav">Personaliza el Tuyo</router-link></li>
      <li><router-link to="/contacto" @click="closeMobileNav">Contacto</router-link></li>
    </ul>
  </nav>
  <!-- Overlay para el fondo cuando el menú móvil está abierto -->
  <div v-if="isMobileNavOpen" class="overlay" @click="closeMobileNav"></div>
</template>

<script setup>
import { ref, watch, nextTick, onMounted, onUnmounted } from 'vue';
import logoUrl from '@/assets/Logo.png';

const isMobileNavOpen = ref(false);
const hamburgerButton = ref(null);
const mobileNavMenu = ref(null);

const toggleMobileNav = () => {
  isMobileNavOpen.value = !isMobileNavOpen.value;
};

const closeMobileNav = () => {
  isMobileNavOpen.value = false;
};

const handleEsc = (event) => {
  if (isMobileNavOpen.value && event.key === 'Escape') {
    closeMobileNav();
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleEsc);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleEsc);
});

watch(isMobileNavOpen, (isOpen) => {
  if (isOpen) {
    // Cuando el menú se abre, movemos el foco al primer enlace del menú.
    nextTick(() => {
      mobileNavMenu.value?.querySelector('a')?.focus();
    });
  } else {
    // Cuando el menú se cierra, devolvemos el foco al botón que lo abrió.
    hamburgerButton.value?.focus();
  }
});

const trapFocus = (event) => {
  if (event.key !== 'Tab' || !mobileNavMenu.value) return;

  const focusableElements = Array.from(mobileNavMenu.value.querySelectorAll('a'));
  if (focusableElements.length === 0) return;

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (event.shiftKey) {
    // Si se presiona Shift + Tab en el primer elemento, mover el foco al último.
    if (document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    }
  } else {
    // Si se presiona Tab en el último elemento, mover el foco al primero.
    if (document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }
};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 40px;
  font-family: 'Montserrat', sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
}
.logo {
  display: flex;
  align-items: center;
  gap: 15px;
  text-decoration: none;
}
.logo img {
  height: 60px;
  width: 60px;
}
.logo h1 {
  margin: 0;
  font-size: 1.2rem;
  color: #ffe066;
  font-weight: bold;
}
.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}
.nav-links li :deep(a) {
  color: white;
  text-decoration: none;
  font-weight: bold;
  position: relative; /* Para posicionar el pseudo-elemento */
  padding-bottom: 5px; /* Espacio para la línea */
  transition: color 0.3s;
}

.nav-links li :deep(a:hover),
.nav-links li :deep(a.router-link-exact-active) {
  color: #ffe066;
}

/* Línea animada debajo del enlace */
.nav-links li :deep(a)::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #ffe066;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease-out;
}

.nav-links li :deep(a:hover)::after,
.nav-links li :deep(a.router-link-exact-active)::after {
  transform: scaleX(1);
  transform-origin: bottom left;
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
  background-color: white;
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
    padding: 15px 20px;
  }
  .nav-links {
    position: fixed;
    top: 0;
    right: -100%; /* Empieza fuera de la pantalla */
    width: 70%;
    max-width: 300px;
    height: 100vh;
    background: rgba(20, 20, 20, 0.95);
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

  .nav-links li :deep(a) {
    font-size: 1.2rem;
    color: #fff;
  }

  .nav-links li :deep(a:hover),
  .nav-links li :deep(a.router-link-exact-active) {
    color: #d4af37;
  }

  .hamburger {
    display: block;
  }
}
</style>