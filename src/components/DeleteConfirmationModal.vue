<template>
  <div
    class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
    id="modal"
  >
    <div
      class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"
    >
      <div class="mt-3 text-center">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Confirm Delete
        </h3>
        <div class="mt-2 px-7 py-3">
          <p class="text-sm text-gray-500">
            Are you sure you want to delete "{{ entity?.title }}"? This action
            cannot be undone.
          </p>
        </div>
        <div class="items-center px-4 py-3">
          <button
            @click="$emit('confirm')"
            class="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 mb-2"
          >
            Delete
          </button>
          <button
            @click="$emit('cancel')"
            class="px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Entity } from '../types/entity'

defineProps<{
  entity: Entity | null
}>()

defineEmits<{
  (e: 'confirm'): void
  (e: 'cancel'): void
}>()
</script>
