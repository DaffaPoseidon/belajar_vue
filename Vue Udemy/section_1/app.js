const vm = Vue.createApp({
    data() {
        return {
            firstName: 'Daffa',
            lastName: 'NieR',
            url: 'https://google.com/',
            source_url: '<a href="https://google.com/" target="_blank">Google</a>',
            age: '20'
        }
    },

    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName.toUpperCase()}`
        },
        increment() {
            this.age++
        },
        changeName(event) {
            lastName = event.target.value
        }
    },

}).mount('#app')

setTimeout(() => {
    vm.firstName = 'Automata';
}, 5000)

// Vue.createApp({
//     data() {
//         return {
//             firstName: 'Yonah',
//             lastName: 'A2'
//         }
//     },
// }).mount('#app2')