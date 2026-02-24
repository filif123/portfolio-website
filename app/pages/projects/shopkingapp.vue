<template>
  <div class="space-y-12 pb-16 pt-10">
    <ProjectHero
      eyebrow="Project"
      title="ShopkingApp"
      subtitle="Android application for the Shopking cash register system"
      :actions="heroActions"
    />

    <ProjectMetaGrid :items="metaItems" />

    <section class="mx-auto w-full max-w-6xl px-6">
      <div class="grid gap-2">
        <h2 class="text-2xl font-semibold text-slate-900 dark:text-white">About</h2>
        <p class="mt-4 text-base text-slate-600 dark:text-slate-300">
          ShopkingApp is an Android companion application for the Shopking cash register system,
          designed to extend the functionality of the desktop application with two main use cases.
        </p>
        <h3 class="mt-6 text-lg font-semibold text-slate-900 dark:text-white">
          Barcode Scanner for Cashiers
        </h3>
        <p class="text-base text-slate-600 dark:text-slate-300">
          The app can replace traditional barcode scanners at the checkout. Cashiers authenticate
          using their existing credentials and scan product barcodes directly through the mobile
          device, integrating seamlessly with the main Shopking system.
        </p>
        <h3 class="mt-6 text-lg font-semibold text-slate-900 dark:text-white">
          Self-Service Shopping System
        </h3>
        <p class="text-base text-slate-600 dark:text-slate-300">
          Similar to modern Scan&Shop services, customers can use the app to scan products as they
          shop. At checkout, the app generates a barcode that the cashier scans to import the entire
          purchase, streamlining the payment process and reducing checkout time.
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
    href: 'https://github.com/filif123/ShopkingApp/releases/tag/v1.0.0',
    icon: 'ph:download-simple',
    variant: 'primary'
  },
  {
    label: 'GitHub',
    href: 'https://github.com/filif123/ShopkingApp',
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
  { label: 'Technologies', type: 'chips', items: ['Java', 'Android'] },
  { label: 'Development period', value: '05/2020 - 07/2020' },
  { label: 'Category', value: 'Mobile application' }
] as MetaItem[];

const gallery = [
  {
    alt: 'Main screen',
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
