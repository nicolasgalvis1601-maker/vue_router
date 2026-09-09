<template>
  <section class="category-hero">
    <q-img :src="image" ratio="16/6" class="category-image">
      <div class="category-overlay">
        <div class="category-kicker">SABOR EXPRESS · MENÚ</div>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
      </div>
    </q-img>
  </section>
</template>

<script setup>
defineProps(['image', 'title', 'description'])
</script>
