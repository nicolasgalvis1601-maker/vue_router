<template>
  <q-page>
    <section class="home-hero">
      <div class="home-hero-copy">
        <div class="hero-kicker">SABOR QUE NO SE EXPLICA, SE COME</div>
        <h1>Tu antojo<br><span>acaba de llegar.</span></h1>
        <p>Hamburguesas, perros, pizzas, bebidas y postres preparados para que el hambre deje de tomar decisiones por ti.</p>
        <div class="hero-actions">
          <q-btn unelevated rounded no-caps label="Explorar menú" icon-right="arrow_forward" to="/hamburguesas" class="hero-btn" />
        </div>
        <div class="hero-note"><q-icon name="schedule" /> Abiertos todos los días · 11:00 a.m. - 10:00 p.m.</div>
      </div>
      <div class="home-hero-image">
        <q-img src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=90" />
        <div class="floating-price"><span>DESDE</span><b>$13.900</b><small>hecho al momento</small></div>
      </div>
    </section>

    <section class="home-section">
      <div class="section-intro"><div><span class="eyebrow">LO MÁS PEDIDO</span><h2>El hambre no espera.</h2></div><q-btn flat no-caps to="/hamburguesas" label="Ver todo el menú →" /></div>
      <div class="home-products">
        <ProductCard v-for="product in featured" :key="product.name" :product="product" />
      </div>
    </section>

    <section class="home-section promotions-section">
      <div class="section-intro">
        <div><span class="eyebrow">PARA COMER MÁS Y PAGAR MENOS</span><h2>Promos de la semana.</h2></div>
        <q-btn flat no-caps to="/promociones" label="Ver todas las promos →" />
      </div>
      <div class="row q-col-gutter-lg promotion-grid">
        <div v-for="promotion in promotions" :key="promotion.name" class="col-12 col-md-6">
          <q-card flat class="promotion-card">
            <q-img :src="promotion.image" :ratio="16 / 7" class="promotion-image">
              <q-badge color="deep-orange" floating class="q-ma-sm">{{ promotion.tag }}</q-badge>
            </q-img>
            <q-card-section>
              <div class="text-h6">{{ promotion.name }}</div>
              <div class="text-body2 text-grey-7 q-mt-xs">{{ promotion.description }}</div>
              <div class="row items-center justify-between q-mt-md">
                <div class="text-h6 text-deep-orange text-weight-bold">{{ promotion.price }}</div>
                <q-btn color="deep-orange" unelevated rounded icon="shopping_bag" label="Pedir" href="https://wa.me/573001234567" target="_blank" />
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>

    <section class="category-strip">
      <div class="section-intro light"><div><span class="eyebrow">ELIGE TU ANTOJO</span><h2>Una categoría. Cero excusas.</h2></div></div>
      <div class="category-grid">
        <q-card v-for="category in categories" :key="category.to" flat class="category-tile" @click="$router.push(category.to)">
          <q-img :src="category.image" ratio="1" />
          <div class="category-tile-info"><span>{{ category.icon }}</span><b>{{ category.name }}</b><q-icon name="arrow_outward" /></div>
        </q-card>
      </div>
    </section>

  </q-page>
</template>

<script setup>
import ProductCard from 'components/ProductCard.vue'
import { categoryMenus } from 'src/data/menu.js'

const featured = [categoryMenus.hamburguesas.products[0], categoryMenus.pizzas.products[0], categoryMenus.perros.products[0], categoryMenus.postres.products[0]]
const promotions = [
  { name: 'Combo Sabor Express', description: 'Hamburguesa Clásica Doble, papas y bebida personal.', price: '$25.900', tag: '25% menos', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=85' },
  { name: 'Plan de Amigos', description: 'Dos pizzas medianas, dos bebidas y una porción de churros.', price: '$59.900', tag: 'Para compartir', image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1000&q=85' },
  { name: 'Martes de Perro', description: 'Lleva dos perros Sabor y recibe papas para compartir.', price: '$27.800', tag: 'Solo martes', image: 'https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=1000&q=85' },
  { name: 'Dulce Cierre', description: 'Dos postres de la casa por el precio de uno.', price: '$15.900', tag: 'Fin de semana', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1000&q=85' }
]
const categories = [
  { name: 'Hamburguesas', icon: '🍔', to: '/hamburguesas', image: categoryMenus.hamburguesas.banner },
  { name: 'Perros', icon: '🌭', to: '/perros', image: categoryMenus.perros.banner },
  { name: 'Pizzas', icon: '🍕', to: '/pizzas', image: categoryMenus.pizzas.banner },
  { name: 'Bebidas', icon: '🥤', to: '/bebidas', image: categoryMenus.bebidas.banner },
  { name: 'Postres', icon: '🍰', to: '/postres', image: categoryMenus.postres.banner }
]
</script>
