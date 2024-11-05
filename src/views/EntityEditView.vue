<template>
  <div class="max-w-4xl mx-auto p-4">
    <div v-if="loading" class="text-center py-4">
      <div
        class="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"
      ></div>
    </div>

    <div
      v-else-if="error"
      class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
    >
      {{ error }}
    </div>

    <template v-else>
      <h1 class="text-2xl font-bold mb-6">Edit Entity</h1>

      <EntityForm
        v-if="entity"
        :initial-value="entity"
        submit-button-text="Update"
        @submit="handleUpdate"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useEntityStore } from '../stores/entity'
import EntityForm from '../components/EntityForm.vue'
import type { Entity, EntityCreate } from '../types/entity'

const route = useRoute()
const router = useRouter()
const store = useEntityStore()

const entity = ref<Entity | null>(null)
const loading = ref(false)
const error = ref<string | null>(null)

const loadEntity = async () => {
  const id = parseInt(route.params.id as string)
  if (isNaN(id)) {
    error.value = 'Invalid entity ID'
    return
  }

  loading.value = true
  try {
    const foundEntity = store.getEntityById(id)
    if (!foundEntity) {
      throw new Error('Entity not found')
    }
    entity.value = foundEntity
  } catch (err) {
    error.value = 'Failed to load entity'
    console.error(err)
  } finally {
    loading.value = false
  }
}

const handleUpdate = async (updatedEntity: EntityCreate) => {
  if (!entity.value) return

  try {
    await store.updateEntity(entity.value.id, updatedEntity)
    router.push('/')
  } catch (error) {
    console.error('Failed to update entity:', error)
  }
}

onMounted(loadEntity)
</script>
