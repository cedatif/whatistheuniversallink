<template>
    <div>
    <span class="absolute mt-2.5 ml-4 text-purple-lighter">
      <icone-loupe />
    </span>
      <input type="search"
             v-model="searchedApp"
             @input="getItems"
             @keydown.down="onArrowDown"
             @keydown.up="onArrowUp"
             @keydown.enter="openItem"
             name="search"
             class="border-none bg-gray-50 dark:bg-white h-10 rounded-sm w-full p-2 pl-12 text-xl focus:outline-none"
             autocomplete="on"
             placeholder="Application name">

    <div v-if="filteredData.length > 0 && !selectedItem"
         class="bg-gray-900 mt-4 rounded-sm text-gray-50"
    >
      <div
          v-for="(item, index) in filteredData"
          :ref="`item-${index}`"
          :key="`item-${index}`"
          class="px-2 pt-2 last:pb-2 hover:bg-gray-600"
          :class="{'bg-gray-600': isActive(index)}"
          @click="selectedItem = item"
      >
        <div class="grid grid-cols-a-1-a items-center px-1">
          <span class="w-14 p-1" v-html="item.svgIcon"></span>
          <div class="m-1">
            <p>{{ item.name }}</p>
            <p class="text-gray-400 text-sm">{{ item.desc }}</p>
          </div>
          <div class="text-gray-500">
            <p>{{ item.platform }}</p>
          </div>
        </div>
        <hr v-if="index !== (filteredData.length -1)" class="border-0 bg-gray-50 bg-opacity-10 h-1px w-97 mx-auto mt-2">
      </div>
    </div>
    <app-detail v-if="selectedItem" :item="selectedItem"></app-detail>
    </div>
</template>

<script>
import AppDetail from './AppDetail.vue'
import schemes from '../assets/json/schemes.json'
import IconeLoupe from './commons/icone-loupe.vue'

export default {
  name: 'SearchForm',
  components: {
    IconeLoupe,
    AppDetail,
  },
  props: {
    item: Object,
  },
  data() {
    return {
      items: [],
      searchedApp: '',
      filteredData: [],
      selectedItem: false,
      selectedItemIndex: -1
    };
  },
  methods: {
    getItems() {
      this.selectedItem = false
      this.filteredData =  this.searchedApp.length >= 3 ? this.filterByValue(schemes, this.searchedApp) : [];
    },
    filterByValue(array, string) {
      return array.filter((app) => {
        return app.name.toLowerCase().includes(string.toLowerCase());
      });
    },
    onArrowDown: function (e) {
      if (this.selectedItemIndex < (this.filteredData.length - 1) ) {
        this.selectedItemIndex = this.selectedItemIndex + 1;
      }
      this.searchedApp = this.filteredData[this.selectedItemIndex].name
    },
    onArrowUp() {
      if (this.selectedItemIndex > 0) {
        this.selectedItemIndex = this.selectedItemIndex - 1;
      }
      this.searchedApp = this.filteredData[this.selectedItemIndex].name

    },
    isActive: function (index){
      return index === this.selectedItemIndex
    },
    openItem() {
      this.selectedItem = this.filteredData[this.selectedItemIndex]
      this.filteredData = []
      this.selectedItemIndex = -1
    },
  },
};
</script>

<style scoped>

</style>
