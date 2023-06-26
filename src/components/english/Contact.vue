<template>
  <v-main>
    <v-container>
      <v-row class="justify-center">
        <v-col cols="12" sm="6" class="text-center">
          <a href="https://wa.me/+972584874474">
            <svg-icon type="mdi" :path="pathWhatsapp" class="ml-10 mr-5 icon"></svg-icon>
          </a>
          <a href="https://www.linkedin.com/in/eliezer-tillmann-leiner-29951419a/">
            <svg-icon type="mdi" :path="pathEmail" class="mr-5 icon" @click="sendEmailViaIcon"></svg-icon>
          </a>

          <svg-icon type="mdi" :path="pathPhone" class="mr-5 icon" @click="callViaIcon"></svg-icon>

          <a href="https://www.instagram.com/lazer_tillmann/">
            <svg-icon type="mdi" :path="pathInstagram" class="mr-5 icon"></svg-icon>
          </a>
          <a href="https://www.linkedin.com/in/eliezer-tillmann-leiner-29951419a/">
            <svg-icon type="mdi" :path="pathLinkedin" class="mr-5 icon"></svg-icon>
          </a>
        </v-col>
      </v-row>

      <v-row class="justify-center">
        <v-col cols="12" sm="8" md="6">
          <v-sheet width="600" class=" mt-5" color="transparent">
            <form ref="form" @submit.prevent="sendEmail">
              <v-text-field class="white-text" name="from_name" v-model="name" label="Your name" required></v-text-field>
              <v-text-field class="white-text" name="from_email" v-model="email" label="Your email" type="email"
                required></v-text-field>
              <v-textarea class="white-text" name="message" v-model="message" label="Your message to me!"
                type="text"></v-textarea>
              <v-btn type="submit" color="primary">Submit</v-btn>
            </form>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
  
<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiLinkedin } from '@mdi/js';
import { mdiWhatsapp } from '@mdi/js';
import { mdiAt } from '@mdi/js';
import { mdiInstagram } from '@mdi/js';
import { mdiPhoneOutline } from '@mdi/js';
import emailjs from '@emailjs/browser';


export default {
  name: 'ContactPage',
  data: () => ({
    name: '',
    message: '',
    email: '',
    valid: false,
    nameRules: [
      value => {
        if (value?.length > 2) return true

        return 'Name must be at least 2 characters.'
      },
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],

    pathLinkedin: mdiLinkedin,
    pathWhatsapp: mdiWhatsapp,
    pathEmail: mdiAt,
    pathInstagram: mdiInstagram,
    pathPhone: mdiPhoneOutline,

  }),
  components: {
    SvgIcon
  },
  methods: {
    sendEmail() {

      emailjs
        .sendForm('service_cjsxt7r', 'template_be21ama', this.$refs.form, 'tGaoW0J3dCM6nmJF-')
        .then((result) => {
          console.log('SUCCESS!', result.text);
          this.name = '',
            this.email = '',
            this.message = ''
        })
        .catch((error) => {
          console.log('FAILED...', error);
        });
    },
    callViaIcon() {
      if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        window.location.href = "tel:+972584874474";
      } else {
        //window.open("tel:+972584874474", "Call us", "height=400,width=600");
        console.log("show telephone");
      }
    },
    sendEmailViaIcon() {
      window.location.href = 'mailto:leinereliezer@gmail.com';
    },

  }
}
</script>
<style> .white-text {
   color: white;
 }

 .icon {
   width: 32px;
   /* Desired width */
   height: 32px;
   /* Desired height */
 }
</style>
  