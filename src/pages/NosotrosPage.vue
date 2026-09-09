<template>
  <q-page class="content-page">
    <section class="about-intro">
      <div><span class="eyebrow">DESDE 2015</span><h1>Más que comida rápida, una historia para compartir.</h1></div>
      <p>Empezamos con una parrilla pequeña, una receta familiar y una idea bastante sencilla: servir comida rápida que realmente supiera bien. Hoy seguimos trabajando con ingredientes frescos, recetas de la casa y atención cercana.</p>
    </section>

    <section class="about-grid">
      <q-img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1100&q=90" ratio="1" class="about-image" />
      <div class="about-info">
        <span class="eyebrow">VEN A CONOCERNOS</span>
        <h2>Un lugar para comer, reír y volver.</h2>
        <div class="info-row"><q-icon name="place" /><div><b>Dirección</b><span>Cra 27 #45-12, Bucaramanga</span></div></div>
        <div class="info-row"><q-icon name="schedule" /><div><b>Horarios</b><span>Lunes a domingo · 11:00 a.m. - 10:00 p.m.</span></div></div>
        <div class="info-row"><q-icon name="phone" /><div><b>Pedidos</b><span>601 234 5678 · WhatsApp 300 123 4567</span></div></div>
        <q-btn unelevated rounded no-caps label="Pedir por WhatsApp" icon="chat" href="https://wa.me/573001234567" target="_blank" class="whatsapp-btn" />
      </div>
    </section>

    <section class="team-section"><div class="section-intro"><div><span class="eyebrow">EL EQUIPO</span><h2>Las personas detrás del sabor.</h2></div></div><div class="team-grid"><TeamMemberCard v-for="member in team" :key="member.name" :member="member" /></div></section>
  </q-page>
</template>

<script setup>
import TeamMemberCard from 'components/TeamMemberCard.vue'
const team = [
  { name: 'Carlos Ramírez', role: 'Chef principal', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Laura Gómez', role: 'Cajera', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Andrés Torres', role: 'Domiciliario', image: 'https://randomuser.me/api/portraits/men/65.jpg' }
]
</script>
