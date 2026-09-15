<template>
  <q-page class="promotions-page">
    <section class="promotions-hero">
      <div class="promotions-hero-copy">
        <div class="eyebrow">SABOR EXPRESS · PROMOS ACTIVAS</div>
        <h1>Más antojo.<br><span>Menos cuenta.</span></h1>
        <p>Combos honestos, porciones para compartir y excusas para pedir algo rico hoy.</p>
        <div class="promotions-meta"><span>04 ofertas</span><i></i><span>Actualizadas cada semana</span></div>
      </div>
      <div class="feature-promo">
        <div class="feature-promo-image">
          <q-img src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1100&q=90" ratio="1" />
          <span class="feature-sticker">-25%</span>
        </div>
        <div class="feature-promo-info">
          <div class="feature-label">LA FAVORITA DE LA CASA</div>
          <h2>Combo Sabor<br>Doble</h2>
          <p>Hamburguesa Clásica Doble, papas y bebida personal.</p>
          <div class="feature-promo-footer"><strong>$25.900</strong><q-btn unelevated no-caps icon="arrow_forward" label="Pedir ahora" href="https://wa.me/573001234567" target="_blank" /></div>
        </div>
      </div>
    </section>

    <section class="promo-list-section">
      <div class="promo-list-heading"><div><span class="eyebrow">PARA CADA PLAN</span><h2>Elige tu combo.</h2></div><span class="promo-count">01 — 04</span></div>
      <div class="promo-list">
        <article v-for="(promotion, index) in promotions" :key="promotion.name" class="promo-ticket">
          <div class="promo-ticket-number">0{{ index + 1 }}</div>
          <q-img :src="promotion.image" ratio="1" class="promo-ticket-image" />
          <div class="promo-ticket-content"><span class="promo-ticket-tag">{{ promotion.tag }}</span><h3>{{ promotion.name }}</h3><p>{{ promotion.description }}</p></div>
          <div class="promo-ticket-action"><strong>{{ promotion.price }}</strong><q-btn flat round icon="arrow_outward" :href="`https://wa.me/573001234567?text=Hola%2C%20quiero%20pedir%20${encodeURIComponent(promotion.name)}`" target="_blank"><q-tooltip>Pedir promoción</q-tooltip></q-btn></div>
        </article>
      </div>
    </section>

    <section class="promotions-footer-banner">
      <div><span class="eyebrow">¿YA SABES CUÁL?</span><h2>El hambre no<br>espera.</h2></div>
      <div class="footer-banner-detail"><p>Domicilios en Bucaramanga y área metropolitana.</p><q-btn unelevated no-caps icon="mdi-whatsapp" label="Hablar por WhatsApp" href="https://wa.me/573001234567" target="_blank" /></div>
    </section>
  </q-page>
</template>

