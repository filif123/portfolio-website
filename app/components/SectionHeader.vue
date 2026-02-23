<template>
  <div class="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
    <h2
      class="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 md:text-3xl"
    >
      {{ title }}
    </h2>
    <p v-if="description" class="max-w-xl text-sm text-slate-600 dark:text-slate-300 md:text-base">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; description?: string }>();
</script>
