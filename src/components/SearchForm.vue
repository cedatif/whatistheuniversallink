<template>
  <div>
    <div class="relative mx-auto text-gray-600">
    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" class="w-6 h-6 text-indigo-800"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
    </span>
      <input type="search"
             v-model="searchedApp"
             @click="reset"
             name="search"
             class="border-none bg-gray-50 dark:bg-white h-10 rounded-sm w-full p-2 pl-12 text-xl focus:outline-none"
             autocomplete="on"
             placeholder="Application name">
    </div>
    <autocomplete-result
        :searched-item="searchedApp"
        v-model:selectedItem="selectedItem"
        v-if="searchedApp.length >= 3 && !selectedItem.name">
    </autocomplete-result>
    <app-detail v-if="searchedApp.length >= 3 && selectedItem.name" :item="selectedItem"></app-detail>
  </div>

</template>

<script>
import AutocompleteResult from '../components/AutocompleteResult.vue'
import AppDetail from './AppDetail.vue'

export default {
  name: 'SearchForm',
  components: {
    AppDetail,
    AutocompleteResult,
  },
  props: {
    item: Object,
  },
  data() {
    return {
      items: [],
      searchedApp: '',
      filteredData: [],
      selectedItem: {},
    };
  },
  methods: {
    reset() {
      this.selectedItem = {};
      this.searchedApp = '';
    },
  },
};
</script>

<style scoped>

</style>
