<template>
  <ProjectLayout
    title="AlgoCompare"
    subtitle="A comparative visualizer of algorithms and data structures"
    :actions="actions"
    :meta-items="metaItems"
    :gallery="gallery"
  >
    <ProjectContent>
      <p class="mt-4 text-base text-slate-600 dark:text-slate-300">
        AlgoCompare is interactive system for comparative visualisation of algorithms and data
        structures. The application was developed as part of my bachelor and master thesis.
      </p>
      <p class="text-base text-slate-600 dark:text-slate-300">
        The application supports 3 basic modes:
      </p>
      <ul class="list-inside list-disc">
        <li class="text-base text-slate-600 dark:text-slate-300">
          <strong>Comparative mode</strong>, where the user selects the algorithms or data
          structures he wants to compare and enters input values that are applied to all selected
          algorithms. Within this mode, there is a special mode available for data structure
          visualizations, namely Interactive mode, which allows users to enter operations and input
          values while visualizing data structures.
        </li>
        <li class="text-base text-slate-600 dark:text-slate-300">
          <strong>Training mode</strong> is for students who want to test their understanding of a
          given algorithm. The student chooses an algorithm and then interacts with the
          visualization until they have solved the exercise.
        </li>
        <li class="text-base text-slate-600 dark:text-slate-300">
          <strong>Test mode</strong> allows teachers to create and manage tests for students to
          take.
        </li>
      </ul>
    </ProjectContent>
  </ProjectLayout>
</template>

<script setup lang="ts">
import type { ProjectAction, ProjectMetaItem, ProjectGalleryImage } from '#shared/types/project';

definePageMeta({
  title: 'AlgoCompare'
});

const actions: ProjectAction[] = [
  {
    label: 'Website',
    href: 'https://algocompare.kpi.fei.tuke.sk/en',
    icon: 'ak:globe',
    variant: 'primary'
  },
  {
    label: 'Website (alternative)',
    href: 'https://algocompare.fvat.sk/en',
    icon: 'ak:globe',
    variant: 'primary'
  },
  {
    label: 'Docs',
    href: 'https://algocompare.kpi.fei.tuke.sk/docs',
    icon: 'ak:book-open',
    variant: 'secondary'
  }
];

const metaItems: ProjectMetaItem[] = [
  {
    label: 'Technologies',
    type: 'chips',
    items: ['JavaScript', 'TypeScript', 'Vue 3', 'Nuxt', 'Prisma ORM', 'tRPC', 'Docker']
  },
  { label: 'Development period', value: '09/2022 - 05/2025' },
  { label: 'Category', value: 'Web application' }
];

const gallery: ProjectGalleryImage[] = [
  {
    alt: 'Homepage',
    src: '/images/algocompare/example0.png'
  },
  {
    alt: 'Comparative mode',
    src: '/images/algocompare/example1.png'
  },
  {
    alt: 'Training mode - interactive visualization of DFS algorithm',
    src: '/images/algocompare/example2.png'
  },
  {
    alt: 'Training mode - questions about data structures',
    src: '/images/algocompare/example3.png'
  }
];
</script>
