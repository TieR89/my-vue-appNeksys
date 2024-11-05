import { createRouter, createWebHistory } from 'vue-router'

// Изменим импорты на явные для отладки
const EntityListView = () => import('../views/EntityListView.vue')
const EntityCreateView = () => import('../views/EntityCreateView.vue')
const EntityEditView = () => import('../views/EntityEditView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: EntityListView,
    },
    {
      path: '/entity/create',
      name: 'entity-create',
      component: EntityCreateView,
    },
    {
      path: '/entity/edit/:id',
      name: 'entity-edit',
      component: EntityEditView,
    },
  ],
})

// Добавим обработку ошибок маршрутизации
router.onError(error => {
  console.error('Router error:', error)
})

export default router
