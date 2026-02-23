<template>
  <div class="space-y-12 pb-16 pt-10">
    <ProjectHero
      eyebrow="Project"
      title="Shopking"
      subtitle="A simple cash register system"
      :actions="heroActions"
    />

    <ProjectMetaGrid :items="metaItems" />

    <section class="mx-auto w-full max-w-6xl px-6">
      <div class="grid gap-2">
        <h2 class="text-2xl font-semibold text-slate-900 dark:text-white">About</h2>
        <p class="mt-4 text-base text-slate-600 dark:text-slate-300">
          The Shopking program serves as a demonstration of the cash register system for retail
          operations. It was developed approx. from July 2019 to March 2020 as part of the practical
          part of the matriculation exam.
        </p>
      </div>
    </section>

    <ProjectGallery :images="gallery" />
  </div>
</template>

<script setup lang="ts">
import type { MetaItem } from '~/components/ProjectMetaGrid.vue';

const heroActions = [
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
] as {
  label: string;
  href: string;
  icon: string;
  variant: 'primary' | 'secondary';
}[];

const metaItems = [
  { label: 'Technologies', type: 'chips', items: ['Java', 'JavaFX'] },
  { label: 'Development period', value: '07/2019 - 03/2020' },
  { label: 'Category', value: 'Desktop application' }
] as MetaItem[];

const gallery = [
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
  },
  {
    alt: 'Main screen of the Android app',
    src: '/images/shopkingapp/example1.jpg'
  },
  {
    alt: 'Customer Purchase screen',
    src: '/images/shopkingapp/example2.jpg'
  },
  {
    alt: 'Payment screen',
    src: '/images/shopkingapp/example3.jpg'
  }
];
</script>
