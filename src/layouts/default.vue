<template>
  <v-app>
    <slot />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DefaultLayout'
});
</script>
