const vm = Vue.createApp({
    data() {
        return {
            firstName: 'Daffa',
            lastName: 'NieR'
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