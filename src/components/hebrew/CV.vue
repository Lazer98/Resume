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
        <h3 class="white-text">סיכום</h3>
        <p class="white-text larger-text">
          מנוסה בפיתוח פולסטק עם יכולות בצד הלקוח והשרת בשפות שונות, מוטיבציה גבוהה ללמוד יכולות וידע חדשים<br>
          עובד במשך זמן חלקי עדיין על התואר הראשון שלי במדעי המחשב
        </p>
      </v-card-text>
    </v-card>

    <div class="hidden-sm-and-down" color="transparent">
      <v-card class="text-center  my-5 borderless-card" color="transparent">
        <v-row>
          <v-col cols="5"  lg="6">
            <v-card-text class="white-text">
              <h3>נסיון</h3>
              <h4 class="mt-2">סוכן ביטוח</h4>
              <h4 class="mb-2">AOK-Die Gesundheitskasse</h4>
              <p class="larger-text">ניהול ביטוחים של מעל 300 סטודנטים במחלקת הסטודנטים.</p>
              <p class="larger-text">הגדרתי חוזים חדשים במידה של 20% על ידי פנייה ללקוחות עבר והצעת מוצרים חדשים שזמינים רק לאחרונה להם.</p>
              <p class="larger-text"> פתרתי 50 תלונות לקוחות לחודש על ידי ספק שירותי ביטוח מצוינים ללקוחות.
              </p>
              <h4 class="mt-2"> מפתח פולסטק</h4>
              <h4 class="mb-2">צה"ל -צבא הגנה לישראל</h4>
              <p class="larger-text">תיקנתי באגים במערכת הרשומות הרפואיות של המטופלים.</p>
              <p class="larger-text">יישמתי תכונות חדשות עבור אפליקציית האינטרנט של החברה.</p>
              <p class="larger-text">מתחדש תוכנה ישנה שמאפשרת לרופאים ליצור ולערוך חקירות רפואיות ולוחות זמנים בלי צורך בהזנה ידנית.</p>


            </v-card-text>
            <!-- </v-card> -->
          </v-col>

          <v-col cols="6" lg="6">
            <!-- <v-card class="text-center ml-2 my-5 " color="transparent"> -->
            <v-card-text class="white-text">
              <h3 class="mb-2">השכלה</h3>
              <h4> תואר ראשון במדעי המחשב - תואר בראשית</h4>
              <p class="larger-text my-1"> אוניברסיטת האגן בגרמניה</p>
              <h4> הנדסאי תוכנה</h4>
              <p class="larger-text my-1">אורט קולג'ים סינגלובסקי • תל אביב, ישראל • 2022</p>
              <h4>בודק מוסמך ISTQB</h4>
              <p class="larger-text mt-1">אירגון ISTQB • 2020</p>
            </v-card-text>
            <!-- </v-card> -->
          </v-col>
        </v-row>
      </v-card>
    </div>

    <div class="hidden-md-and-up" color="transparent">
      <v-card class="text-center my-5 borderless-card" color="transparent">
        <v-card-text class="white-text">
          <h3>נסיון</h3>
          <h4 class="mt-2">סוכן ביטוח</h4>
          <h4 class="mb-2">AOK-Die Gesundheitskasse</h4>
          <p class="larger-text">ניהול ביטוחים של מעל 300 סטודנטים במחלקת הסטודנטים.</p>
          <p class="larger-text">הגדרתי חוזים חדשים במידה של 20% על ידי פנייה ללקוחות עבר והצעת מוצרים חדשים שזמינים רק לאחרונה להם.</p>
          <p class="larger-text"> פתרתי 50 תלונות לקוחות לחודש על ידי ספק שירותי ביטוח מצוינים ללקוחות.
          </p>
          <h4 class="mt-2"> מפתח פולסטק</h4>
          <h4 class="mb-2">צה"ל -צבא הגנה לישראל</h4>
          <p class="larger-text">תיקנתי באגים במערכת הרשומות הרפואיות של המטופלים.</p>
          <p class="larger-text">יישמתי תכונות חדשות עבור אפליקציית האינטרנט של החברה.</p>
          <p class="larger-text">מתחדש תוכנה ישנה שמאפשרת לרופאים ליצור ולערוך חקירות רפואיות ולוחות זמנים בלי צורך בהזנה ידנית.</p>


        </v-card-text>
      </v-card>



      <v-card class="text-center my-5 borderless-card" color="transparent">
        <v-card-text class="white-text">
          <h3 class="mb-2">השכלה</h3>
          <h4> תואר ראשון במדעי המחשב - תואר בראשית</h4>
          <p class="larger-text my-1"> אוניברסיטת האגן בגרמניה</p>
          <h4> הנדסאי תוכנה</h4>
          <p class="larger-text my-1">אורט קולג'ים סינגלובסקי • תל אביב, ישראל • 2022</p>
          <h4>בודק מוסמך ISTQB</h4>
          <p class="larger-text mt-1">אירגון ISTQB • 2020</p>
        </v-card-text>
      </v-card>

    </div>
    <v-card class="text-center my-5 borderless-card" color="transparent">
      <v-card-text class="white-text">
        <h3 class="mb-2">פרוייקטים</h3>
        <h4>מחדש תוכנית לשמירת חקירות המטופלים </h4>
        <h4 class="mb-1">צה"ל -צבא הגנה לישראל</h4>
        <p class="larger-text">ביצעתי מחקר, ניתוח וחידוש לתוכנית עצומה עם מעל מיליון חקירות נשמרות ופרטי מטופלים <br>
          ביצעתי מחקר, ניתוח וחידוש לתוכנית עצומה עם מעל מיליון חקירות נשמרות ופרטי מטופלים המופקדים ב-JSF, Java ו-Spring,
          שתוצאתם הייתה שיפור בביצועי התוכנית והבטחתה.

        </p>
        <p class="larger-text">
          שיפרתי את ביצועי התוכנה ואת האבטחה הסייברנטית ב-10%, וזאת על ידי הפחתת חקירות המטופלים ב-50% <br>
          ושיפור דיוק הנתונים ב-45%.
        </p>
        <p class="larger-text">השתמשתי ב-Java, Spring ו-Hibernate
          <br>
          כדי ליצור ממשקי API מאובטחים שאפשרו גישה לתוכנה
          <br> וששיפרו מאוד את חוויית המשתמש.
        </p>
      </v-card-text>
    </v-card>


    <v-card class="text-center my-5 borderless-card" color="transparent">
      <v-card-text class="white-text">
        <h3>יכולות</h3>
        <h4>צד לקוח: HTML, CSS, Javascript, Vue.js ,React</h4>
        <h4>צד שרת: Java ,Spring Boot ,C , Python , Node JS</h4>
        <h4>DB: SQL , MySQL ,MongoDB , Postgresql</h4>
        <h4>שפות: גרמנית , עברית ,אנגלית, צרפתית</h4>
      </v-card-text>
    </v-card>
    <div class="text-center">
      <v-btn @click="downloadPDF" class="mr-8 mt-4 mb-5 elevation-3" color="white" dark text-color="white">
        הורידו את קובץ הקורות חיים שלי.</v-btn>
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
    //SvgIcon
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
