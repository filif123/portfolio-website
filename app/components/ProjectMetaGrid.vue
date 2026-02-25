<template>
  <section class="mx-auto w-full max-w-6xl px-6">
    <div
      class="grid gap-6 rounded-3xl border border-slate-200/70 bg-white/70 p-6 shadow-lg shadow-slate-900/10 backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/40 lg:grid-cols-3"
    >
      <div v-for="item in items" :key="item.label">
        <p class="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          {{ item.label }}
        </p>
        <div v-if="item.type === 'chips'" class="mt-3 flex flex-wrap gap-2">
          <span
            v-for="chip in item.items"
            :key="chip"
            class="rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-sm shadow-slate-900/5 dark:border-slate-700/60 dark:bg-slate-900/40 dark:text-slate-200"
          >
            {{ chip }}
          </span>
        </div>
        <p v-else class="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
          {{ item.value }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ProjectMetaItem } from '#shared/types/project';

defineProps<{
  items: ProjectMetaItem[];
}>();
</script>
