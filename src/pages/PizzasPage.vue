<template>
  <q-page class="menu-page q-pa-md">
    <CategoryBanner :image="menu.banner" :title="menu.title" :description="menu.description" />
    <div class="section-heading q-mt-xl"><div><div class="text-overline text-orange-9">Del horno a tu mesa</div><h1 class="text-h4 q-my-none">Sabor artesanal</h1></div><div class="text-caption text-grey-7">{{ menu.products.length }} opciones disponibles</div></div>
    <ChefRecommendation :product="menu.chef" class="q-mt-md" />
    <div class="row q-col-gutter-lg q-mt-sm"><div v-for="product in menu.products" :key="product.name" class="col-12 col-sm-6 col-md-3"><ProductCard :product="product" /></div></div>
  </q-page>
</template>

<script setup>
import CategoryBanner from 'components/CategoryBanner.vue'
import ProductCard from 'components/ProductCard.vue'
import ChefRecommendation from 'components/ChefRecommendation.vue'
import { categoryMenus } from 'src/data/menu.js'

const menu = categoryMenus.pizzas
</script>