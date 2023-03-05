import { defineStore } from "pinia";
export const useOpenCloseStore = defineStore('openClose', {
    state: () => ({
        status: false
    }),
    actions: {
        open() {
            this.status = true
        },
        close() {
            this.status = false
        }
        
    }
})