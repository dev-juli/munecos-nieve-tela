import munecoImg from '@/assets/muñeco.jpg';
import menecaImg from '@/assets/meñecavieja.jpg';
import dosmunecosImg from '@/assets/dosmuñecos.jpg';
import papaNoel1Img from '@/assets/papaNoel1.jpg';
import img3blancos from '@/assets/3blancos.png';
import img3amigos from '@/assets/3amigos.png';
import img3compañeros from '@/assets/3compañeros.png';
import jengibre from '@/assets/jengibre.png';
import losDuendes from '@/assets/losDuendes.png';
import nevin from '@/assets/nevin.png';
import sombreron from '@/assets/sombreron.png';



export const products = [

  {
    titulo: 'Papá Noel Clásico',
    descripcion: 'El guardián de la Navidad que no puede faltar. Un tesoro familiar que evoca la nostalgia y alegría de la temporada.',
    precio: '$449.900 COP',
    precioNumerico: 449900,
    precioAnterior: '$500.000',
    imagen: papaNoel1Img,
    galeria: [papaNoel1Img],
    rating: 5,
    featured: false,
  },
  {
    titulo: 'Trío de Paz',
    descripcion: 'Tres elegantes muñecos de nieve que simbolizan la paz y la armonía en tu hogar. Perfectos para una decoración minimalista y moderna.',
    precio: '$599.900 COP',
    precioNumerico: 599900,
    imagen: img3blancos,
    galeria: [img3blancos],
    rating: 5,
    featured: true,
  },
  {
    titulo: 'Los Tres Amigos',
    descripcion: 'Estos tres amigos inseparables traerán alegría y diversión a cualquier rincón. Hechos con detalles únicos y coloridos.',
    precio: '$629.900 COP',
    precioNumerico: 629900,
    imagen: img3amigos,
    galeria: [img3amigos],
    rating: 4,
    featured: false,
  },
   {
    titulo: 'Doña Nieve',
    descripcion: 'La pieza de sofisticación que tu decoración necesita. Ideal para regalo: un detalle exclusivo y único, hecho a mano.',
    precio: '$399.900 COP',
    precioNumerico: 399900,
    precioAnterior: '$450.000',
    imagen: menecaImg,
    galeria: [menecaImg],
    rating: 5,
    tag: 'Edición Limitada',
    stock: 12,
    featured: true,
  },
  {
    titulo: 'Compañeros de Navidad',
    descripcion: 'Un trío clásico con bufandas y gorros a juego, listos para recibir el invierno y celebrar la Navidad contigo.',
    precio: '$619.900 COP',
    precioNumerico: 619900,
    imagen: img3compañeros,
    galeria: [img3compañeros],
    rating: 5,
    featured: false,
  },
  {
    titulo: 'Galleta de Jengibre',
    descripcion: '¡Dulce y adorable! Este muñeco de jengibre es el complemento perfecto para tu cocina o para regalar a los amantes de la repostería.',
    precio: '$299.900 COP',
    precioNumerico: 299900,
    imagen: jengibre,
    galeria: [jengibre],
    rating: 5,
    tag: '¡Nuevo!',
    featured: true,
  },
  
  {
    titulo: 'Bolita de Nieve',
    descripcion: 'Perfecto para decorar el árbol o la sala. Un detalle encantador hecho para durar y crear recuerdos por muchos años.',
    precio: '$349.900 COP',
    precioNumerico: 349900,
    imagen: munecoImg,
    galeria: [munecoImg],
    rating: 4,
    featured: true,
  },
  {
    titulo: 'Los Duendes Mágicos',
    descripcion: 'Los ayudantes de Papá Noel han llegado para esparcir magia. Un par de duendes traviesos y encantadores.',
    precio: '$499.900 COP',
    precioNumerico: 499900,
    imagen: losDuendes,
    galeria: [losDuendes],
    rating: 4,
    featured: false,
  },
  {
    titulo: 'Nevin el Nevado',
    descripcion: 'Con su gorro alto y su sonrisa amigable, Nevin es el guardián perfecto para la entrada de tu hogar.',
    precio: '$379.900 COP',
    precioNumerico: 379900,
    imagen: nevin,
    galeria: [nevin],
    rating: 5,
    featured: false,
  },
  {
    titulo: 'El Sombrerón Navideño',
    descripcion: 'Un muñeco de nieve con mucho estilo, destacando por su gran sombrero de copa. Aportará un toque de elegancia y originalidad.',
    precio: '$389.900 COP',
    precioNumerico: 389900,
    imagen: sombreron,
    galeria: [sombreron],
    rating: 5,
    featured: false,
  },
  
  {
    titulo: 'Pareja Nevada',
    descripcion: 'Ideal como regalo para sorprender a tu pareja o para simbolizar la unión familiar esta Navidad ❤️.',
    precio: '$649.900 COP',
    precioNumerico: 649900,
    precioAnterior: '$700.000',
    imagen: dosmunecosImg,
    galeria: [dosmunecosImg],
    rating: 5,
    tag: '¡Pocas Unidades!',
    stock: 8,
    featured: true,
  },
];