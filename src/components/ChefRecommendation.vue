<template>
  <q-card flat class="chef-card">
    <q-img :src="product.image" class="chef-image" ratio="1" />
    <div class="chef-content">
      <div class="chef-label"><q-icon name="restaurant" /> RECOMENDACIÓN DEL CHEF</div>
      <div class="chef-title">{{ product.name }}</div>
      <p>{{ product.ingredients }}</p>
      <div class="chef-price">{{ formatPrice(product.price) }}</div>
    </div>
    <div class="chef-stamp">★<span>TOP<br>CHEF</span></div>
  </q-card>
</template>

<script setup>
defineProps(['product'])
function formatPrice (value) { return '$' + value.toLocaleString('es-CO') }
</script>
