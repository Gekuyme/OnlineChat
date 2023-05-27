import { ref } from 'vue'
import { defineStore } from 'pinia'

export const messageStore = defineStore('messages', () => {
    const Messages = ref([
        {
            type: 'text',
            author:'me',
            data:{
                text:"Dratuti",
            }
        },
        {
            type: 'text',
            author:'Mawko Pirawko',
            data:{
                text:"Darova",
            }
        },
        {
            type: 'text',
            author:'Mawko Pirawko',
            data:{
                text:"PHP Nadoel asdasdasdasdasdaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
            }
        },
        {
            type: 'text',
            author:'Mawko Pirawko',
            data:{
                text:"Laravel toje",
            }
        },
        {
            type: 'text',
            author:'me',
            data:{
                text:"JS Nadoel",
            }
        }
    ])

    return { Messages }
})
