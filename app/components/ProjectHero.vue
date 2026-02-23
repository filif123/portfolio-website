<template>
  <section class="mx-auto w-full max-w-6xl px-6">
    <div class="flex flex-wrap items-center justify-between gap-6">
      <div>
        <p v-if="eyebrow" class="text-xs uppercase tracking-[0.4em] text-emerald-500">
          {{ eyebrow }}
        </p>
        <h1
          class="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
        >
          {{ title }}
        </h1>
        <p v-if="subtitle" class="mt-3 text-base text-slate-600 dark:text-slate-300">
          {{ subtitle }}
        </p>
      </div>
      <div v-if="actions.length" class="flex flex-wrap gap-3">
        <a
          v-for="action in actions"
          :key="action.label"
          :href="action.href"
          :class="[
            'inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition',
            action.variant === 'primary'
              ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20 hover:shadow-xl dark:bg-white dark:text-slate-900'
              : 'border border-slate-200/80 text-slate-700 hover:border-slate-300 hover:text-slate-200 dark:border-slate-700/70 dark:text-slate-200'
          ]"
        >
          <VueIcon v-if="action.icon" :name="action.icon" class="text-base" />
          {{ action.label }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import VueIcon from '@kalimahapps/vue-icons/VueIcon';

type HeroAction = {
  label: string;
  href: string;
  icon?: string;
  variant?: 'primary' | 'secondary';
};

withDefaults(
  defineProps<{
    eyebrow?: string;
    title: string;
    subtitle?: string;
    actions?: HeroAction[];
  }>(),
  {
    actions: () => [],
    eyebrow: 'Project',
    subtitle: ''
  }
);
</script>
