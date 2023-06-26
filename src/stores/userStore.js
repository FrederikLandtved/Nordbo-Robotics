import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
      user: {}
    }),
    actions: {
      updateUserEmail(newEmail) {
          this.user.email = newEmail;
      }
    }
})

