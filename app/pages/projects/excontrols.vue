<template>
  <ProjectLayout
    title="ExControls"
    subtitle="Extended controls for Windows Forms"
    :actions="actions"
    :meta-items="metaItems"
  >
    <ProjectContent>
      <p class="mt-4 text-base text-slate-600 dark:text-slate-300">
        This library features extensions over some of the classic controls, most of which expand
        their ability to customize visuals and colors. The ExControls library was originally created
        as part of the GVDEditor program for the dark mode of the graphical interface.
      </p>
      <p class="text-base text-slate-600 dark:text-slate-300">These controls have been extended:</p>
      <ul class="list-inside list-disc">
        <li class="text-base text-slate-600 dark:text-slate-300">
          ComboBox (also its variant in ToolStrip and DataGridView)
        </li>
        <li class="text-base text-slate-600 dark:text-slate-300">CheckBox</li>
        <li class="text-base text-slate-600 dark:text-slate-300">DateTimePicker (partial)</li>
        <li class="text-base text-slate-600 dark:text-slate-300">GroupBox</li>
        <li class="text-base text-slate-600 dark:text-slate-300">
          CheckBox (also its variant in DataGridView)
        </li>
        <li class="text-base text-slate-600 dark:text-slate-300">CheckedListBox</li>
        <li class="text-base text-slate-600 dark:text-slate-300">MaskedTextBox</li>
        <li class="text-base text-slate-600 dark:text-slate-300">NumericUpDown</li>
        <li class="text-base text-slate-600 dark:text-slate-300">RadioButton</li>
        <li class="text-base text-slate-600 dark:text-slate-300">TabControl</li>
        <li class="text-base text-slate-600 dark:text-slate-300">TextBox</li>
      </ul>
      <p class="text-base text-slate-600 dark:text-slate-300">These controls have been added:</p>
      <ul class="list-inside list-disc">
        <li class="text-base text-slate-600 dark:text-slate-300">LineSeparator</li>
      </ul>
      <p class="text-base text-slate-600 dark:text-slate-300">
        These components have been extended:
      </p>
      <ul class="list-inside list-disc">
        <li class="text-base text-slate-600 dark:text-slate-300">FolderBrowserDialog</li>
      </ul>
    </ProjectContent>
  </ProjectLayout>
</template>

<script setup lang="ts">
import type { ProjectAction, ProjectMetaItem } from '#shared/types/project';

definePageMeta({
  title: 'ExControls'
});

const actions: ProjectAction[] = [
  {
    label: 'Download',
    href: 'https://www.nuget.org/packages/ExControls/',
    icon: 'ph:download-simple',
    variant: 'primary'
  },
  {
    label: 'GitHub',
    href: 'https://github.com/filif123/ExControls',
    icon: 'ak:github-fill',
    variant: 'secondary'
  }
];

const metaItems: ProjectMetaItem[] = [
  { label: 'Technologies', type: 'chips', items: ['C#', 'Windows Forms'] },
  { label: 'Development period', value: '09/2021 - 09/2022' },
  { label: 'Category', value: 'Library' }
];
</script>
