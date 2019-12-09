<template>
  <div id="app">
    <Offerbox v-bind:course="apiData.course"/>
  </div>
</template>

<script>
import Data from '@/__mocks__/api.js'

import Offerbox from './components/Offerbox.vue'

export default {
  name: 'app',
  components: {
    Offerbox
  },
  data () {
    return {
      apiData: Data
    }
  }
}

</script>

<style>
  html {
    font-size: 14px;
  }

  #app {
    font-family: 'Montserrat', sans-serif;
    letter-spacing: -.5px;
  }
</style>
