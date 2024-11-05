<template>
  <div class="max-w-6xl mx-auto p-4">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">Entities</h1>
      <router-link
        to="/entity/create"
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Create New
      </router-link>
    </div>

    <!-- Filter -->
    <div class="mb-6">
      <input
        v-model="filter.title"
        type="text"
        placeholder="Filter by title..."
        class="shadow appearance-none border rounded w-full md:w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="text-center py-4">
      <div
        class="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"
      ></div>
    </div>

    <!-- Error State -->
    <div
      v-else-if="error"
      class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <span class="block sm:inline">{{ error }}</span>
    </div>

    <!-- Entity List -->
    <div v-else class="bg-white shadow-md rounded my-6">
      <table class="min-w-full table-auto">
        <thead>
          <tr class="bg-gray-100">
            <th class="px-4 py-2">Title</th>
            <th class="px-4 py-2">Description</th>
            <th class="px-4 py-2">Status</th>
            <th class="px-4 py-2">Published From</th>
            <th class="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="entity in filteredEntities"
            :key="entity.id"
            class="border-b hover:bg-gray-50"
          >
            <td class="px-4 py-2">{{ entity.title }}</td>
            <td class="px-4 py-2">
              <div class="max-w-xs overflow-hidden text-ellipsis">
                {{ entity.description.substring(0, 100) }}...
              </div>
            </td>
            <td class="px-4 py-2">
              <span
                :class="{
                  'bg-green-100 text-green-800': entity.published,
                  'bg-gray-100 text-gray-800': !entity.published,
                }"
                class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
              >
                {{ entity.published ? 'Published' : 'Draft' }}
              </span>
            </td>
            <td class="px-4 py-2">
              {{
                entity.published_from
                  ? formatDate(entity.published_from)
                  : 'Not set'
              }}
            </td>
            <td class="px-4 py-2">
              <div class="flex space-x-2">
                <router-link
                  :to="`/entity/edit/${entity.id}`"
                  class="text-blue-600 hover:text-blue-900"
                >
                  Edit
                </router-link>
                <button
                  @click="confirmDelete(entity)"
                  class="text-red-600 hover:text-red-900"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Delete Confirmation Modal -->
    <DeleteConfirmationModal
      v-if="showDeleteModal"
      :entity="entityToDelete"
      @confirm="handleDelete"
      @cancel="cancelDelete"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useEntityStore } from '../stores/entity'
import type { Entity, EntityFilter } from '../types/entity'
import DeleteConfirmationModal from '../components/DeleteConfirmationModal.vue'
import dayjs from 'dayjs'
import { storeToRefs } from 'pinia'

const store = useEntityStore()
const filter = ref<EntityFilter>({ title: '' })
const showDeleteModal = ref(false)
const entityToDelete = ref<Entity | null>(null)

const { entities, loading, error } = storeToRefs(store)

const filteredEntities = computed(() => {
  return store.filteredEntities(filter.value)
})

const formatDate = (date: string) => {
  return dayjs(date).format('YYYY-MM-DD')
}

const confirmDelete = (entity: Entity) => {
  entityToDelete.value = entity
  showDeleteModal.value = true
}

const handleDelete = async () => {
  if (entityToDelete.value) {
    await store.deleteEntity(entityToDelete.value.id)
    showDeleteModal.value = false
    entityToDelete.value = null
  }
}

const cancelDelete = () => {
  showDeleteModal.value = false
  entityToDelete.value = null
}

onMounted(async () => {
  await store.fetchEntities()
})
</script>
