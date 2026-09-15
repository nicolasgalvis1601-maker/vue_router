<template>
  <q-page class="menu-page q-pa-md">
    <CategoryBanner
      image="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1600&q=85"
      title="Promociones"
      description="Combos pensados para compartir más sabor y pagar menos."
    />

    <div class="section-heading q-mt-xl">
      <div>
        <div class="text-overline text-orange-9">Solo por tiempo limitado</div>
        <h1 class="text-h4 q-my-none">Ofertas de la semana</h1>
      </div>
      <q-badge color="deep-orange" class="q-pa-sm">Ahorra hasta 25%</q-badge>
    </div>

    <div class="row q-col-gutter-lg q-mt-md">
      <div v-for="promotion in promotions" :key="promotion.name" class="col-12 col-md-6">
        <q-card class="promotion-card overflow-hidden">
          <q-img :src="promotion.image" :ratio="16 / 7">
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

    <q-banner rounded class="promo-banner q-mt-xl">
      <template #avatar><q-icon name="local_shipping" color="deep-orange" /></template>
      Domicilios en Bucaramanga y área metropolitana. Escríbenos por WhatsApp para confirmar cobertura.
      <template #action><q-btn flat color="deep-orange" label="Contactar" href="https://wa.me/573001234567" target="_blank" /></template>
    </q-banner>
  </q-page>
</template>

<script setup>
import CategoryBanner from 'components/CategoryBanner.vue'

const promotions = [
  { name: 'Combo Sabor Express', description: 'Hamburguesa Clásica Doble, papas y bebida personal.', price: '$25.900', tag: '25% menos', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=85' },
  { name: 'Plan de Amigos', description: 'Dos pizzas medianas, dos bebidas y una porción de churros.', price: '$59.900', tag: 'Para compartir', image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1000&q=85' },
  { name: 'Martes de Perro', description: 'Lleva dos perros Sabor y recibe papas para compartir.', price: '$27.800', tag: 'Solo martes', image: 'https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=1000&q=85' },
  { name: 'Dulce Cierre', description: 'Dos postres de la casa por el precio de uno.', price: '$15.900', tag: 'Fin de semana', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1000&q=85' }
]
</script>