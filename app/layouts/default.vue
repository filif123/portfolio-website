<template>
  <div class="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <div
      class="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_45%),radial-gradient(circle_at_top_right,rgba(34,197,94,0.16),transparent_35%),linear-gradient(120deg,rgba(15,23,42,0.06),transparent_45%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.2),transparent_40%),radial-gradient(circle_at_top_right,rgba(34,197,94,0.18),transparent_35%),linear-gradient(120deg,rgba(15,23,42,0.4),transparent_45%)]"
    />
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

useHead({
  title: `Portfolio - ${route.meta.title}`,
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
});
</script>
