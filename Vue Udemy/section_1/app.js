const vm = Vue.createApp({
    data() {
        return {
            firstName: 'Daffa',
            middleName: '',
            lastName: 'Stanwood',
            url: 'https://google.com/',
            source_url: '<a href="https://google.com/" target="_blank">Google</a>',
            age: '20'
        }
    },

    methods: {
        fullName() {
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
        },
        increment() {
            this.age++
        },
        updateLastName(msg, event) {
            console.log(msg)
            this.lastName = event.target.value
        },
        updateMiddleName(event) {
            console.log(event)
            this.middleName = event.target.value
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