<template>
  <div class="space-y-16 pb-16">
    <section id="top" class="relative overflow-hidden pt-20">
      <div class="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p class="text-xs uppercase tracking-[0.4em] text-emerald-500">Portfolio</p>
          <h1
            class="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl"
          >
            Hi, I'm Filip. Informatics engineer focused on building reliable, practical software.
          </h1>
          <p class="mt-5 max-w-xl text-base text-slate-600 dark:text-slate-300">
            Graduate from the Technical University of Košice (FEI). I enjoy learning new things,
            work well in teams, and value clear, on-time delivery.
          </p>
          <div class="mt-8 flex flex-wrap gap-4">
            <a
              class="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:shadow-xl dark:bg-white dark:text-slate-900"
              href="https://github.com/filif123"
            >
              <VueIcon name="ak:github-fill" class="text-lg" />
              GitHub
            </a>
            <a
              class="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:shadow-xl dark:bg-white dark:text-slate-900"
              href="https://www.linkedin.com/in/filip-vateha-1766142a9/"
            >
              <VueIcon name="ak:linkedin-box-fill" class="text-lg" />
              LinkedIn
            </a>
            <a
              class="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:shadow-xl dark:bg-white dark:text-slate-900"
              href="#contact"
            >
              <VueIcon name="ph:envelope-simple" class="text-lg" />
              Email me
            </a>
          </div>
          <div class="mt-10 flex flex-wrap gap-8">
            <div v-for="stat in heroStats" :key="stat.label">
              <p class="text-2xl font-semibold text-slate-900 dark:text-white">
                {{ stat.value }}
              </p>
              <p class="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                {{ stat.label }}
              </p>
            </div>
          </div>
        </div>

        <div class="relative">
          <div
            v-if="currentJob"
            class="rounded-3xl border border-slate-200/70 bg-white/70 p-8 shadow-xl shadow-slate-900/10 backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/50"
          >
            <p class="text-xs uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
              Currently
            </p>
            <h3 class="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
              {{ currentJob.location }} {{ currentJob.meta }} developer
            </h3>
            <p class="mt-3 text-sm text-slate-600 dark:text-slate-300">
              {{ currentJob.description }}
            </p>
            <ul class="mt-5 space-y-2 text-sm text-slate-500 dark:text-slate-300">
              <li>{{ currentJob.title }}</li>
              <li>{{ currentJob.meta }} ecosystem</li>
              <li>Since {{ formatDate(currentJob.startDate) }}</li>
            </ul>
            <a
              class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-500 transition hover:text-emerald-400"
              href="#experience"
            >
              See experience
              <VueIcon name="ph:arrow-up-right" class="text-base" />
            </a>
          </div>
          <div
            v-else
            class="rounded-3xl border border-slate-200/70 bg-white/70 p-8 shadow-xl shadow-slate-900/10 backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/50"
          >
            <p class="text-xs uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
              Currently
            </p>
            <h3 class="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
              Looking for opportunities
            </h3>
            <p class="mt-3 text-sm text-slate-600 dark:text-slate-300">
              Recently graduated and actively seeking full-time positions in software development.
            </p>
            <a
              class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-500 transition hover:text-emerald-400"
              href="#contact"
            >
              Get in touch
              <VueIcon name="ph:arrow-up-right" class="text-base" />
            </a>
          </div>
          <span
            class="absolute right-6 top-6 rounded-full border border-emerald-300/60 bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700 dark:border-emerald-400/40 dark:bg-emerald-400/10 dark:text-emerald-300"
          >
            Open to opportunities
          </span>
        </div>
      </div>
    </section>

    <section id="about" class="scroll-mt-28 bg-slate-100/70 py-16 dark:bg-slate-900/40">
      <div class="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <SectionHeader title="About me" />
          <p class="mt-6 text-base text-slate-600 dark:text-slate-300">
            I graduated with a Master's degree in Informatics from the Technical University in
            Košice at the Faculty of Electrical Engineering and Informatics in May 2025.
          </p>
          <p class="mt-4 text-base text-slate-600 dark:text-slate-300">
            I like to learn new things. I am goal oriented, reliable and punctual. I have no problem
            working with people, I am a team player.
          </p>
        </div>
        <div class="space-y-4">
          <InfoCard title="Focus">
            Informatics, application development, practical engineering.
          </InfoCard>
          <InfoCard title="Strengths"> Reliable delivery, teamwork, clear communication. </InfoCard>
          <InfoCard title="Location"> Košice, Slovakia. </InfoCard>
        </div>
      </div>
    </section>

    <section id="projects" class="scroll-mt-28 py-16">
      <div class="mx-auto w-full max-w-6xl px-6">
        <SectionHeader
          title="Projects"
          description="A few highlights to showcase the type of work I enjoy."
        />
        <div class="mt-10 grid gap-6 lg:grid-cols-3">
          <InfoCard
            v-for="project in projects"
            :key="project.id"
            :url="project.url"
            :title="project.title"
            :meta-left="project.metaLeft"
            :meta-right="project.metaRight"
          >
            <p>{{ project.description }}</p>
            <p v-if="project.stack" class="mt-3 text-xs uppercase tracking-[0.2em] text-slate-400">
              {{ project.stack }}
            </p>
          </InfoCard>
        </div>
      </div>
    </section>

    <section id="education" class="scroll-mt-28 py-16">
      <div class="mx-auto w-full max-w-6xl px-6">
        <SectionHeader
          title="Education"
          description="Formal studies and specialization in informatics."
        />
        <div class="mt-10">
          <TimelineList :items="educationTimeline" />
        </div>
      </div>
    </section>

    <section id="certificates" class="scroll-mt-28 bg-slate-100/70 py-16 dark:bg-slate-900/40">
      <div class="mx-auto w-full max-w-6xl px-6">
        <SectionHeader
          title="Certificates"
          description="International and professional certifications."
        />
        <div class="mt-10 grid gap-6 lg:grid-cols-3">
          <InfoCard title="CCNA" meta-left="2022" meta-right="Cisco">
            Certification of basic IT in network hardware.
          </InfoCard>
          <InfoCard title="ECDL" meta-left="2019" meta-right="MS Office">
            Word, PowerPoint, Outlook modules.
          </InfoCard>
          <InfoCard title="AutoCAD Mechanical" meta-left="2017" meta-right="Autodesk">
            Internationally valid certificate for AUTODESK software.
          </InfoCard>
        </div>
      </div>
    </section>

    <section id="experience" class="scroll-mt-28 py-16">
      <div class="mx-auto w-full max-w-6xl px-6">
        <SectionHeader title="Work experience" description="Part-time roles while studying." />
        <div class="mt-10">
          <TimelineList :items="experienceTimeline" />
        </div>
      </div>
    </section>

    <section id="skills" class="scroll-mt-28 bg-slate-100/70 py-16 dark:bg-slate-900/40">
      <div class="mx-auto w-full max-w-6xl px-6">
        <SectionHeader
          title="Skills & Tools"
          description="Tools, languages, and frameworks I work with."
        />
        <div class="mt-10 grid">
          <SkillBlock :items="skills" />
        </div>
      </div>
    </section>

    <section id="contact" class="scroll-mt-28 py-16">
      <div
        class="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-8 rounded-3xl border border-slate-200/70 bg-white/70 px-6 py-12 shadow-lg shadow-slate-900/10 backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/40 md:flex-row md:items-center"
      >
        <div>
          <h2 class="text-2xl font-semibold text-slate-900 dark:text-white">Let's connect</h2>
          <p class="mt-3 text-sm text-slate-600 dark:text-slate-300">
            If you'd like to collaborate or discuss opportunities, feel free to reach out.
          </p>
        </div>
        <div class="flex flex-wrap gap-3">
          <a
            class="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:shadow-xl"
            href="mailto:vatehafilip@gmail.com"
          >
            Email me
            <VueIcon name="ph:paper-plane-tilt" class="text-base" />
          </a>
          <a
            class="inline-flex items-center gap-2 rounded-full border border-slate-200/80 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-700/70 dark:text-slate-200"
            href="#top"
          >
            Back to top
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import VueIcon from '@kalimahapps/vue-icons/VueIcon';

