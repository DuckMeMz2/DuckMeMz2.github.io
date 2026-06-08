<template>
  <article class="project-detail">
    <RouterLink class="back-link" to="/">Back to portfolio</RouterLink>
    <ProjectSummary :project="project" />

    <MediaBlock :media="project.detailMedia" class="project-hero-media" />

    <section class="content-section">
      <p class="eyebrow">Key contributions</p>
      <h2>What I owned</h2>
      <ul class="contribution-list">
        <li v-for="item in project.contributions" :key="item">{{ item }}</li>
      </ul>
    </section>

    <MediaCarousel v-if="project.carousel" :items="project.carousel" />

    <section
      v-for="section in project.sections"
      :key="section.title"
      class="content-section project-section"
    >
      <div>
        <h2>{{ section.title }}</h2>
        <p v-for="paragraph in section.body" :key="paragraph">{{ paragraph }}</p>
      </div>
      <MediaBlock
        v-if="section.media"
        :media="section.media"
        :caption="section.media.label"
      />
    </section>
  </article>
</template>

<script setup>
import MediaBlock from "@/components/MediaBlock.vue";
import MediaCarousel from "@/components/MediaCarousel.vue";
import ProjectSummary from "@/components/ProjectSummary.vue";

defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>
