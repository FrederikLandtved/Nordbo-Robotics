import { createRouter, createWebHistory } from 'vue-router'
import { authentication } from '../../firebase';

import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: '/mylearning',
      name: 'mylearning',
      component: () => import('../views/MyLearningView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: () => import('../views/NotificationsView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/AuthView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUpView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const currentUser = authentication.currentUser

  if (requiresAuth && !currentUser) {
    next('/auth') // redirect to authentication page if not authenticated
  } else {
    console.log(currentUser);

    next() // proceed to next route
  }
})

export default router
