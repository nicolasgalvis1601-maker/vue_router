<template>
  <q-page>
    <section class="home-hero">
      <div class="home-hero-copy">
        <div class="hero-kicker">SABOR QUE NO SE EXPLICA, SE COME</div>
        <h1>Tu antojo<br><span>acaba de llegar.</span></h1>
        <p>Hamburguesas, perros, pizzas, bebidas y postres preparados para que el hambre deje de tomar decisiones por ti.</p>
        <div class="hero-actions">
          <q-btn unelevated rounded no-caps label="Explorar menú" icon-right="arrow_forward" to="/hamburguesas" class="hero-btn" />
          <q-btn flat rounded no-caps label="Ver promociones" to="/promociones" class="hero-link" />
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

    <section class="category-strip">
      <div class="section-intro light"><div><span class="eyebrow">ELIGE TU ANTOJO</span><h2>Una categoría. Cero excusas.</h2></div></div>
      <div class="category-grid">
        <q-card v-for="category in categories" :key="category.to" flat class="category-tile" @click="$router.push(category.to)">
          <q-img :src="category.image" ratio="1" />
          <div class="category-tile-info"><span>{{ category.icon }}</span><b>{{ category.name }}</b><q-icon name="arrow_outward" /></div>
        </q-card>
      </div>
    </section>

    <section class="home-promo">
      <div><span class="eyebrow">PROMOCIÓN DE LA SEMANA</span><h2>Combo Sabor Express</h2><p>Hamburguesa Clásica Doble + papas + bebida personal.</p><strong>$25.900</strong></div>
      <q-btn unelevated rounded no-caps label="Quiero el combo" icon-right="arrow_forward" to="/promociones" />
    </section>
  </q-page>
</template>

<script setup>
import ProductCard from 'components/ProductCard.vue'
import { categoryMenus } from 'src/data/menu.js'

const featured = [categoryMenus.hamburguesas.products[0], categoryMenus.pizzas.products[0], categoryMenus.perros.products[0], categoryMenus.postres.products[0]]
const categories = [
  { name: 'Hamburguesas', icon: '🍔', to: '/hamburguesas', image: categoryMenus.hamburguesas.banner },
  { name: 'Perros', icon: '🌭', to: '/perros', image: categoryMenus.perros.banner },
  { name: 'Pizzas', icon: '🍕', to: '/pizzas', image: categoryMenus.pizzas.banner },
  { name: 'Bebidas', icon: '🥤', to: '/bebidas', image: categoryMenus.bebidas.banner },
  { name: 'Postres', icon: '🍰', to: '/postres', image: categoryMenus.postres.banner }
]
</script>
