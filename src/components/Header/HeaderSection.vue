<template>
    <header class="flex flex-col scroll-smooth">
        <HeaderTop />
    
        <div class="flex items-end justify-center py-3">
            <img class="w-20" src="<%= BASE_URL %>src/assets/images/apollo-logo.png" alt="">
            <h1 class="text-4xl font-semibold text-gray-700"><span class="text-green-400">APOLLO</span> LIGHTINGS</h1>
        </div>
    
        <HeaderNav />
    </header>
</template>

<script lang="ts" setup>
import HeaderNav from './HeaderNav.vue';
import HeaderTop from './HeaderTop.vue';

</script>