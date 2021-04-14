<template>
  <main class="container p-6 mx-auto font-sans">
    <h1 class="text-4xl font-code font-bold dark:text-gray-50 text-center">What the scheme ?</h1>
    <div class="mt-10 mb-16 h-0.5 bg-indigo-400 w-32 mx-auto"></div>
    <search-form v-model:item="searchedApp"></search-form>
  </main>

</template>

<script>
import SearchForm from './components/SearchForm.vue'
export default {
  components: {SearchForm},
  data(){
    return {
      searchedApp: {}
    }
  }
}
</script>

<style>
</style>