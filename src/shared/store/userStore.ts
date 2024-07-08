import { defineStore } from 'pinia'
import { setUserInfo, resetUserInfo } from './jwtacessor'
import { computed, ref } from 'vue'

export type User = {
  login: string
}

export const userStore = defineStore('user', () => {
  const user = ref({} as User)

  const getUser = computed(() => {
    return user.value
  })

  const isLogged = computed(() => user.value.login && user.value.login != '')

  function setUser(login: string) {
    if (login) {
      user.value.login = login
      setUserInfo({ login: login } as User)
    }
  }

  function logout(this: any) {
    resetUserInfo()
    user.value = {} as User
  }

  return { getUser, isLogged, setUser, logout }
  // state: (): User => ({ login: '' }),
  // getters: {
  //   getUser(state) {
  //     return state.login
  //   },
  //   isLogged(state) {
  //     return state.login !== ''
  //   }
  // },
  // actions: {
  //   setUser(login: string) {
  //     if (login) {
  //       setUserInfo({ login: login } as User)
  //       this.login = login
  //     }
  //   },
  //   logout() {
  //     resetUserInfo()
  //     this.$reset()
  //   }
  // }
})
