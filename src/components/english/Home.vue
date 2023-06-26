<template>
  <v-main>
    <v-container fluid>
      <v-row align="center">
        <v-col cols="10" md="6" lg="7">
          <v-card class="text-center borderless-card" color="transparent">
            <div class="hidden-md-and-down">
              <v-card-text class="text-h3 white-text" v-if="getLanguage == 'english'">Hello ,I am Till</v-card-text>
            </div>
            <div class="hidden-md-and-up">
              <v-card-text class="text-h3 white-text" v-if="getLanguage == 'english'">Hello ,</v-card-text>
              <v-card-text class="text-h3 white-text mt-1" v-if="getLanguage == 'english'">I am</v-card-text>
              <v-card-text class="text-h3 white-text mt-1" v-if="getLanguage == 'english'"> Till</v-card-text>
            </div>
            <v-card-text class="mt-8 white-text larger-text" v-if="getLanguage == 'english'">
              <p class="larger-text">I am a Fullstack-developer ,specified in
                Vue.js and Java.<br><br> Check out my portfolie below and feel free to <br><br><a href="/contact"
                  class="white-text">reach out!</a> </p>
            </v-card-text>

            <!-- HEBREW -->
            <div class="hidden-md-and-down">
              <v-card-text class="text-h3 white-text" v-if="getLanguage == 'hebrew'">היי , אני טילמן-אליעזר</v-card-text>
            </div>
            <div class="hidden-md-and-up">
              <v-card-text class="text-h3 white-text" v-if="getLanguage == 'hebrew'">היי </v-card-text>
              <v-card-text class="text-h3 white-text" v-if="getLanguage == 'hebrew'"> אני </v-card-text>
              <v-card-text class="text-h3 white-text" v-if="getLanguage == 'hebrew'"> אליעזר</v-card-text>
            </div>

            <v-card-text class="mt-8 white-text" v-if="getLanguage == 'hebrew'">
              <p class="larger-text">
                אני מפתח Fullstack, מתמחה ב-Vue.js ו-Java.
              </p>
            </v-card-text>
            <v-card-text class="my-3 white-text" v-if="getLanguage == 'hebrew'">
              <p class="larger-text">
                בדקו את תיק העבודות שלי למטה
              </p>
            </v-card-text>
            <v-card-text class="mt-3 white-text" v-if="getLanguage == 'hebrew'">
              <p class="larger-text">
                <a href="/contact" class="white-text">לא להסס ליצור קשר!</a>
              </p>
            </v-card-text>


            <!-- DEUTSCH -->
            <div class="hidden-md-and-down">
              <v-card-text class="text-h3 white-text" v-if="getLanguage == 'deutsch'">Hi ,ich bin der Till</v-card-text>
            </div>
            <div class="hidden-md-and-up">
              <v-card-text class="text-h3 white-text" v-if="getLanguage == 'deutsch'">Hi ,</v-card-text>
              <v-card-text class="text-h3 white-text mt-1" v-if="getLanguage == 'deutsch'">ich bin </v-card-text>
              <v-card-text class="text-h3 white-text mt-1" v-if="getLanguage == 'deutsch'">der  </v-card-text>
              <v-card-text class="text-h3 white-text mt-1" v-if="getLanguage == 'deutsch'">Till  </v-card-text>
            </div>
            <v-card-text class="mt-8 white-text" v-if="getLanguage == 'deutsch'">
              <p class="larger-text">
              Ich bin ein Fullstack-Entwickler und habe mich auf Vue.js und Java spezialisiert.<br><br> Schauen Sie sich
              mein
              Portfolio unten an und <br><br> <a href="/contact" class="white-text">zögern Sie nicht, Kontakt
                aufzunehmen!</a>
                </p>
            </v-card-text>
            <v-card-text>
              <a href="https://github.com/Lazer98?tab=repositories">
                <svg-icon class="icon" type="mdi" :path="pathGitHub"></svg-icon>
              </a>
            </v-card-text>
             <!-- CV FOR LARGE SCREEN -->
             <div class="hidden-sm-and-down" color="transparent">
            <v-btn @click="downloadPDF" class="mr-4 mt-4 mb-5 elevation-3" color="white" dark text-color="white"
              v-if="getLanguage == 'english'">
              Download my Resume</v-btn>
              </div>
            <!-- CV FOR SMALL SCREEN -->
            <div class="hidden-md-and-up" color="transparent">
              <v-btn @click="downloadPDF" class="mr-4 mt-4 mb-5 elevation-3" color="white" dark text-color="white"
              v-if="getLanguage == 'english'">
              My Resume</v-btn>
              </div>
            <!-- CV FOR LARGE SCREEN -->
            <div class="hidden-sm-and-down" color="transparent">
            <v-btn @click="downloadPDF" class="mr-4 mt-4 mb-5 elevation-3" color="white" dark text-color="white"
              v-if="getLanguage == 'deutsch'">
              Laden Sie meinen Lebenslauf herunter.
            </v-btn>
            </div>
            <!-- CV FOR SMALL SCREEN -->
            <div class="hidden-md-and-up" color="transparent">
              <v-btn @click="downloadPDF" class="mr-4 mt-4 mb-5 elevation-3" color="white" dark text-color="white"
              v-if="getLanguage == 'deutsch'">
              Mein Lebenslauf
            </v-btn>

              </div>
            <v-btn @click="downloadPDF" class="mr-4 mt-4 mb-5 elevation-3" color="white" dark text-color="white"
              v-if="getLanguage == 'hebrew'">
              הורידו את קובץ הקו"ח שלי.</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { mapGetters } from "vuex";
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiGithub } from '@mdi/js';

export default {
  name: 'HomePage',
  data() {
    return {
      pathGitHub: mdiGithub,
    }
  },
  components: {
    SvgIcon
  },
  methods: {
    downloadPDF() {
      // const fileUrl = "../assets/first_resume.pdf"; // Update the file path as per your project structure
      // const link = document.createElement("a");
      // link.href = fileUrl;
      // link.setAttribute("download", "first_resume.pdf");
      // link.click();

      const fileUrl = "pdf/first_resume.pdf"; // Update the file path as per your project structure

      fetch(fileUrl)
        .then((response) => response.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "first_resume.pdf");
          link.click();
          window.URL.revokeObjectURL(url);
        })
        .catch((error) => {
          console.error("Error occurred while downloading the PDF file.", error);
        });
    },
  },
  computed: {
    ...mapGetters(["getLanguage"]),

  }

}
</script>

<style>
.white-text {
  color: white;
}

.icon {
  width: 32px;
  /* Desired width */
  height: 32px;
  /* Desired height */
}

.borderless-card {
  box-shadow: none !important;
}

.larger-text {
  font-size: 18px;
  /* Adjust the value as per your preference */
}
</style>
