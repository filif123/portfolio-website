<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<!--suppress CssUnusedSymbol -->
<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Work+Sans:wght@300;400;500;600&display=swap');

html {
  scroll-behavior: smooth;
}

:root {
  color-scheme: light;
}

:root.dark {
  color-scheme: dark;
}

body {
  font-family:
    'Work Sans',
    system-ui,
    -apple-system,
    sans-serif;
  margin: 0;
}

h1,
h2,
h3,
h4 {
  font-family:
    'Space Grotesk',
    system-ui,
    -apple-system,
    sans-serif;
}
</style>
