import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// Import base CSS
import './assets/main.css'

const app = createApp(App)

// Add error handler
app.config.errorHandler = (err, instance, info) => {
  console.error('Global error:', err)
  console.error('Instance:', instance)
  console.error('Info:', info)
}

// Add warning handler
app.config.warnHandler = (msg, instance, trace) => {
  console.warn('Warning:', msg)
  console.warn('Instance:', instance)
  console.warn('Trace:', trace)
}

const pinia = createPinia()

app.use(pinia)
app.use(router)

// Debug output
console.log('App mounting...')

app.mount('#app')

console.log('App mounted')

// Debug router
router.beforeEach((to, from) => {
  console.log('Route change:', { from: from.path, to: to.path })
})
