<template>
  <v-main>

    <v-container>
      <!-- <v-row class="justify-center">
      <svg-icon type="mdi" :path="pathHouse" class="ml-6"></svg-icon>
      <p class="white-text">Haifa, Haifa, Israel</p>
      <svg-icon type="mdi" :path="pathEmail" class="ml-3"></svg-icon>
      <p class="white-text">leinereliezer@gmail.com</p>
      <svg-icon type="mdi" :path="pathPhone" class="ml-3"></svg-icon>
      <p class="white-text">+972584874474</p>
      <svg-icon type="mdi" :path="pathLinkedin" class="ml-3"></svg-icon>
      <p class="white-text">in/eliezer-leiner</p>
    </v-row> -->


      <v-card class="text-center borderless-card" color="transparent">
        <v-card-text>
          <h3 class="white-text bt-2">SUMMARY</h3>
          <p class="white-text larger-text">Experienced in fullstack developing ,frontend and backend skills with various
            languages
            ,high motivated to learn
            new skills and knowledge.<br>
            Part time still working on my bachelor in Computer Science </p>
        </v-card-text>
      </v-card>

      <div class="hidden-sm-and-down" color="transparent">
        <v-card class="text-center  my-5 borderless-card" color="transparent">
          <v-row>
            <v-col cols="5" lg="6">
              <v-card-text class="white-text">
                <h3>EXPERIENCE</h3>
                <h4 class="mt-2">Insurance agent</h4>
                <h4 class="mb-2">AOK-Die Gesundheitskasse</h4>
                <p class="larger-text">Manage insurances of over 300 students at the student's department .</p>
                <p class="larger-text">Increased new contracts by 20% by reaching out to past clients <br>and offering new
                  products only
                  recently
                  available to them .</p>
                <p class="larger-text">Resolved 50 customer complaints per month <br> by providing excellent insurance
                  services to clients .
                </p>
                <h4 class="mt-2"> Fullstack developer</h4>
                <h4 class="mb-2">IDF-Israel Defence Forces</h4>

                <p class="larger-text">Fixed bugs in the patient record system .</p>
                <p class="larger-text">Implemented new features for the company’s web app .</p>
                <p class="larger-text">Renewing an old program that allows doctors to create ,<br>edit medical inquiries
                  and schedules without
                  manual
                  entry .</p>


              </v-card-text>
              <!-- </v-card> -->
            </v-col>

            <v-col cols="6" md="6" lg="6">
              <!-- <v-card class="text-center ml-2 my-5 " color="transparent"> -->
              <v-card-text class="white-text">
                <h3 class="mb-2">EDUCATION</h3>
                <h4>Bachelor of Science -Computer Science</h4>
                <p class="larger-text my-1">Fernuni in Hagen • Hagen, Germany • 2025</p>
                <h4>Practical Software Engineur</h4>
                <p class="larger-text my-1">Ort Singelovsky colleges • Tel Aviv, Israel • 2022</p>
                <h4>Certified Tester ISTQB</h4>
                <p class="larger-text mt-1">ISTQB Foundation • 2020</p>
              </v-card-text>
              <!-- </v-card> -->
            </v-col>
          </v-row>
        </v-card>
      </div>

      <div class="hidden-md-and-up" color="transparent">
        <v-card class="text-center  my-5 borderless-card" color="transparent">
          <v-card-text class="white-text">
            <h3>EXPERIENCE</h3>
            <h4 class="mt-2">Insurance agent</h4>
            <h4 class="mb-2">AOK-Die Gesundheitskasse</h4>
            <p class="larger-text">Manage insurances of over 300 students at the student's department .</p>
            <p class="larger-text">Increased new contracts by 20% by reaching out to past clients <br>and offering new
              products only
              recently
              available to them .</p>
            <p class="larger-text">Resolved 50 customer complaints per month <br> by providing excellent insurance
              services to clients .
            </p>
            <h4 class="mt-2"> Fullstack developer</h4>
            <h4 class="mb-2">IDF-Israel Defence Forces</h4>

            <p class="larger-text">Fixed bugs in the patient record system .</p>
            <p class="larger-text">Implemented new features for the company’s web app .</p>
            <p class="larger-text">Renewing an old program that allows doctors to create ,<br>edit medical inquiries and
              schedules without
              manual
              entry .</p>


          </v-card-text>
        </v-card>

        <v-card class="text-center my-5 borderless-card" color="transparent">
          <v-card-text class="white-text">
            <h3 class="mb-2">EDUCATION</h3>
            <h4>Bachelor of Science -Computer Science</h4>
            <p class="larger-text my-1">Fernuni in Hagen • Hagen, Germany • 2025</p>
            <h4>Practical Software Engineur</h4>
            <p class="larger-text my-1">Ort Singelovsky colleges • Tel Aviv, Israel • 2022</p>
            <h4>Certified Tester ISTQB</h4>
            <p class="larger-text mt-1">ISTQB Foundation • 2020</p>
          </v-card-text>
        </v-card>


      </div>

      <v-card class="text-center my-5 borderless-card" color="transparent">
        <v-card-text class="white-text">
          <h3 class="mb-2">PROJECTS</h3>
          <h4>Renewing a program to save patient inquiries</h4>
          <h4 class="mb-1">IDF-Israel Defence Forces</h4>
          <p class="larger-text">Researched, analyzed and renewed a huge program with more than a million saved inquiries
            and patients
            details written in JSF, Java ,Spring,<br>
            which resulted in improving the program's performance, and making it more secure .</p>
          <p class="larger-text">Enhanced the program performance and cybersecurity by 10% , reducing patient inquiries by
            50% <br> and
            improved
            data accuracy by 45% .</p>
          <p class="larger-text">Utilized Java, Spring and Hibernate to create secured API interfaces <br> that enabled
            program access and
            greatly improved user experience.</p>
        </v-card-text>
      </v-card>


      <v-card class="text-center my-5 borderless-card" color="transparent">
        <v-card-text class="white-text">
          <h3>SKILLS</h3>
          <h4>Front End: HTML, CSS, Javascript, Vue.js ,React</h4>
          <h4>Back End: Java ,Spring Boot ,C , Python , Node JS</h4>
          <h4>DB: SQL , MySQL MongoDB , Postgresql</h4>
          <h4>Languages: German ,Hebrew ,English ,French</h4>
        </v-card-text>
      </v-card>
      <div class="text-center">
        <!-- CV FOR LARGE SCREEN -->
        <div class="hidden-sm-and-down" color="transparent">
          <v-btn @click="downloadPDF" class="mr-4 mt-4 mb-5 elevation-3" color="white" dark text-color="white"
            >
            Download my Resume</v-btn>
        </div>

        <!-- CV FOR SMALL SCREEN -->
        <div class="hidden-md-and-up" color="transparent">
          <v-btn @click="downloadPDF" class="mr-4 mt-4 mb-5 elevation-3" color="white" dark text-color="white"
           >
            Download</v-btn>
        </div>
      </div>
    </v-container>
  </v-main>
</template>

<script>
// import SvgIcon from '@jamescoyle/vue-icon';
// import { mdiLinkedin } from '@mdi/js';
// import { mdiWhatsapp } from '@mdi/js';
// import { mdiAt } from '@mdi/js';
// import { mdiEmailOutline } from '@mdi/js';
// import { mdiHomeOutline } from '@mdi/js';
// import { mdiPhoneOutline } from '@mdi/js';

export default {
  name: 'CVPage',
  data: () => ({
    valid: true,
    // pathLinkedin: mdiLinkedin,
    // path2: mdiWhatsapp,
    // path3: mdiAt,
    // pathEmail: mdiEmailOutline,
    // pathHouse: mdiHomeOutline,
    // pathPhone: mdiPhoneOutline,


  }),
  components: {
    // SvgIcon
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
  }
}
</script>
<style>
.white-text {
  color: white;
}

.borderless-card {
  box-shadow: none !important;
}

.larger-text {
  font-size: 18px;
  /* Adjust the value as per your preference */
}</style>
