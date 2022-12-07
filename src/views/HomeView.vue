<template>
  <header class="flex flex-col">
      <HeaderTop />
  
      <div class="flex items-end justify-center py-3">
          <img class="w-20" src="../assets/images/apollo-logo.png" alt="">
          <h1 class="text-4xl font-semibold text-gray-700"><span class="text-green-400">APOLLO</span> LIGHTINGS</h1>
      </div>
  
      <HeaderNav />
  </header>

  <HeroItem />
  <LightSection />
  <ContactItem />
  <FooterItem />
</template>

<script lang="ts" setup>
import { Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

// Components
import HeaderNav from '@/components/Header/HeaderNav.vue';
import HeaderTop from '@/components/Header/HeaderTop.vue';
import HeroItem from '@/components/Hero/HeroItem.vue';
import LightSection from '@/components/Clothes/LightSection.vue';
import ContactItem from '@/components/Contact/ContactItem.vue';
import FooterItem from '@/components/Footer/FooterItem.vue';

class HomeView extends Vue {}
</script>
