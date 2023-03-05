import { defineStore } from 'pinia'

export const useValueStore = defineStore('value',{
    state: () => ({
        personInfo:[{
            name:'',
            email:'',
            gender:''
        }],
        valueRadio:'',
        dataQst: null,
        dataAnswers: null,
        ANSWERS: 0,
        NOANSWERS: 0
    }),
    actions:{
        async getQST(){
            const URL = 'http://localhost:3000/questions'
            const res = await fetch(URL)
            this.dataQst = await res.json()

            const URL_ANSWERS = 'http://localhost:3000/answers'
            const response = await fetch(URL_ANSWERS)
            this.dataAnswers = await response.json()
        },
    }
})
