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
        <h3 class="white-text bt-2">ZUSAMMENFASSUNG</h3>
        <p class="white-text larger-text">Erfahren in der Entwicklung von Fullstack-Anwendungen, mit Fähigkeiten sowohl im Frontend
          als auch im Backend<br> in verschiedenen Programmiersprachen, hoch motiviert, neue Fähigkeiten und Kenntnisse zu
          erlernen.<br>
          Ich arbeite noch Teilzeit an meinem Bachelor-Abschluss in Informatik.
        </p>
      </v-card-text>
    </v-card>

    <div class="hidden-sm-and-down" color="transparent">
      <v-card class="text-center  my-5 borderless-card" color="transparent">
        <v-row>
          <v-col cols="5" md="6" lg="6">
            <v-card-text class="white-text">
              <h3>ERFAHRUNG</h3>
              <h4> Fullstack Programmierer</h4>
              <h4 class="mb-2">IDF-Israel Defence Forces</h4>
              <p class="larger-text">Bugbehebung im Patientenakten-System.</p>
              <p class="larger-text">Implementierte neue Funktionen für die Web-App des Unternehmens.</p>
              <p class="larger-text">Erneuerung eines alten Programms, das es Ärzten ermöglicht, medizinische Anfragen <br>
                und Zeitpläne ohne manuelle Eingabe zu erstellen und zu bearbeiten.</p>
              <h4 class="mt-2">Sozialversicherungsfachangestellter</h4>
              <h4 class="mb-2">AOK-Die Gesundheitskasse</h4>

              <p class="larger-text">Verwaltung von Versicherungen von über 300 Studierenden in der Studentenabteilung.</p>
              <p class="larger-text">Durch die Kontaktaufnahme mit früheren Kunden und das Angebot neuer Produkte,<br>
                die erst kürzlich zur Verfügung stehen,konnte ich neue Verträge um 20% steigern.


              </p>
              <p class="larger-text">
                Pro Monat wurden durch die Bereitstellung exzellenter Versicherungsdienstleistungen
                <br> an Kunden 50 Kundenbeschwerden gelöst.
              </p>

            </v-card-text>
            <!-- </v-card> -->
          </v-col>

          <v-col cols="6" md="6" lg="6">
            <!-- <v-card class="text-center   my-5 " color="transparent"> -->
            <v-card-text class="white-text">
              <h3 class="mb-2">BILDUNG</h3>
              <h4>Bachelor of Science - Informatik</h4>
              <p class="larger-text my-1">Fernuni in Hagen • Hagen, Deutschland • 2025</p>
              <h4>Praktischer Software Engineur</h4>
              <p class="larger-text my-1">Ort Singelovsky colleges • Tel Aviv, Israel • 2022</p>
              <h4>Zertifizierter Softwaretester ISTQB</h4>
              <p class="larger-text mt-1">ISTQB Foundation • 2020</p>
            </v-card-text>
            <!-- </v-card> -->
          </v-col>
        </v-row>
      </v-card>
    </div>

    <div class="hidden-md-and-up" color="transparent">
      <v-card class="text-center    my-5 borderless-card" color="transparent">
        <v-card-text class="white-text">
          <h3>ERFAHRUNG</h3>
          <h4> Fullstack Programmierer</h4>
          <h4 class="mb-2">IDF-Israel Defence Forces</h4>
          <p class="larger-text">Bugbehebung im Patientenakten-System.</p>
          <p class="larger-text">Implementierte neue Funktionen für die Web-App des Unternehmens.</p>
          <p class="larger-text">Erneuerung eines alten Programms, das es Ärzten ermöglicht, medizinische Anfragen <br>
            und Zeitpläne ohne manuelle Eingabe zu erstellen und zu bearbeiten.</p>
          <h4 class="mt-2">Sozialversicherungsfachangestellter</h4>
          <h4 class="mb-2">AOK-Die Gesundheitskasse</h4>

          <p class="larger-text"> Verwaltung von Versicherungen von über 300 Studierenden in der Studentenabteilung.</p>
          <p class="larger-text">Durch die Kontaktaufnahme mit früheren Kunden und das Angebot neuer Produkte,<br>
            die erst kürzlich zur Verfügung stehen,konnte ich neue Verträge um 20% steigern.


          </p>
          <p class="larger-text">
            Pro Monat wurden durch die Bereitstellung exzellenter Versicherungsdienstleistungen
            <br> an Kunden 50 Kundenbeschwerden gelöst.
          </p>

        </v-card-text>
      </v-card>



      <v-card class="text-center   my-5 borderless-card" color="transparent">
        <v-card-text class="white-text">
          <h3 class="mb-2">BILDUNG</h3>
          <h4>Bachelor of Science - Informatik</h4>
          <p class="larger-text my-1">Fernuni in Hagen • Hagen, Deutschland • 2025</p>
          <h4>Praktischer Software Engineur</h4>
          <p class="larger-text my-1">Ort Singelovsky colleges • Tel Aviv, Israel • 2022</p>
          <h4>Zertifizierter Softwaretester ISTQB</h4>
          <p class="larger-text mt-1">ISTQB Foundation • 2020</p>
        </v-card-text>
      </v-card>


    </div>


    <v-card class="text-center   my-5 borderless-card" color="transparent">
      <v-card-text class="white-text">
        <h3 class="mb-2">PROJEKTE</h3>
        <h4> Erneuerung eines Programms zur Speicherung von Patientenbehandlungen.</h4>
        <h4 class="mb-1">IDF-Israel Defence Forces</h4>
        <p class="larger-text">Habe ein umfangreiches Programm mit über einer Million gespeicherter Anfragen und Patientendaten in JSF,<br>
          Java und Spring recherchiert, analysiert und erneuert.<br>
          Dies führte zu einer Verbesserung der Leistung des Programms und zu einer höheren Sicherheit.
        </p>
        <p class="larger-text">Verbesserte die Programmleistung und Cybersicherheit um 10%,<br>
          reduzierte Patientenanfragen um 20% und erhöhte die Datenpräzision um 15%.

        </p>
        <p class="larger-text">
          Verwendete Java, Spring und Hibernate, um sichere API-Schnittstellen zu erstellen,
          <br>die den Programmzugriff ermöglichten und die Benutzererfahrung erheblich verbesserten.

        </p>
      </v-card-text>
    </v-card>


    <v-card class="text-center   my-5 borderless-card" color="transparent">
      <v-card-text class="white-text">
        <h3>FÄHIGKEITEN</h3>
        <h4>Front End: HTML, CSS, Javascript, Vue.js, React</h4>
        <h4>Back End: Java ,Spring Boot ,C , Python , Node JS</h4>
        <h4>DB: SQL , MySQL</h4>
        <h4>Sprachen: Deutsch ,Hebräisch ,Englisch ,Französisch</h4>
      </v-card-text>
    </v-card>
    <div class="text-center">
      <div class="hidden-sm-and-down" color="transparent">
      <v-btn @click="downloadPDF" class="mr-8 mt-4 mb-5 elevation-3" color="white" dark text-color="white">
        Laden Sie meinen Lebenslauf herunter.</v-btn>
      </div>
        <div class="hidden-md-and-up" >
          <v-btn @click="downloadPDF" class="mr-8 mt-4 mb-5 elevation-3" color="white" dark text-color="white">
          Herunterladen</v-btn>
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
    // pathEmail:mdiEmailOutline,
    // pathHouse:mdiHomeOutline,
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
  font-size: 18px; /* Adjust the value as per your preference */
}
</style>
