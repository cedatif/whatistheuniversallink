<template>
  <div class="bg-gray-900 mt-4 p-2 rounded-sm text-gray-50 divide-y-2 divide-gray-50 divide-opacity-10">
    <div class="py-2 first:pt-0">
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
    </div>
    <div class="px-1">
      <div class="pt-2.5 flex flex-col" v-if="item.site" >
        <span>Website:</span>
        <a href="{{ item.site }}">{{ item.site }}</a>
      </div>
      <div class="mt-5">
        <span>Schemes :</span>
        <div class="pt-2 divide-y-2 divide-gray-50 divide-opacity-10">
          <div class="mt-4 pt-4 first:mt-0 first:pt-0" v-for="(scheme, index) in item.schemes" :key="`item-${index}`">
            <div class="flex">
              <span
                  class="bg-gray-600 bg-opacity-40 py-1.5 pl-4 cursor-text flex-auto"
              >
                {{ scheme.scheme }}
              </span>
              <copybutton :value-to-copy="scheme.scheme"></copybutton>
            </div>
            <span class="w-full text-gray-400 italic text-sm">
              {{ scheme.action }}
            </span>
          </div>
        </div>

      </div>
    </div>
</div>
</template>

<script>
import {ref} from 'vue';
import Copybutton from '../components/commons/Copybutton.vue';
export default {
  name: 'AppDetail',
  components: {Copybutton},
  props: {
    item: Object,
  },
  setup() {
    const isCopied = ref('');
    const buttonMessage = ref('Copy');
    const resetCopy = () => {
      isCopied.value = '';
      buttonMessage.value = 'Copy';
    };
    const onCopy = (e) => {
      console.log('ok');
      const index = e.trigger.name;
      isCopied.value = index;
      buttonMessage.value = 'Copied !';
      console.log(index);
    };
    const onError = (e) => {
      alert('Failed to copy texts');
    };

    return {onCopy, onError, isCopied, buttonMessage, resetCopy};
  },
};
</script>

<style scoped>

</style>
