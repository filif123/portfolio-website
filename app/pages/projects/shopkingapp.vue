<template>
  <ProjectLayout
    title="ShopkingApp"
    subtitle="Android application for the Shopking cash register system"
    :actions="actions"
    :meta-items="metaItems"
    :gallery="gallery"
  >
    <ProjectContent>
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
    </ProjectContent>
  </ProjectLayout>
</template>

<script setup lang="ts">
import type { ProjectAction, ProjectMetaItem, ProjectGalleryImage } from '#shared/types/project';

definePageMeta({
  title: 'ShopkingApp'
});

const actions: ProjectAction[] = [
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
];

const metaItems: ProjectMetaItem[] = [
  { label: 'Technologies', type: 'chips', items: ['Java', 'Android'] },
  { label: 'Development period', value: '05/2020 - 07/2020' },
  { label: 'Category', value: 'Mobile application' }
];

const gallery: ProjectGalleryImage[] = [
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
