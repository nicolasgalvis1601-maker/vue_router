<template>
  <q-layout view="hHh lpR fFf" class="app-shell">
    <q-header class="site-header">
      <div class="top-strip">🔥 Sabor casero · Ingredientes frescos · Pedidos por WhatsApp</div>
      <q-toolbar class="main-toolbar">
        <q-btn flat round dense icon="menu" class="lt-md text-white" @click="drawer = true" />
        <q-toolbar-title class="brand" @click="$router.push('/')">
          <span class="brand-mark">SE</span>
          <span><b>Sabor</b> Express<small>FAST FOOD</small></span>
        </q-toolbar-title>
        <div class="desktop-nav gt-sm">
          <q-btn flat no-caps to="/" label="Inicio" />
          <q-btn flat no-caps to="/hamburguesas" label="Hamburguesas" />
          <q-btn flat no-caps to="/perros" label="Perros" />
          <q-btn flat no-caps to="/pizzas" label="Pizzas" />
          <q-btn flat no-caps to="/bebidas" label="Bebidas" />
          <q-btn flat no-caps to="/postres" label="Postres" />
          <q-btn flat no-caps to="/promociones" label="Promos" />
          <q-btn flat no-caps to="/nosotros" label="Nosotros" />
        </div>
        <q-btn unelevated rounded icon="shopping_bag" label="Pedir" class="order-btn q-ml-md" href="https://wa.me/573001234567" target="_blank" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" side="left" bordered class="mobile-drawer">
      <div class="drawer-brand"><span class="brand-mark">SE</span><b>Sabor Express</b></div>
      <q-list padding>
        <q-item v-for="item in links" :key="item.to" clickable :to="item.to" v-close-popup>
          <q-item-section avatar><q-icon :name="item.icon" /></q-item-section>
          <q-item-section>{{ item.label }}</q-item-section>
        </q-item>
      </q-list>
      <div class="drawer-promo">¿Antojo urgente?<br><b>Haz tu pedido por WhatsApp.</b></div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="mobile-footer">
      <div class="mobile-footer-inner">
        <q-btn flat round dense icon="home" to="/" />
        <q-btn flat round dense icon="lunch_dining" to="/hamburguesas" />
        <q-btn flat round dense icon="local_offer" to="/promociones" />
        <q-btn flat round dense icon="mdi-whatsapp" href="https://wa.me/573001234567" target="_blank" />
        <q-btn flat round dense icon="person" to="/nosotros" />
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)
const links = [
  { label: 'Inicio', to: '/', icon: 'home' },
  { label: 'Hamburguesas', to: '/hamburguesas', icon: 'lunch_dining' },
  { label: 'Perros', to: '/perros', icon: 'fastfood' },
  { label: 'Pizzas', to: '/pizzas', icon: 'local_pizza' },
  { label: 'Bebidas', to: '/bebidas', icon: 'local_drink' },
  { label: 'Postres', to: '/postres', icon: 'cake' },
  { label: 'Promociones', to: '/promociones', icon: 'local_offer' },
  { label: 'Nosotros', to: '/nosotros', icon: 'groups' }
]
</script>
