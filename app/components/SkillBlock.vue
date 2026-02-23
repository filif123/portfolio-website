<template>
  <div class="mt-4 grid grid-cols-6 gap-3">
    <div
      v-for="item in items"
      :key="item.name"
      class="flex items-center gap-2 rounded-lg border border-slate-200/50 bg-white/50 px-3 py-2 dark:border-slate-700/50 dark:bg-slate-800/30"
    >
      <VueIcon :name="item.icon" class="text-xl text-slate-600 dark:text-slate-300" />
      <span class="text-sm font-medium text-slate-700 dark:text-slate-200">{{ item.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueIcon from '@kalimahapps/vue-icons/VueIcon';

defineProps<{ items: { name: string; icon: string }[] }>();
</script>
