<template>
  <component
    :is="url ? 'a' : 'article'"
    :href="url"
    :class="[
      'rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800/70 dark:bg-slate-900/40',
      url && 'cursor-pointer'
    ]"
  >
    <div
      v-if="metaLeft || metaRight"
      class="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400"
    >
      <span>{{ metaLeft }}</span>
      <span>{{ metaRight }}</span>
    </div>
    <h3 class="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
      {{ title }}
    </h3>
    <div class="mt-3 text-sm text-slate-600 dark:text-slate-300">
      <slot />
    </div>
  </component>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  metaLeft?: string;
  metaRight?: string;
  url?: string;
}>();
</script>
