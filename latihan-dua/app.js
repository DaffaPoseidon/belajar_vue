// Other mouse event

// const app = Vue.createApp({
//     data(){
//         return{
//             showBooks: true,
//             title: "NieR: Automata",
//             author: "Yoko Taro",
//             age: 55,
//             x: 0, 
//             y: 0
//         }
//     },
//     methods:{
//         toggleShowBooks(){
//             this.showBooks = !this.showBooks
//         },
//         handleEvent(e, data){
//             console.log(e, e.type);
//             if(data){
//                 console.log(data)
//             }
//         }
//     },
//     handleMousemove(e){
//         this.x = e.offsetX
//         this.y = e.offsetY
//     }
// })

// Outputting list (v-for)
// const app = Vue.createApp({
//     data(){
//         return{
//         showBooks: true,
//             books: [
//                 {title: "NieR: Automata", author: "Yoko Taro"},
//                 {title: "NieR: Automata", author: "Yoko Taro"},
//             ]
//         }
//     },
//     methods:{
//         toggleShowBooks(){
//             this.showBooks = !this.showBooks
//         }
//     }
// })

// Attribute Binding
// const app = Vue.createApp({
// data(){
//         return{
//             url: "www.google.com",
//             showBooks: true,
//             books: [
//                 {title: "NieR: Automata", author: "Yoko Taro", img: "assets/saveSatu.png"},
//                 {title: "NieR: Automata", author: "Yoko Taro", img: "assets/saveDua.jpg"},
//             ]
//         }
//     },
//     methods:{
//         toggleShowBooks(){
//             this.showBooks = !this.showBooks
//         }
//     }
// })

// Dynamic Classes
// const app = Vue.createApp({
//     data(){
//         return{
//             url: "www.google.com",
//             showBooks: true,
//             books: [
//                 {title: "NieR: Automata", author: "Yoko Taro", img: "assets/saveSatu.png", isFav: true},
//                 {title: "NieR: Automata", author: "Yoko Taro", img: "assets/saveDua.jpg", isFav: false},
//             ]
//         }
//     },
//     methods:{
//         toggleShowBooks(){
//             this.showBooks = !this.showBooks
//         },
//     }
// })

// Challenge 1A
// const app = Vue.createApp({
//     data(){
//         return{
//             url: "www.google.com",
//             showBooks: true,
//             showFavBooks: true,
//             books: [
//                 {title: "NieR: Automata", author: "Yoko Taro", img: "assets/saveSatu.png", isFav: true},
//                 {title: "NieR: Automata", author: "Yoko Taro", img: "assets/saveDua.jpg", isFav: false},
//             ]
//         }
//     },
//     methods:{
//         toggleShowBooks(){
//             this.showBooks = !this.showBooks
//         },
//         toggleShowFav(){
//             this.showFavBooks = !this.showFavBooks
//         }
//     },
// })

// Challenge 1B
// const app = Vue.createApp({
//     data(){
//         return{
//             url: "www.google.com",
//             showBooks: true,
//             showFavBooks: true,
//             books: [
//                 {title: "NieR: Automata", author: "Yoko Taro", img: "assets/saveSatu.png", isFav: true},
//                 {title: "NieR: Automata", author: "Yoko Taro", img: "assets/saveDua.jpg", isFav: false},
//             ]
//         }
//     },
//     methods:{
//         toggleShowBooks(){
//             this.showBooks = !this.showBooks
//         },
//         toggleShowFav(book){
//             book.isFav = !book.isFav
//         }
//     },
// })

// Computed Properties
const app = Vue.createApp({
    data(){
        return{
            url: "www.google.com",
            showBooks: true,
            showFavBooks: true,
            books: [
                {title: "NieR: Automata", author: "Yoko Taro", img: "assets/saveSatu.png", isFav: true},
                {title: "NieR: Automata", author: "Yoko Taro", img: "assets/saveDua.jpg", isFav: true},
            ]
        }
    },
    methods:{
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        toggleShowFav(book){
            book.isFav = !book.isFav
        }
    },
    computed:{
        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')