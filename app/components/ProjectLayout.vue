<template>
  <div class="space-y-12 pb-16 pt-10">
    <ProjectHero :eyebrow="eyebrow" :title="title" :subtitle="subtitle" :actions="actions" />

    <ProjectMetaGrid :items="metaItems" />

    <slot />

    <ProjectGallery v-if="gallery && gallery.length > 0" :images="gallery" />
  </div>
</template>

<script setup lang="ts">
import type { ProjectData } from '#shared/types/project';

withDefaults(defineProps<ProjectData>(), {
  eyebrow: 'Project',
  gallery: undefined
});
</script>
