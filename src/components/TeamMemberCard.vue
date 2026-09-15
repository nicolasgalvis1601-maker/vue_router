<template>
  <q-card flat class="team-card">
    <q-img :src="member.image" ratio="1" />
    <q-card-section>
      <div class="team-role">{{ member.role }}</div>
      <div class="team-name">{{ member.name }}</div>
    </q-card-section>
  </q-card>
</template>

<script setup>
defineProps(['member'])
</script>
