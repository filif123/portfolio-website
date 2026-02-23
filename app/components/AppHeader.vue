<template>
  <header
    class="sticky top-0 z-40 border-b border-slate-200/80 bg-white/70 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/70"
  >
    <div class="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
      <NuxtLink
        to="/"
        class="rounded-full border border-slate-200/70 bg-white px-4 py-2 text-sm font-semibold tracking-[0.2em] text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700/60 dark:bg-slate-900 dark:text-slate-100"
      >
        FV
      </NuxtLink>

      <nav
        class="hidden items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300 lg:flex"
      >
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="transition hover:text-slate-900 dark:hover:text-white"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="flex items-center gap-3">
        <div
          ref="projectsDropdownRef"
          class="relative hidden items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 md:flex"
        >
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-full border border-slate-200/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600 transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-700/60 dark:text-slate-300 dark:hover:text-white"
            aria-haspopup="menu"
            :aria-expanded="projectsOpen"
            @click="toggleProjects"
          >
            Projects
            <VueIcon :name="projectsOpen ? 'ph:caret-up' : 'ph:caret-down'" class="text-xs" />
          </button>
          <div
            v-if="projectsOpen"
            class="absolute right-0 top-9 w-56 rounded-2xl border border-slate-200/70 bg-white/95 p-2 text-[11px] uppercase tracking-[0.2em] text-slate-600 shadow-lg shadow-slate-900/10 backdrop-blur dark:border-slate-700/60 dark:bg-slate-950/90 dark:text-slate-300"
            role="menu"
          >
            <a
              v-for="project in projectLinks"
              :key="project.href"
              :href="project.href"
              class="flex items-center justify-between rounded-xl px-3 py-2 font-semibold transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-900/60 dark:hover:text-white"
              role="menuitem"
              @click="projectsOpen = false"
            >
              {{ project.label }}
              <VueIcon name="ph:arrow-up-right" class="text-xs" />
            </a>
          </div>
        </div>

        <button
          type="button"
          class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/70 bg-white text-slate-700 shadow-sm transition hover:shadow-md dark:border-slate-700/60 dark:bg-slate-900 dark:text-slate-100"
          aria-label="Toggle color mode"
          @click="startViewTransition"
        >
          <ColorScheme>
            <VueIcon :name="isDark ? 'ph:sun' : 'ph:moon'" class="text-lg" />
            <template #placeholder>
              <div class="size-8" />
            </template>
          </ColorScheme>
        </button>
      </div>
    </div>

    <div class="border-t border-slate-200/70 px-6 pb-4 pt-3 dark:border-slate-800/80 lg:hidden">
      <div class="flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="rounded-full border border-slate-200/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-700/60 dark:text-slate-200"
        >
          {{ link.label }}
        </a>
      </div>
      <div
        class="mt-4 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400"
      >
        <span class="mr-1">Projects</span>
        <a
          v-for="project in projectLinks"
          :key="project.href"
          :href="project.href"
          class="rounded-full border border-slate-200/70 px-3 py-1 font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-700/60 dark:text-slate-300"
        >
          {{ project.label }}
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import VueIcon from '@kalimahapps/vue-icons/VueIcon';

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Education', href: '/#education' },
  { label: 'Certificates', href: '/#certificates' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/#contact' }
];

const projectLinks = useState<{ label: string; href: string }[]>('projectLinks', () => [
  { label: 'Shopking', href: '/shopking' },
  { label: 'ShopkingApp', href: '/shopkingapp' },
  { label: 'GVDEditor', href: '/gvdeditor' },
  { label: 'RawBankEditor', href: '/rawbankeditor' },
  { label: 'ExControls', href: '/excontrols' },
  { label: 'AlgoCompare', href: '/algocompare' }
]);

const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === 'dark');

const nextTheme = computed(() => (colorMode.value === 'dark' ? 'light' : 'dark'));

const switchTheme = () => {
  colorMode.preference = nextTheme.value;
};

const startViewTransition = (event: MouseEvent) => {
  if (!document.startViewTransition) {
    switchTheme();
    return;
  }

  const x = event.clientX;
  const y = event.clientY;
  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  );

  const transition = document.startViewTransition(() => {
    switchTheme();
  });

  transition.ready.then(() => {
    const duration = 600;
    document.documentElement.animate(
      {
        clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]
      },
      {
        duration: duration,
        easing: 'cubic-bezier(.76,.32,.29,.99)',
        pseudoElement: '::view-transition-new(root)'
      }
    );
  });
};

const projectsOpen = ref(false);
const projectsDropdownRef = ref<HTMLElement | null>(null);

const toggleProjects = () => {
  projectsOpen.value = !projectsOpen.value;
};

const handleOutsideClick = (event: MouseEvent) => {
  if (!projectsDropdownRef.value) return;
  if (!projectsDropdownRef.value.contains(event.target as Node)) {
    projectsOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleOutsideClick);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleOutsideClick);
});
</script>
