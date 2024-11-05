<template>
  <div class="max-w-4xl mx-auto p-4">
    <h1 class="text-2xl font-bold mb-6">Create New Entity</h1>

    <EntityForm
      submit-button-text="Create"
      @submit="handleCreate"
    />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useEntityStore } from '../stores/entity';
import EntityForm from '../components/EntityForm.vue';
import type { EntityCreate } from '../types/entity';

const router = useRouter();
const store = useEntityStore();

const handleCreate = async (entity: EntityCreate) => {
  try {
    await store.createEntity(entity);
    router.push('/');
  } catch (error) {
    console.error('Failed to create entity:', error);
  }
};
</script>
