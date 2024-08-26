<template>
  <v-container>
    <v-btn @click="increment">Count is: {{ count }}</v-btn>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useCounterStore } from "~/stores/counter";

const store = useCounterStore();
const count = ref(store.count);

function increment() {
  store.increment();
  count.value = store.count;
}
</script>
