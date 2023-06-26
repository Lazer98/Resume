<template>
  <v-app class="background-image">
    <v-container fluid>
 
      <v-navigation-drawer app color="transparent borderless-card" permanent width="50" v-if="!menuOpen">
        <v-col>
          <div class="custom-margin">

            <v-hover>
              <template v-slot:default="{ isHovering, props }">
                <a href="https://wa.me/+972584874474">
                  <svg-icon v-bind="props" :color="isHovering ? 'yellow' : '#8b008b'" type="mdi" :path="pathWhatsapp"
                    class="mb-10 icon"></svg-icon>
                </a>
              </template>
            </v-hover>

            <v-hover>
              <template v-slot:default="{ isHovering, props }">
                <a href="https://www.linkedin.com/in/eliezer-tillmann-leiner-29951419a/">
                  <svg-icon v-bind="props" :color="isHovering ? 'yellow' : '#8b008b'" type="mdi" :path="pathEmail"
                    class="mb-10 icon" @click="sendEmailViaIcon"></svg-icon>
                </a>
              </template>
            </v-hover>

            <v-hover>
              <template v-slot:default="{ isHovering, props }">
                <a href="tel:+972584874474">
                  <svg-icon v-bind="props" :color="isHovering ? 'yellow' : '#8b008b'" type="mdi" :path="pathPhone"
                    class="mb-10  icon" @click="callViaIcon"></svg-icon>
                </a>
              </template>
            </v-hover>

            <v-hover>
              <template v-slot:default="{ isHovering, props }">
                <a href="https://www.instagram.com/lazer_tillmann/">
                  <svg-icon v-bind="props" :color="isHovering ? 'yellow' : '#8b008b'" type="mdi" :path="pathInstagram"
                    class="mb-10  icon"></svg-icon>
                </a>
              </template>
            </v-hover>

            <v-hover>
              <template v-slot:default="{ isHovering, props }">
                <a href="https://www.linkedin.com/in/eliezer-tillmann-leiner-29951419a/">
                  <svg-icon v-bind="props" :color="isHovering ? 'yellow' : '#8b008b'" type="mdi" :path="pathLinkedin"
                    class="mb-10  icon"></svg-icon>
                </a>
              </template>
            </v-hover>

          </div>

        </v-col>
      </v-navigation-drawer>
     

      <v-app-bar color="transparent borderless-card" app>
        <v-toolbar-title class="white-text">
          <p v-if="getLanguage != 'hebrew'"> Tillmann Eliezer Leiner </p>
          <p v-else> טילמן אליעזר ליינר </p>
        </v-toolbar-title>
        <div class="hidden-md-and-down">
          <v-spacer></v-spacer>
        </div>

        <span class="fi fi-de" @click="updateLanguage('deutsch')"></span>
        <span class="fi fi-il ml-2" @click="updateLanguage('hebrew')"></span>
        <span class="fi fi-gb ml-2 mr-2" @click="updateLanguage('english')"></span>
        <!-- english -->
        <div class="hidden-sm-and-down">
          <v-btn v-if="getLanguage == 'english'" class="mr-3" to="/">
            <p class="white-text">Home</p>
          </v-btn>
          <v-btn v-if="getLanguage == 'english'" class="mr-3" to="/cv">
            <p class="white-text">Resume</p>
          </v-btn>
          <v-btn v-if="getLanguage == 'english'" class="mr-3" to="/contact">
            <p class="white-text">Contact</p>
          </v-btn>
          <v-btn v-if="getLanguage == 'english'" class="mr-3" to="/about">
            <p class="white-text">About</p>
          </v-btn>
          <!-- deutsch -->
          <v-btn v-if="getLanguage == 'deutsch'" class="mr-3 " to="/">
            <p class="white-text">Home</p>
          </v-btn>
          <v-btn v-if="getLanguage == 'deutsch'" class="mr-3 " to="/cv">
            <p class="white-text">CV</p>
          </v-btn>
          <v-btn v-if="getLanguage == 'deutsch'" class="mr-3 " to="/contact">
            <p class="white-text">Kontakt</p>
          </v-btn>
          <v-btn v-if="getLanguage == 'deutsch'" class="mr-3 " to="/about">
            <p class="white-text">Über mich</p>
          </v-btn>
          <!-- hebrew -->
          <v-btn v-if="getLanguage == 'hebrew'" class="mr-3" to="/">
            <p class="white-text">בית</p>
          </v-btn>
          <v-btn v-if="getLanguage == 'hebrew'" class="mr-3 " to="/cv">
            <p class="white-text">קו"ח</p>
          </v-btn>
          <v-btn v-if="getLanguage == 'hebrew'" class="mr-3" to="/contact">
            <p class="white-text">צור קשר</p>
          </v-btn>
          <v-btn v-if="getLanguage == 'hebrew'" class="mr-3" to="/about">
            <p class="white-text">אודות</p>
          </v-btn>
        </div>

        <div class="hidden-md-and-up" color="transparent">
          <svg-icon type="mdi" :path="pathMenu" class="icon" @click="toggleMenu"></svg-icon>
        </div>
      </v-app-bar>

      <!-- NAVBAR OPENED ONLY I SMALL SCREEN  -->
      <v-navigation-drawer v-if="menuOpen" v-model="menuOpen" color="transparent borderless-card" width="100">
        <v-list>
          <div @click.stop="navigateTo('/')">
            <p v-if="getLanguage == 'english'" to="/" class="white-text my-2">Home</p>
          </div>
          <div @click.stop="navigateTo('/cv')">
            <p v-if="getLanguage == 'english'" class="white-text mb-2">Resume</p>
          </div>
          <div @click.stop="navigateTo('/contact')">
            <p class="white-text mb-2">Contact</p>
          </div>
          <div v-if="getLanguage == 'english'" @click.stop="navigateTo('/about')">
            <p class="white-text ">About</p>
          </div>
          <!-- deutsch -->
          <div v-if="getLanguage == 'deutsch'" @click.stop="navigateTo('/')">
            <p class="white-text my-2">Home</p>
          </div>
          <div v-if="getLanguage == 'deutsch'" @click.stop="navigateTo('/cv')">
            <p class="white-text mb-2">CV</p>
          </div>
          <div v-if="getLanguage == 'deutsch'" @click.stop="navigateTo('/contact')">
            <p class="white-text mb-2">Kontakt</p>
          </div>
          <div v-if="getLanguage == 'deutsch'" @click.stop="navigateTo('/about')">
            <p class="white-text mb-2">Über mich</p>
          </div>
          <!-- hebrew -->
          <div v-if="getLanguage == 'hebrew'" @click.stop="navigateTo('/')">
            <p class="white-text my-2">בית</p>
          </div>
          <div v-if="getLanguage == 'deutsch'" @click.stop="navigateTo('/cv')">
            <p class="white-text mb-2">קו"ח</p>
          </div>
          <div v-if="getLanguage == 'deutsch'" @click.stop="navigateTo('/contact')">
            <p class="white-text mb-2">צור קשר</p>
          </div>
          <div v-if="getLanguage == 'deutsch'" @click.stop="navigateTo('/about')">
            <p class="white-text">אודות</p>
          </div>
        </v-list>
      </v-navigation-drawer>


      <v-main>
        <router-view></router-view>
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiMenu } from '@mdi/js';
import { mdiLinkedin } from '@mdi/js';
import { mdiWhatsapp } from '@mdi/js';
import { mdiAt } from '@mdi/js';
import { mdiInstagram } from '@mdi/js';
import { mdiPhoneOutline } from '@mdi/js';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";


export default {
  name: 'App',
  data: () => ({
    valid: true,
    pathLinkedin: mdiLinkedin,
    pathWhatsapp: mdiWhatsapp,
    pathEmail: mdiAt,
    pathInstagram: mdiInstagram,
    pathPhone: mdiPhoneOutline,
    pathMenu: mdiMenu,
    menuOpen: false,
    isHovering: false,

  }),
  components: {
    SvgIcon
  },

  methods: {
    ...mapActions(['updateLanguage']),
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    navigateTo(route) {
      this.$router.push(route);
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
  },
  computed: {
    ...mapGetters(["getLanguage"]),

  },
  watch: {

  },
};
</script>
<style>
.background-image {

  background: url('./assets/profilfoto2.jpg') no-repeat center fixed !important;
  min-height: 100%;
  /* min-width: 1296px; */


}

.white-text {
  color: white;
}

.custom-margin {
  margin-top: 15vh;
  /* Adjust the value as needed */
}

.borderless-card {
  box-shadow: none !important;
}

.background-image .v-navigation-drawer {
  background-color: transparent;
}

.icon-red {
  color: red;
}

.icon-blue {
  color: #8b008b;
}</style>
