<template>
  <div v-if="isOpen && product" class="modal-overlay" @click.self="closeModal">
    <div class="modal-container" role="dialog" aria-modal="true" :aria-labelledby="`modal-title-${product.titulo}`">
      <button class="modal-close-btn" @click="closeModal" aria-label="Cerrar">×</button>
      <div class="modal-content">
        <div class="modal-gallery">
          <div class="main-image">
            <img :src="activeImage" :alt="product.titulo" />
          </div>
          <div class="thumbnail-container" v-if="product.galeria && product.galeria.length > 1">
            <img
              v-for="(img, index) in product.galeria"
              :key="index"
              :src="img"
              :alt="`${product.titulo} - vista ${index + 1}`"
              :class="{ active: img === activeImage }"
              @click="setActiveImage(img)"
              @keyup.enter="setActiveImage(img)"
              tabindex="0"
            />
          </div>
        </div>
        <div class="modal-details">
          <div>
            <span class="tag-hecho-mano">Hecho a mano</span>
            <h1 :id="`modal-title-${product.titulo}`">{{ product.titulo }}</h1>
            <div class="rating" v-if="product.rating">
              <span v-for="n in product.rating" :key="n">⭐</span>
            </div>
            <span class="tag-producto" v-if="product.tag">{{ product.tag }}</span>
            <div class="stock-info" v-if="product.stock">
              <p>¡Solo quedan <strong>{{ product.stock }}</strong> disponibles!</p>
            </div>
            <p class="descripcion-completa">{{ product.descripcion }}</p>
          </div>

          <div class="modal-footer">
            <div class="precio-container">
              <span class="precio-anterior" v-if="product.precioAnterior">{{ product.precioAnterior }}</span>
              <span class="precio-valor">{{ product.precio }}</span>
            </div>

            <a :href="whatsappLink" class="cta-comprar" target="_blank" @click="closeModal">
              ✨ ¡Quiero mi muñeco ahora!
            </a>
            <span class="garantia-texto">✓ Garantía de satisfacción y envío seguro</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  product: {
    type: Object,
    default: null,
  },
});

const emit = defineEmits(['close']);

const activeImage = ref('');

watch(() => props.product, (newProduct) => {
  if (newProduct) {
    activeImage.value = newProduct.imagen;
  }
});

const setActiveImage = (image) => {
  activeImage.value = image;
};

const closeModal = () => {
  emit('close');
};

const whatsappLink = computed(() => {
  if (!props.product) return '#';
  const numero = '3165442220';
  const mensaje = `¡Hola! Estoy interesado en el muñeco "${props.product.titulo}". ¿Podrían darme más información?`;
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  padding: 20px;
  box-sizing: border-box;
}

.modal-container {
  background: #1c2a22;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

.modal-close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
  z-index: 10;
  transition: color 0.2s;
}

.modal-close-btn:hover {
  color: #d4af37;
}

.modal-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  padding: 40px;
}

.modal-gallery .main-image {
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 16px;
}

.modal-gallery .main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumbnail-container {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.thumbnail-container img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 0.2s, transform 0.2s;
}

.thumbnail-container img:hover {
  transform: scale(1.05);
}

.thumbnail-container img.active {
  border-color: #d4af37;
}

.modal-details {
  color: #e0e0e0;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.modal-details h1 {
  color: #d4af37;
  font-size: 2.5rem;
  margin: 4px 0 8px;
}

.descripcion-completa {
  font-size: 1rem;
  line-height: 1.7;
  margin: 16px 0;
  color: #ccc;
}

/* Reusing styles from Catalogo.vue for consistency */
.tag-hecho-mano { color: #ccc; text-transform: uppercase; font-weight: 500; font-size: 12px; }
.rating { margin-bottom: 8px; }
.rating span { font-size: 16px; }
.tag-producto { background-color: #b22222; color: white; padding: 4px 10px; border-radius: 12px; font-size: 0.8rem; font-weight: 600; display: inline-block; margin-top: 8px; margin-bottom: 12px; }
.stock-info { background-color: rgba(212, 175, 55, 0.1); border-left: 3px solid #d4af37; padding: 8px 12px; margin: 12px 0 0; border-radius: 0 4px 4px 0; }
.stock-info p { margin: 0; color: #d4af37; font-size: 0.9rem; font-weight: 500; }
.stock-info strong { font-weight: 700; }
.precio-container { display: flex; align-items: baseline; margin-bottom: 16px; }
.precio-anterior { text-decoration: line-through; color: #999; font-size: 1.2rem; margin-right: 10px; }
.precio-valor { color: #ffffff; font-weight: 500; font-size: 2.2rem; }
.cta-comprar { background: #b22222; color: #ffffff; border: none; padding: 14px 30px; margin-top: 16px; border-radius: 8px; font-weight: 700; font-size: 1.1rem; text-transform: uppercase; text-decoration: none; text-align: center; display: inline-block; transition: background-color 0.3s, transform 0.2s; }
.cta-comprar:hover { background-color: #c93434; transform: scale(1.05); }
.garantia-texto { font-size: 0.8rem; color: #aaa; margin-top: 12px; display: block; }

@media (max-width: 768px) {
  .modal-content {
    grid-template-columns: 1fr;
    padding: 40px 20px 20px;
  }
  .modal-details h1 {
    font-size: 2rem;
  }
}
</style>