<template>
  <section class="mx-auto w-full max-w-6xl px-6">
    <div class="grid gap-2">
      <h2 class="text-2xl font-semibold text-slate-900 dark:text-white">{{ title }}</h2>
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
  }>(),
  {
    title: 'About'
  }
);
</script>
