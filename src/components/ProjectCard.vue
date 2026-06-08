<template>
  <article class="project-card">
    <RouterLink class="project-card-link" :to="`/project/${project.slug}`">
      <div class="project-card-media">
        <MediaBlock :media="project.cardMedia" compact />
      </div>
      <div class="project-card-body">
        <p class="eyebrow">{{ project.category }}</p>
        <h3>{{ project.title }}</h3>
        <p class="project-card-subtitle">{{ project.subtitle }}</p>
        <p>{{ project.cardSummary }}</p>
        <ul class="tag-list" aria-label="Tools used">
          <li v-for="tool in project.tools.slice(0, 4)" :key="tool">{{ tool }}</li>
        </ul>
        <span class="text-link">View project</span>
      </div>
    </RouterLink>
  </article>
</template>

<script setup>
import MediaBlock from "@/components/MediaBlock.vue";

defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

