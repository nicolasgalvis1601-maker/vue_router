<template>
  <q-card flat class="product-card">
    <div class="product-image-wrap">
      <q-img :src="product.image" :ratio="1" class="product-image" />
      <q-badge v-if="product.tag" class="product-tag" :label="product.tag" />
    </div>
    <q-card-section class="product-info">
      <div class="product-name">{{ product.name }}</div>
      <div class="product-ingredients">{{ product.ingredients }}</div>
      <p class="product-description">Preparado al momento con ingredientes frescos y el toque especial de la casa.</p>
      <div class="product-footer">
        <strong>{{ formatPrice(product.price) }}</strong>
        <q-btn round unelevated icon="add" class="add-btn" :aria-label="`Agregar ${product.name}`" />
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
defineProps(['product'])
function formatPrice (value) { return '$' + value.toLocaleString('es-CO') }
</script>
