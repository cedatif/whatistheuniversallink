<template>
  <div v-if="searchedItem" class="bg-gray-900 mt-4 rounded-sm text-gray-50">
    <div
        v-for="(item, index) in items"
        :key="`item-${index}`"
        class="px-2 pt-2 last:pb-2 hover:bg-gray-600"
        @click="openItem(item)"
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
      <hr v-if="index !== (items.length -1)" class="border-0 bg-gray-50 bg-opacity-10 h-1px w-97 mx-auto mt-2">
    </div>
  </div>
</template>

<script>
import schemes from '../assets/json/schemes.json'
export default {
  name: 'AutocompleteResult',
  props: {
    searchedItem: {
      type: String,
      default: '',
    },
  },
  methods: {
    getItems(search) {
      return search.length >= 3 ? this.filterByValue(schemes, search) : [];
    },
    filterByValue(array, string) {
      return array.filter((app) => {
        return app.name.toLowerCase().includes(string.toLowerCase());
      });
    },
    openItem(selectedItem) {
      this.$emit('update:selectedItem', selectedItem);
    },
  },
  computed: {
    items: function() {
      return this.getItems(this.searchedItem);
    },
  },
};
</script>

<style scoped>

</style>
