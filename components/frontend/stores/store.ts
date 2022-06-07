// import {ref, computed} from 'nuxt'
import {defineStore} from 'pinia'
import {useStorage} from '@vueuse/core'

// @ts-ignore
export const useMainStore = defineStore('mainStore', {
    state: () => {
        return {
            user: useStorage('user', null)
        }
    },
    persist: true, // use persist for save store in user localstorage
    getters: {
        getUserId() {
            if (this.hasUserToken) {
                return this.user.id
            }
        }
    },
    actions: {
        addUserData(data) {
            this.user = data
        }
    }
})