const heroStats = [
  { value: '2020', label: 'University start' },
  { value: '2023', label: 'Industry start' },
  { value: '2025', label: 'Master graduate' }
];

const projects = [
  {
    id: 'project-public-sector',
    title: 'Public sector IS modules',
    metaLeft: '2023 – Present',
    metaRight: '.NET',
    description: 'Contributed to modules that improve internal workflows for state services.',
    stack: 'C# • .NET • SQL',
    url: '/shopking'
  },
  {
    id: 'project-student-tools',
    title: 'Student tools suite',
    metaLeft: '2022 – 2024',
    metaRight: 'Vue',
    description: 'Built lightweight tools for coursework planning and task tracking.',
    stack: 'Vue 3 • TypeScript'
  },
  {
    id: 'project-portfolio',
    title: 'Personal portfolio',
    metaLeft: '2024 – 2025',
    metaRight: 'Nuxt',
    description: 'Designed and iterated on a portfolio that highlights growth and goals.',
    stack: 'Nuxt • Tailwind CSS'
  }
];

const skills = [
  { name: 'C#', icon: 'fl:filled-code-cs' },
  { name: 'TypeScript', icon: 'ak:typescript-fill' },
  { name: 'JavaScript', icon: 'ak:javascript-fill' },
  { name: 'Java', icon: 'la:java' },
  { name: 'C', icon: 'fl:filled-code-c' },
  { name: 'HTML', icon: 'an:filled-html-5' },
  { name: 'CSS', icon: 'bs:css' },
  { name: 'Vue 3', icon: 'la:vuejs' },
  { name: 'Nuxt', icon: 'co:brand-nuxt-js' },
  { name: 'SQL', icon: 'ca:sql' },
  { name: 'NodeJS', icon: 'bx:nodejs' },
  { name: 'Git', icon: 'ca:logo-git' },
  { name: 'Docker', icon: 'an:outlined-docker' },
  { name: 'Windows Forms', icon: 'md:window' },
  { name: 'ASP .NET Core', icon: 'co:brand-dot-net' },
  { name: 'Python', icon: 'la:python' },
  { name: 'Postman', icon: 'co:brand-postman' }
];

