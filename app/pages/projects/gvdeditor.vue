<template>
  <div class="space-y-12 pb-16 pt-10">
    <ProjectHero
      eyebrow="Project"
      title="GVDEditor"
      subtitle="Editor and generator of text files representing the graph for the INISS program"
      :actions="heroActions"
    />

    <ProjectMetaGrid :items="metaItems" />

    <section class="mx-auto w-full max-w-6xl px-6">
      <div class="grid gap-2">
        <h2 class="text-2xl font-semibold text-slate-900 dark:text-white">About</h2>
        <p class="mt-4 text-base text-slate-600 dark:text-slate-300">
          Editor and generator of text files representing the graph for the
          <a href="https://www.chaps.cz/cs/products/INISS" class="text-emerald-500">INISS program</a
          >.
        </p>
        <p class="text-base text-slate-600 dark:text-slate-300">
          The development of the program started at the end of May 2020. The first stable non-public
          version was released on 7/28/2020 with version 1.0.0.0. The first public version was
          released on 8/25/2020 as 1.2.0.0.
        </p>
        <p class="text-base text-slate-600 dark:text-slate-300">
          GVDEditor is programmed in C# 9 and uses .NET Framework 4.8. The graphical interface is
          made up of Windows Forms technology (WinForms for short).
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
    href: 'http://iniss.6f.sk/docs/gvdeditor/na-stiahnutie/',
    icon: 'ph:download-simple',
    variant: 'primary'
  },
  {
    label: 'Website',
    href: 'http://iniss.6f.sk/docs/gvdeditor/o-programe/',
    icon: 'ak:globe',
    variant: 'primary'
  },

  {
    label: 'GitHub',
    href: 'https://github.com/filif123/GVDEditor',
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
  { label: 'Technologies', type: 'chips', items: ['C#', 'Windows Forms'] },
  { label: 'Development period', value: '05/2020 - 10/2022' },
  { label: 'Category', value: 'Desktop application' }
] as MetaItem[];

const gallery = [
  {
    alt: 'Basic workspace',
    src: '/images/gvdeditor/example1.png'
  },
  {
    alt: 'Train Edit dialog',
    src: '/images/gvdeditor/example2.png'
  },
  {
    alt: 'Settings of all graphs in the folder with INISS program',
    src: '/images/gvdeditor/example3.png'
  },
  {
    alt: 'Basic workspace with dark mode on',
    src: '/images/gvdeditor/example4.png'
  }
];
</script>
