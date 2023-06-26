<template>
  <v-main>
    <ContactGB v-if="getLanguage=='english'"></ContactGB>
    <ContactDE v-if="getLanguage=='deutsch'"></ContactDE>
    <ContactIL v-if="getLanguage=='hebrew'"></ContactIL>
  </v-main>
</template>
  
<script>
import { mapGetters } from "vuex";
import ContactGB from '../components/english/Contact.vue'
import ContactDE from '../components/deutsch/Contact.vue'
import ContactIL from '../components/hebrew/Contact.vue'

export default {
  name: 'ContactPage',
  data() {
    return {
     
    }
  },
  methods: {

  },
  components: {
    ContactGB,
    ContactDE,
    ContactIL
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
  