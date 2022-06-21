<template>
  <h1>{{title}}</h1>
  <p>Welcome ...</p>
  <teleport to=".modals" v-if="showModal">
      <Modal theme="" @close="toggleModal">
        <template v-slot:links>
          <a href="#">sign up now</a>
          <a href="#">More info</a>
        </template>
        <h1>NieR: Automata</h1>
        <p>Beli game NieR: Automata setengah harga!</p>
      </Modal>
  </teleport>

  <div v-if="showModalDua">
      <Modal @close="toggleModalDua">
        <h1>NieR: Automata</h1>
        <p>Beli game NieR: Automata setengah harga!</p>
      </Modal>
  </div>

  <button @click.alt="toggleModal">open modal (alt)</button>
  <br>
  <button @click.shift="toggleModalDua">open modal (shift)</button>

</template>

<script>

import Modal from "./components/Modal.vue"

export default {
  name: 'App',
  components: {Modal},
  data(){
    return{
      title: "NieR: Automata :)",
      showModal: false,
      showModalDua: false
    }
  },
  methods:{
    handleclick(){
      console.log(this.$refs.name)
      this.$refs.name.classList.add("active")
      this.$refs.name.focus()
    },
    toggleModal(){
      this.showModal = !this.showModal;
    },
    toggleModalDua(){
      this.showModalDua = !this.showModalDua;
    }
  }
}
</script>

<style>
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1{
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
