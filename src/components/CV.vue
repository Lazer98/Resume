<template>
  <v-main>
    <CVGB v-if="getLanguage=='english'"></CVGB>
    <CVDE v-if="getLanguage=='deutsch'"></CVDE>
    <CVIL v-if="getLanguage=='hebrew'"></CVIL>
  </v-main>
</template>
  
<script>
import { mapGetters } from "vuex";
import CVGB from '../components/english/CV.vue'
import CVDE from '../components/deutsch/CV.vue'
import CVIL from '../components/hebrew/CV.vue'

export default {
  name: 'ContactPage',
  data() {
    return {
     
    }
  },
  methods: {

  },
  components: {
    CVGB,
    CVDE,
    CVIL
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
  