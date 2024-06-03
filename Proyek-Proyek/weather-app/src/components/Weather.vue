<template>
  <div class="container p-0">
    <div class="d-flex">
      <div class="card main-div w-100">
        <div class="p-3">
          <h2 class="mb-1 day">Tuesday</h2>
          <p class="text-light date mb-0">date</p>
          <small>time</small>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default (await import('vue')).defineComponent({
  name: 'myWeather',
  components: {

  },
})

</script>

<style>

</style>
