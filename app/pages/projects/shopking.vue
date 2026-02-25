<template>
  <ProjectLayout
    title="Shopking"
    subtitle="A simple cash register system"
    :actions="actions"
    :meta-items="metaItems"
    :gallery="gallery"
  >
    <ProjectContent>
      <p class="mt-4 text-base text-slate-600 dark:text-slate-300">
        The Shopking program serves as a demonstration of the cash register system for retail
        operations. It was developed approx. from July 2019 to March 2020 as part of the practical
        part of the matriculation exam.
      </p>
    </ProjectContent>
  </ProjectLayout>
</template>

<script setup lang="ts">
import type { ProjectAction, ProjectMetaItem, ProjectGalleryImage } from '#shared/types/project';

definePageMeta({
  title: 'Shopking'
});

const actions: ProjectAction[] = [
  {
    label: 'Download',
    href: 'https://github.com/filif123/Shopking/releases/tag/v1.0.0',
    icon: 'ph:download-simple',
    variant: 'primary'
  },
  {
    label: 'GitHub',
    href: 'https://github.com/filif123/Shopking',
    icon: 'ak:github-fill',
    variant: 'secondary'
  }
];

const metaItems: ProjectMetaItem[] = [
  { label: 'Technologies', type: 'chips', items: ['Java', 'JavaFX'] },
  { label: 'Development period', value: '07/2019 - 03/2020' },
  { label: 'Category', value: 'Desktop application' }
];

const gallery: ProjectGalleryImage[] = [
  {
    alt: 'Example 1',
    src: '/images/shopking/example1.png'
  },
  {
    alt: 'Example 2',
    src: '/images/shopking/example2.png'
  },
  {
    alt: 'Example 3',
    src: '/images/shopking/example3.png'
  },
  {
    alt: 'Example 4',
    src: '/images/shopking/example4.png'
  }
];
</script>
