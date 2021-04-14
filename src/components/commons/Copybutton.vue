<template>
  <button
      type="button"
      :onmouseleave="resetCopy"
      :class="
                    isCopied ?
                    'hover:bg-green-800' : 'bg-indigo-600 hover:bg-indigo-800'"
      class="py-1 px-3 rounded-sm"
      v-clipboard:copy="valueToCopy"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError">{{ buttonMessage }}</button>
</template>

<script>
import {ref} from 'vue';
export default {
  name: 'Copybutton',
  props: {
    valueToCopy: String,
  },
  setup() {
    const isCopied = ref(false)
    const buttonMessage = ref('Copy')

    const resetCopy = () => {
      isCopied.value = false
      buttonMessage.value = 'Copy'
    };
    const onCopy = () => {
      isCopied.value = true
      buttonMessage.value = 'Copied !'
    };
    const onError = () => {
      alert('Failed to copy texts')
    };

    return {onCopy, onError, isCopied, buttonMessage, resetCopy};
  },
};
</script>

<style scoped>

</style>
