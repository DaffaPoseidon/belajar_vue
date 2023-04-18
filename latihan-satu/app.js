// 1. Memeriksa apakah Vue sudah berfungsi atau belum dengan Vue CDN
// console.log("Hai Vue!")

// 2. Membuat App Vue
// const app = Vue.createApp({
//     //data, functions
//     template: '<h2>Iam the template</h2>'
// })

// 3. Data and Templates
// const app = Vue.createApp({
//     //data, functions
//     // template: '<h2>Iam the template</h2>'
//     data() {
//         return {
//             title: "NieR: Automata",
//             author: "Yoko Taro",
//             age: 45
//         }
//     }
// })

// 4. Click Events
// const app = Vue.createApp({
//     //data, functions
//     // template: '<h2>Iam the template</h2>'
//     data() {
//         return {
//             title: "NieR Automata",
//             author: "Yoko Taro",
//             age: 12
//         }
//     },
//     methods: {
//         changeTitle(title) {
//             this.title = title;
//         }
//     }
// })

// 5. Conditional Rendering
const app = Vue.createApp({
    //data, functions
    // template: '<h2>Iam the template</h2>'
    data() {
        return {
            showBooks: false,
            title: "NieR: Automata",
            author: "Yoko Taro",
            age: 45
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        }
    }
})

app.mount('#app')