const educationTimeline = [
  {
    title: 'Master degree • Technical University of Košice',
    startDate: '2023-09',
    endDate: '2025-05',
    location: 'Košice',
    description: 'Faculty of Electrical Engineering and Informatics — Department of Informatics.',
    meta: 'Informatics'
  },
  {
    title: 'Bachelor degree • Technical University of Košice',
    startDate: '2020-09',
    endDate: '2023-06',
    location: 'Košice',
    description: 'Faculty of Electrical Engineering and Informatics — Department of Informatics.',
    meta: 'Informatics'
  },
  {
    title: 'Secondary School of Electrical Engineering',
    startDate: '2016-09',
    endDate: '2020-06',
    location: 'Košice',
    description: 'Technical Lyceum — Focus on application development.',
    meta: 'Technical Lyceum'
  }
];

const experienceTimeline = [
  {
    title: 'KDC s.r.o. | DITEC a.s.',
    startDate: '2025-07',
    endDate: null,
    location: 'Full time', //TODO junior/senior
    description:
      'Cooperation in the implementation of information systems in .NET technology for the state.',
    meta: '.NET'
  },
  {
    title: 'KDC s.r.o. | DITEC a.s.',
    startDate: '2023-07',
    endDate: '2025-07',
    location: 'Part time',
    description:
      'Cooperation in the implementation of information systems in .NET technology for the state.',
    meta: '.NET'
  },
  {
    title: 'LABAŠ s.r.o.',
    startDate: '2022-06',
    endDate: '2022-09',
    location: 'Part time',
    description: 'Preparing goods according to the order in the bulk warehouse.',
    meta: 'Logistics'
  }
];

const currentJob = computed(() => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = String(now.getMonth() + 1).padStart(2, '0');
  const currentDate = `${currentYear}-${currentMonth}`;

  return experienceTimeline.find((job) => {
    if (!job.startDate) return false;
    if (!job.endDate) {
      return job.startDate <= currentDate;
    }
    return job.startDate <= currentDate && job.endDate >= currentDate;
  });
});

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' };
  return date.toLocaleDateString(undefined, options);
}
</script>
