<template>
    <nav class="px-64 py-5">
        <ul class="flex justify-center items-center gap-12 cursor-pointer">
            <li class="hover:text-green-400">ALL</li>
            <li class="hover:text-green-400">NEW IN</li>
            <li class="hover:text-green-400">BEST</li>
            <li class="hover:text-green-400">BULBS</li>
            <li class="hover:text-green-400">CEILINGS</li>
            <li class="hover:text-green-400">CHANDELIERS</li>
            <li class="hover:text-green-400">LAMPS</li>
            <li class="hover:text-green-400">SALE</li>
            <li class="hover:text-green-400">CONTACT</li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class HeaderNav extends Vue {
  msg!: string
}
</script>

