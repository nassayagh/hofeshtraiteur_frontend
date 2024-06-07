<script setup lang="ts">
import { RouterLink } from 'vue-router';
import logo from '@/assets/images/logos/logo.png';

import DarklogoGold from '@/assets/images/logos/logo-hofesh-traiteur-768x281-1.png';
</script>
<template>
    <div class="logo">
        <RouterLink to="/">
            <img :src="DarklogoGold" alt="home" style="max-width: 100%" />
        </RouterLink>
    </div>
</template>
