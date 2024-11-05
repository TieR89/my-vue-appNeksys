<template>
  <form @submit.prevent="handleSubmit" class="max-w-2xl mx-auto p-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
        Title
      </label>
      <input
        id="title"
        v-model="form.title"
        type="text"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        :class="{ 'border-red-500': v$.title.$error }"
      />
      <div v-if="v$.title.$error" class="text-red-500 text-xs mt-1">
        {{ v$.title.$errors[0].$message }}
      </div>
    </div>

    <div class="mb-4">
      <label
        class="block text-gray-700 text-sm font-bold mb-2"
        for="description"
      >
        Description (Markdown)
      </label>
      <textarea
        id="description"
        v-model="form.description"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
        :class="{ 'border-red-500': v$.description.$error }"
      ></textarea>
      <div v-if="v$.description.$error" class="text-red-500 text-xs mt-1">
        {{ v$.description.$errors[0].$message }}
      </div>
    </div>

    <div class="mb-4">
      <label class="flex items-center">
        <input
          v-model="form.published"
          type="checkbox"
          class="form-checkbox h-4 w-4 text-blue-600"
        />
        <span class="ml-2">Published</span>
      </label>
    </div>

    <div class="mb-4">
      <label
        class="block text-gray-700 text-sm font-bold mb-2"
        for="published_from"
      >
        Published From
      </label>
      <input
        id="published_from"
        v-model="form.published_from"
        type="date"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>

    <div class="flex items-center justify-between">
      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        :disabled="v$.$invalid"
      >
        {{ submitButtonText }}
      </button>
      <button
        type="button"
        @click="$router.back()"
        class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Cancel
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, maxLength } from '@vuelidate/validators'
import type { EntityCreate } from '../types/entity'

const props = defineProps<{
  initialValue?: EntityCreate
  submitButtonText?: string
}>()

const emit = defineEmits<{
  (e: 'submit', value: EntityCreate): void
}>()

const form = reactive<EntityCreate>({
  id: props.initialValue?.id ?? 0,
  title: props.initialValue?.title ?? '',
  description: props.initialValue?.description ?? '',
  published: props.initialValue?.published ?? false,
  published_from: props.initialValue?.published_from ?? null,
})

const rules = computed(() => ({
  title: {
    required,
    maxLength: maxLength(50),
  },
  description: { required },
  published: { required },
}))

const v$ = useVuelidate(rules, form)

const handleSubmit = async () => {
  const isValid = await v$.value.$validate()
  if (isValid) {
    emit('submit', { ...form })
  }
}

</script>
