<template>
  <footer
    class="border-t border-slate-200/70 py-8 text-sm text-slate-500 dark:border-slate-800/70 dark:text-slate-400"
  >
    <div class="mx-auto flex w-full max-w-6xl items-center justify-between px-6">
      <span>{{ new Date().getFullYear() }} Filip Vateha</span>
      <span
        >Build with Nuxt 3 and Tailwind CSS • Source available on
        <a href="https://github.com/filif123/portfolio-website"><strong>GitHub</strong></a></span
      >
      <div class="flex items-center gap-4">
        <a
          href="https://github.com/filif123"
          class="inline-flex items-center gap-2 text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
        >
          <VueIcon name="ak:github-fill" class="text-xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/filip-vateha-1766142a9/"
          class="inline-flex items-center gap-2 text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
        >
          <VueIcon name="ak:linkedin-box-fill" class="text-xl" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import VueIcon from '@kalimahapps/vue-icons/VueIcon';
</script>
