<template>
  <ProjectLayout
    title="RawBankEditor"
    subtitle="Program for editing sound bank data for the INISS program"
    :actions="actions"
    :meta-items="metaItems"
    :gallery="gallery"
  >
    <ProjectContent>
      <p class="mt-4 text-base text-slate-600 dark:text-slate-300">
        This program is used to manage the sound bank located in the RAWBANK folder of the
        <a href="https://www.chaps.cz/cs/products/INISS" class="text-emerald-500">INISS program</a>.
        It is basically an extended version of the ZvukBase.exe program that comes with INISS.
        Compared to it, RawBankEditor has the following features:
      </p>
      <ul class="list-inside list-disc">
        <li class="text-base text-slate-600 dark:text-slate-300">Improved graphical interface</li>
        <li class="text-base text-slate-600 dark:text-slate-300">
          Automatic detection of the length of sounds
        </li>
        <li class="text-base text-slate-600 dark:text-slate-300">
          Converting .WAV sounds to .EWA and vice versa
        </li>
        <li class="text-base text-slate-600 dark:text-slate-300">
          A comprehensive list of errors, warnings and messages that the program found when checking
          the sound bank
        </li>
        <li class="text-base text-slate-600 dark:text-slate-300">
          Easily add and edit bank languages, sound groups and sounds themselves
        </li>
        <li class="text-base text-slate-600 dark:text-slate-300">Undo/Redo function</li>
      </ul>
      <p class="mt-4 text-base text-slate-600 dark:text-slate-300">
        RawBankEditor is programmed in C# 9 and uses .NET Framework 4.8.
      </p>
    </ProjectContent>
  </ProjectLayout>
</template>

<script setup lang="ts">
import type { ProjectAction, ProjectMetaItem, ProjectGalleryImage } from '#shared/types/project';

definePageMeta({
  title: 'RawBankEditor'
});

const actions: ProjectAction[] = [
  {
    label: 'Download',
    href: 'http://iniss.6f.sk/docs/rawbankeditor/na-stiahnutie/',
    icon: 'ph:download-simple',
    variant: 'primary'
  },
  {
    label: 'Website',
    href: 'http://iniss.6f.sk/docs/rawbankeditor/o-programe/',
    icon: 'ak:globe',
    variant: 'primary'
  },
  {
    label: 'GitHub',
    href: 'https://github.com/filif123/RawBankEditor',
    icon: 'ak:github-fill',
    variant: 'secondary'
  }
];

const metaItems: ProjectMetaItem[] = [
  { label: 'Technologies', type: 'chips', items: ['C#', 'Windows Forms'] },
  { label: 'Development period', value: '07/2021 - 10/2022' },
  { label: 'Category', value: 'Desktop application' }
];

const gallery: ProjectGalleryImage[] = [
  {
    alt: 'Basic workspace',
    src: '/images/rawbankeditor/example1.png'
  },
  {
    alt: 'Basic workspace with dark mode on',
    src: '/images/rawbankeditor/example2.png'
  }
];
</script>
