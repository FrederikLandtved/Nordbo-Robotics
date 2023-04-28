import router from '@/router'

export const goToRoute = (route) => {
  router.push({ path: route });
}