<template>
  <nav class="navbar">
    <div class="logo">
      <img :src="logoUrl" alt="Christmas Dreams" />
      <span>christmas dreams <span class="tree">🌲</span></span>
    </div>
    <ul class="nav-links">
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/catalogo">Nuestros Muñecos</router-link></li>
      <li><router-link to="/personaliza">Personaliza el Tuyo</router-link></li>
      <li><router-link to="/contacto">Contacto</router-link></li>
    </ul>
  </nav>
  <router-view />
</template>

<script>
import logoUrl from '@/assets/Logo.png';

export default {
  name: "App",
  data() {
    return { logoUrl };
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
  padding: 0 32px;
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
</style>
