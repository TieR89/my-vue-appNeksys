import { defineStore } from 'pinia'
import type {
  Entity,
  EntityCreate,
  EntityFilter,
  EntityState,
} from '@/types/entity'

export const useEntityStore = defineStore('entity', {
  state: (): EntityState => ({
    entities: [
      {
        id: 1,
        title: 'Test Entity 1',
        description: 'This is a test entity',
        published: true,
        published_from: '2024-01-01',
      } as Entity,
      {
        id: 2,
        title: 'Test Entity 2',
        description: 'This is another test entity',
        published: false,
        published_from: null,
      } as Entity,
    ],
    loading: false,
    error: null,
  }),

  getters: {
    filteredEntities: state => (filter: EntityFilter) => {
      return state.entities.filter(entity => {
        if (filter.title) {
          return entity.title.toLowerCase().includes(filter.title.toLowerCase())
        }
        return true
      })
    },

    getEntityById: state => (id: number) => {
      return state.entities.find(entity => entity.id === id)
    },
  },

  actions: {
    async fetchEntities() {
      this.loading = true
      try {
        // TODO: Replace with actual API call
        // const response = await api.get('/entities');
        // this.entities = response.data;
        // this.entities = [] // Temporary
      } catch (error) {
        this.error = 'Failed to fetch entities'
        console.error(error)
      } finally {
        this.loading = false
      }
    },

    async createEntity(entity: EntityCreate) {
      try {
        // TODO: Replace with actual API call
        // const response = await api.post('/entities', entity);
        // return response.data;
        const newEntity = {
          ...entity,
          id: Math.max(0, ...this.entities.map(e => e.id)) + 1,
        }
        this.entities.push(newEntity)
        return newEntity
      } catch (error) {
        this.error = 'Failed to create entity'
        throw error
      }
    },

    async updateEntity(id: number, entity: EntityCreate) {
      try {
        // TODO: Replace with actual API call
        // const response = await api.put(`/entities/${id}`, entity);
        // return response.data;
        const index = this.entities.findIndex(e => e.id === id)
        if (index !== -1) {
          this.entities[index] = { ...entity, id }
          return this.entities[index]
        }
        throw new Error('Entity not found')
      } catch (error) {
        this.error = 'Failed to update entity'
        throw error
      }
    },

    async deleteEntity(id: number) {
      try {
        // TODO: Replace with actual API call
        // await api.delete(`/entities/${id}`);
        const index = this.entities.findIndex(e => e.id === id)
        if (index !== -1) {
          this.entities.splice(index, 1)
        }
      } catch (error) {
        this.error = 'Failed to delete entity'
        throw error
      }
    },
  },
})