<script setup>
const promotions = [
  { name: 'Plan de Amigos', description: 'Dos pizzas medianas, dos bebidas y una porción de churros.', price: '$59.900', tag: 'Para compartir', image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=700&q=85' },
  { name: 'Martes de Perro', description: 'Dos perros Sabor con papas para compartir y salsas de la casa.', price: '$27.800', tag: 'Solo martes', image: 'https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=700&q=85' },
  { name: 'Dulce Cierre', description: 'Dos postres de la casa para terminar la comida con algo dulce.', price: '$15.900', tag: 'Fin de semana', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=700&q=85' }
]
</script>

<style scoped>
.promotions-page { background: var(--paper); }
.promotions-hero { max-width: 1280px; margin: auto; padding: 72px 38px 94px; display: grid; grid-template-columns: .9fr 1.1fr; gap: 74px; align-items: center; }
.promotions-hero-copy h1 { margin: 20px 0 25px; font-family: var(--display); font-size: clamp(56px, 7vw, 102px); line-height: .84; letter-spacing: -.08em; text-transform: uppercase; }
.promotions-hero-copy h1 span { color: var(--coral); display: inline-block; transform: translateX(24px) rotate(-2deg); }
.promotions-hero-copy p { max-width: 430px; color: var(--muted); font-size: 21px; line-height: 1.55; }
.promotions-meta { display: flex; align-items: center; gap: 12px; margin-top: 32px; color: var(--muted); font-family: var(--mono); font-size: 11px; text-transform: uppercase; }
.promotions-meta i { width: 25px; height: 1px; background: var(--coral); }
.feature-promo { display: grid; grid-template-columns: 47% 53%; background: var(--ink); color: var(--paper); box-shadow: 14px 14px 0 var(--acid); transform: rotate(1.3deg); }
.feature-promo-image { position: relative; min-height: 410px; }
.feature-promo-image .q-img { height: 100%; filter: saturate(.8) contrast(1.1); }
.feature-sticker { position: absolute; top: 20px; right: -20px; display: grid; place-items: center; width: 66px; height: 66px; border: 1px solid var(--ink); border-radius: 50%; background: var(--coral); color: var(--ink); font-family: var(--display); font-size: 20px; font-weight: 800; transform: rotate(12deg); }
.feature-promo-info { display: flex; flex-direction: column; justify-content: center; padding: 38px; }
.feature-label, .promo-ticket-tag { color: var(--acid); font-family: var(--mono); font-size: 10px; letter-spacing: .14em; text-transform: uppercase; }
.feature-promo-info h2 { margin: 16px 0 14px; font-family: var(--display); font-size: 39px; line-height: .9; text-transform: uppercase; }
.feature-promo-info p { color: #c3c0b6; font-size: 16px; line-height: 1.45; }
.feature-promo-footer { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-top: 32px; }
.feature-promo-footer strong, .promo-ticket-action strong { color: var(--coral); font-family: var(--mono); font-size: 19px; }
.feature-promo-footer .q-btn { border-radius: 0; background: var(--coral); color: var(--ink); font-family: var(--mono); text-transform: uppercase; font-size: 11px; }
.promo-list-section { max-width: 1200px; margin: auto; padding: 25px 24px 90px; }
.promo-list-heading { display: flex; align-items: end; justify-content: space-between; margin-bottom: 27px; }
.promo-list-heading h2, .promotions-footer-banner h2 { margin: 9px 0 0; font-family: var(--display); font-size: 43px; line-height: .9; letter-spacing: -.06em; text-transform: uppercase; }
.promo-count { color: var(--muted); font-family: var(--mono); font-size: 12px; }
.promo-list { display: grid; gap: 13px; }
.promo-ticket { display: grid; grid-template-columns: 48px 110px 1fr auto; align-items: center; min-height: 126px; border: 1px solid var(--ink); background: var(--paper-bright); }
.promo-ticket:nth-child(even) { background: var(--sky); }
.promo-ticket-number { align-self: stretch; display: grid; place-items: center; border-right: 1px solid var(--ink); color: var(--coral); font-family: var(--mono); font-size: 12px; }
.promo-ticket-image { align-self: stretch; min-height: 126px; }
.promo-ticket-content { padding: 20px 27px; }
.promo-ticket-content h3 { margin: 8px 0 5px; font-family: var(--display); font-size: 24px; line-height: .95; text-transform: uppercase; }
.promo-ticket-content p { margin: 0; color: var(--muted); font-size: 15px; line-height: 1.4; }
.promo-ticket-action { display: flex; align-items: center; gap: 18px; padding: 20px 22px; }
.promo-ticket-action .q-btn { color: var(--ink); border: 1px solid var(--ink); border-radius: 50%; }
.promotions-footer-banner { display: flex; align-items: center; justify-content: space-between; gap: 30px; padding: 65px max(24px, calc((100% - 1152px) / 2)); background: var(--coral); border-top: 1px solid var(--ink); }
.promotions-footer-banner .eyebrow { color: var(--ink); }
.promotions-footer-banner h2 { font-size: 52px; }
.footer-banner-detail { display: flex; align-items: center; gap: 25px; }
.footer-banner-detail p { max-width: 220px; margin: 0; font-family: var(--mono); font-size: 12px; line-height: 1.45; text-transform: uppercase; }
.footer-banner-detail .q-btn { border-radius: 0; background: var(--ink); color: var(--acid); font-family: var(--mono); font-size: 11px; text-transform: uppercase; }
@media (max-width: 900px) { .promotions-hero { grid-template-columns: 1fr; gap: 52px; } .feature-promo { max-width: 680px; } }
@media (max-width: 599px) { .promotions-hero { padding: 48px 18px 72px; } .promotions-hero-copy h1 { font-size: 55px; } .promotions-hero-copy h1 span { transform: translateX(5px) rotate(-2deg); } .feature-promo { grid-template-columns: 1fr; box-shadow: 9px 9px 0 var(--acid); transform: none; } .feature-promo-image { min-height: 250px; } .feature-promo-info { padding: 25px; } .feature-promo-info h2 { font-size: 34px; } .promo-list-section { padding: 10px 18px 64px; } .promo-list-heading { align-items: flex-start; flex-direction: column; gap: 14px; } .promo-list-heading h2 { font-size: 35px; } .promo-ticket { grid-template-columns: 35px 82px 1fr; } .promo-ticket-image { min-height: 142px; } .promo-ticket-content { padding: 15px 13px; } .promo-ticket-content h3 { font-size: 17px; } .promo-ticket-content p { font-size: 12px; } .promo-ticket-action { grid-column: 2 / 4; justify-content: space-between; padding: 9px 13px; border-top: 1px solid var(--line); } .promotions-footer-banner { align-items: flex-start; flex-direction: column; padding: 48px 18px; } .promotions-footer-banner h2 { font-size: 43px; } .footer-banner-detail { align-items: flex-start; flex-direction: column; gap: 16px; } }
</style>