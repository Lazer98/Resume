<template>
  <v-main>
    <AboutGB v-if="getLanguage=='english'"></AboutGB>
    <AboutDE v-if="getLanguage=='deutsch'"></AboutDE>
    <AboutIL v-if="getLanguage=='hebrew'"></AboutIL>
  </v-main>
</template>
  
<script>
import { mapGetters } from "vuex";
import AboutGB from '../components/english/About.vue'
import AboutDE from '../components/deutsch/About.vue'
import AboutIL from '../components/hebrew/About.vue'

export default {
  name: 'AboutPage',
  data() {
    return {
     
    }
  },
  methods: {

  },
  components: {
    AboutGB,
    AboutDE,
    AboutIL
  },
  computed: {
    ...mapGetters(["getLanguage"]),
   
  },


}
</script>
  
<style>
.white-text {
  color: white;
}
</style>
  