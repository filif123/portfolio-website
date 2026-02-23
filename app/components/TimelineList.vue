<template>
  <div class="relative pl-6">
    <span
      class="absolute left-2 top-1 h-full w-px bg-slate-200 dark:bg-slate-800"
      aria-hidden="true"
    ></span>
    <div class="space-y-10">
      <article
        v-for="(item, i) in items"
        :key="i"
        class="relative rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/40"
      >
        <span
          class="absolute -left-[23px] top-6 h-3 w-3 rounded-full border-2 border-emerald-400 bg-white shadow dark:border-emerald-300 dark:bg-slate-950"
          aria-hidden="true"
        ></span>
        <div
          class="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400"
        >
          <span>{{ formatDateRange(item.startDate, item.endDate) }}</span>
          <span>{{ item.location }}</span>
        </div>
        <h3 class="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
          {{ item.title }}
        </h3>
        <p class="mt-3 text-sm text-slate-600 dark:text-slate-300">
          {{ item.description }}
        </p>
        <p
          v-if="item.meta"
          class="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500"
        >
          {{ item.meta }}
        </p>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  items: {
    title: string;
    startDate: string;
    endDate: string | null;
    location?: string;
    description: string;
    meta?: string;
  }[];
}>();

function formatDateRange(startDate: string, endDate: string | null): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : null;

  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' };
  const startStr = start.toLocaleDateString(undefined, options);
  const endStr = end ? end.toLocaleDateString(undefined, options) : 'Present';

  return `${startStr} - ${endStr}`;
}
</script>
