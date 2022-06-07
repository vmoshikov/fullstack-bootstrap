<script setup>
import {createPinia} from 'pinia'

const pinia = createPinia()

import {useMainStore} from "/stores/store.ts";

const mainStore = useMainStore();

let count = ref(1)

function plusCount() {
  this.count++
}

function minusCount() {
  this.count--
}
</script>

<template>

  <section>
    <div class="container">
      <h1>Hello Nuxt3 World</h1>
      <p>from @vmoshikov. Clap {{ count }} times</p>

      <button
          v-on:click="minusCount()"
          class="btn btn-secondary btn-xs btn-icon">
        -
      </button>
      <button
          v-on:click="plusCount()"
          class="btn btn-secondary btn-xs btn-icon">
        +
      </button>
    </div>
  </section>

</template>