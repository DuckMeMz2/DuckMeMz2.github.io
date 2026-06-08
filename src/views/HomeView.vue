<template>
  <div class="home-view">
    <section class="hero shell" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow">Gameplay programmer</p>
        <h1 id="hero-title">
          I build gameplay systems that are readable, scalable, and fun to tune.
        </h1>
        <p>
          I am Dan Farnham, a Games Computing student focused on combat, AI,
          Unreal, Unity, and C++. My strongest work so far is on Samsara, where
          I built an enemy for a commercial souls-like and was invited back for
          paid freelance programming.
        </p>
        <div class="button-row">
          <RouterLink class="button button-primary" to="/project/samsara">
            View Samsara work
          </RouterLink>
          <RouterLink class="button button-secondary" to="/resume">
            Resume
          </RouterLink>
        </div>
      </div>

      <aside class="hero-panel" aria-label="Portfolio highlights">
        <img
          class="profile-image"
          src="/docs/assets/profile-image.png"
          alt="Daniel Farnham"
        />
        <dl class="highlight-list">
          <div>
            <dt>Professional signal</dt>
            <dd>Paid freelance Unreal work</dd>
          </div>
          <div>
            <dt>Core strengths</dt>
            <dd>Gameplay AI, C++, systems design</dd>
          </div>
          <div>
            <dt>Best project result</dt>
            <dd>Programming 1 - 100%</dd>
          </div>
        </dl>
      </aside>
    </section>

    <section
      v-for="group in projectGroups"
      :id="group.id"
      :key="group.id"
      class="project-group shell"
      :aria-labelledby="`${group.id}-heading`"
    >
      <div class="section-heading">
        <p class="eyebrow">{{ group.eyebrow }}</p>
        <h2 :id="`${group.id}-heading`">{{ group.title }}</h2>
        <p>{{ group.description }}</p>
      </div>

      <div :class="['project-grid', { 'project-grid-featured': group.slugs.length === 1 }]">
        <ProjectCard
          v-for="project in projectsForGroup(group)"
          :key="project.slug"
          :project="project"
        />
      </div>
    </section>

    <EducationSection class="shell" />
  </div>
</template>

<script setup>
import EducationSection from "@/components/EducationSection.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import { projectGroups, projectsForGroup } from "@/data/projects";
</script>

