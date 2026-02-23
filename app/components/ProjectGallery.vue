<template>
  <section class="mx-auto w-full max-w-6xl px-6">
    <div class="flex items-center justify-between gap-4">
      <h2 class="text-2xl font-semibold text-slate-900 dark:text-white">
        {{ title }}
      </h2>
    </div>
    <div class="mt-8 grid gap-6 md:grid-cols-2">
      <figure
        v-for="image in images"
        :key="image.src"
        class="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white/70 shadow-sm backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/40"
      >
        <button
          type="button"
          class="group relative flex h-72 w-full items-center justify-center bg-slate-50/60 p-3 transition hover:bg-slate-100/60 dark:bg-slate-900/40 dark:hover:bg-slate-900/70"
          @click="openImage(image)"
        >
          <img
            class="h-full w-full object-contain"
            :src="image.src"
            :alt="image.alt"
            loading="lazy"
          />
          <span
            class="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-700 opacity-0 shadow-sm transition group-hover:opacity-100 dark:border-slate-700/60 dark:bg-slate-950/80 dark:text-slate-200"
          >
            <VueIcon name="ph:arrows-out-simple" class="text-sm" />
            View
          </span>
        </button>
        <figcaption class="px-4 py-3 text-xs text-slate-500 dark:text-slate-400">
          {{ image.alt }}
        </figcaption>
      </figure>
    </div>

    <div
      v-if="activeImage"
      class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-6 backdrop-blur"
      @click.self="closeImage"
    >
      <div class="relative w-full max-w-5xl">
        <div class="flex items-center justify-between text-slate-100">
          <p class="text-sm uppercase tracking-[0.2em]">{{ activeImage.alt }}</p>
          <div class="flex items-center gap-2">
            <button
              type="button"
              class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white/60"
              aria-label="Zoom out"
              @click="zoomOut"
            >
              <VueIcon name="ph:minus" class="text-base" />
            </button>
            <button
              type="button"
              class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white/60"
              aria-label="Zoom in"
              @click="zoomIn"
            >
              <VueIcon name="ph:plus" class="text-base" />
            </button>
            <button
              type="button"
              class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white/60"
              aria-label="Close"
              @click="closeImage"
            >
              <VueIcon name="ph:x" class="text-base" />
            </button>
          </div>
        </div>
        <div
          ref="viewerRef"
          class="mt-4 flex max-h-[75vh] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60 p-4"
          :class="zoomLevel > 1 ? 'cursor-grab' : 'cursor-default'"
          @wheel.prevent="onWheel"
          @pointerdown="onPointerDown"
          @pointerup="onPointerUp"
          @pointerleave="onPointerUp"
          @pointermove="onPointerMove"
        >
          <img
            class="select-none object-contain transition"
            :class="zoomLevel > 1 ? 'cursor-grabbing' : ''"
            :style="{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoomLevel})`
            }"
            :src="activeImage.src"
            :alt="activeImage.alt"
            draggable="false"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import VueIcon from '@kalimahapps/vue-icons/VueIcon';

withDefaults(
  defineProps<{
    title?: string;
    images: { src: string; alt: string }[];
  }>(),
  {
    title: 'Gallery'
  }
);

const activeImage = ref<{ src: string; alt: string } | null>(null);
const zoomLevel = ref(1);
const pan = ref({ x: 0, y: 0 });
const isDragging = ref(false);
const dragStart = ref({ x: 0, y: 0 });
const panStart = ref({ x: 0, y: 0 });

const openImage = (image: { src: string; alt: string }) => {
  activeImage.value = image;
  zoomLevel.value = 1;
  pan.value = { x: 0, y: 0 };
};

const closeImage = () => {
  activeImage.value = null;
  zoomLevel.value = 1;
  pan.value = { x: 0, y: 0 };
};

const zoomIn = () => {
  zoomLevel.value = Math.min(zoomLevel.value + 0.25, 3);
};

const zoomOut = () => {
  zoomLevel.value = Math.max(zoomLevel.value - 0.25, 1);
  if (zoomLevel.value === 1) {
    pan.value = { x: 0, y: 0 };
  }
};

const onWheel = (event: WheelEvent) => {
  if (event.deltaY < 0) {
    zoomIn();
    return;
  }
  zoomOut();
};

const onPointerDown = (event: PointerEvent) => {
  if (zoomLevel.value <= 1) return;
  isDragging.value = true;
  dragStart.value = { x: event.clientX, y: event.clientY };
  panStart.value = { ...pan.value };
};

const onPointerMove = (event: PointerEvent) => {
  if (!isDragging.value) return;
  const dx = event.clientX - dragStart.value.x;
  const dy = event.clientY - dragStart.value.y;
  pan.value = { x: panStart.value.x + dx, y: panStart.value.y + dy };
};

const onPointerUp = () => {
  isDragging.value = false;
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeImage();
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown);
});
</script>
