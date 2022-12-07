<template>
  <hero-section />
  <light-section />
  <contact-section />
</template>

<script lang="ts" setup>
import { Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

// Components
import HeroSection from '@/components/Hero/HeroSection.vue';
import LightSection from '@/components/Lights/LightSection.vue';
import ContactSection from '@/components/Contact/ContactSection.vue';


class HomeView extends Vue {}
</script>
