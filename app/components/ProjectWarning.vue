<template>
  <div
    class="rounded-2xl border border-amber-200/70 bg-amber-50/80 p-5 text-sm text-amber-900 shadow-sm dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-200"
  >
    <div class="flex items-start gap-3">
      <span
        class="mt-1 inline-flex items-center justify-center rounded-full bg-white text-amber-600 dark:border-amber-400/50 dark:bg-slate-950 dark:text-amber-300"
      >
        <VueIcon name="ph:warning-circle" class="text-lg" />
      </span>
      <div>
        <p class="font-semibold uppercase tracking-[0.2em]">{{ title }}</p>
        <p class="mt-2">
          <slot />
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueIcon from '@kalimahapps/vue-icons/VueIcon';

withDefaults(
  defineProps<{
    title?: string;
  }>(),
  {
    title: 'Warning'
  }
);
</script>
