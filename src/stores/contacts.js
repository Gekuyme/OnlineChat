import { ref } from 'vue'
import { defineStore } from 'pinia'

export const contactStore = defineStore('contacts', () => {
    const contacts = ref([
        {
            img: "https://img-host.ru/qIF6M.png",
            status: "checked",
            name: "Mawko Pirawko",
        },
        {
            img: "https://img-host.ru/TJpc0.png",
            status: "notchecked",
            name: "Urec Borec",
        },
        {
            img: "https://img-host.ru/bbrl9.png",
            status: "reply",
            name: "Dudko Ivanovich",
        },
        {
            img: "https://img-host.ru/Cc4Xt.png",
            status: "notchecked",
            name: "Aslan Poslan",
        },
        {
            img: "https://img-host.ru/5rzwF.png",
            status: "checked",
            name: "Alex Shmel",
        },
    ])
    
    const currentUser = ref();
    const currentStatus = ref("last seen recently")


    function setCurrentUser(val) {
        currentUser.value = val.name
    }
    function getContent(val) {
        switch (val.status) {
            case "checked":
                return "kak sdelat arch"
            case "notchecked":
                return `${val.name} is typing....`
            case "reply":
                return "You: lorem ipsum"
            default:
                break;
        }
    }
    return { contacts, currentUser, setCurrentUser, currentStatus, getContent }
})
