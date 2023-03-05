import { defineStore } from 'pinia'

export const useTimerStore = defineStore('timer',{
    state: () => ({
        displayMinutes:0,
        displaySeconds:0,
        displayHours:0,
        displayDays:0
    }),
    actions:{
    }
})
