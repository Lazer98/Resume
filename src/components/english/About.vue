<template>
  <v-main>
    <div class="hidden-sm-and-down" color="transparent">
      <v-row>
        <v-col>
          <v-card outlined color="transparent borderless-card" class="ml-2 mb-4 custom-card">
            <v-card-title class="white-text">My pins in the world!</v-card-title>
            <v-card-text class="white-text">
              <div id="map" style="height: 460px; width:700px;"></div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <div class="mx-8 mb-2 white-text custom-paragraph">
            I have a deep passion for exploring new cultures and immersing myself in different environments. Traveling
            allows me to broaden my perspective, embrace diversity, and gain a better understanding of the world. From
            hiking through lush mountains to wandering through bustling markets, I find joy in experiencing the unique
            sights, sounds, and tastes each destination has to offer. Traveling has not only enriched my life but has also
            fostered my adaptability, problem-solving skills, and ability to connect with people from various backgrounds.
          </div>
        </v-col>
      </v-row>
      <v-row>

        <v-col>
          <div class="mx-8 mt-12 white-text custom-paragraph">
            Learning languages has been a fulfilling hobby for me as it opens doors to different cultures and enhances my
            communication skills. I enjoy the process of unraveling the intricacies of a language, from its grammar rules
            to
            its idiomatic expressions. It allows me to connect with people on a deeper level and break down barriers.
            Moreover, language learning provides me with a fresh perspective, enabling me to appreciate diverse
            perspectives
            and fostering empathy. It also challenges my memory, critical thinking, and problem-solving abilities, making
            me
            a more versatile and adaptable individual.
          </div>

        </v-col>
        <v-col>
          <div class="image-card">
            <v-img lazy-src="../../assets/logo.png" max-height="500" max-width="650" src="../../assets/travel2.jpg"
              class="rounded-image mr-10">
            </v-img>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div class="image-card">
            <v-img lazy-src="../../assets/family.jpg" max-height="500" max-width="650" src="../../assets/family.jpg"
              class="rounded-image mb-2">
            </v-img>
          </div>
        </v-col>

        <v-col>
          <div class="mx-8 my-8 white-text custom-paragraph">
            I love spending time with my family, including my wife and daughter. They bring me so much happiness, and I
            cherish every moment we spend together. We engage in activities, go on outings, play games, and enjoy quality
            time as a family. My family is my greatest treasure, and I am grateful for the love and joy they bring into my
            life.
          </div>
        </v-col>
      </v-row>

      <!-- The study of history has always captivated my curiosity and helped me develop a profound appreciation for the
          past. By delving into historical events, I gain insights into the origins of societies, political systems, and
          cultural practices. Analyzing historical contexts, understanding the causes and consequences of past events, and
          examining the decisions made by individuals and societies deepens my critical thinking and analytical skills.
          Moreover, history provides a valuable lens through which I can understand and interpret the present, enabling me
          to make informed decisions based on the lessons learned from the past. -->

    </div>

    <div class="hidden-md-and-up" color="transparent">

      <!-- <iframe src="https://www.google.com/maps/embed" width="200" height="250" style="border:0;" allowfullscreen=""
        loading="lazy"></iframe> -->
        <v-img lazy-src="../../assets/maps.png" max-height="1000" max-width="1000" src="../../assets/maps.png"
        class="rounded-image mb-1">
      </v-img>

      <div class="mb-2 white-text custom-paragraph">
        I have a deep passion for exploring new cultures and immersing myself in different environments. Traveling
        allows me to broaden my perspective, embrace diversity, and gain a better understanding of the world. From
        hiking through lush mountains to wandering through bustling markets, I find joy in experiencing the unique
        sights, sounds, and tastes each destination has to offer. Traveling has not only enriched my life but has also
        fostered my adaptability, problem-solving skills, and ability to connect with people from various backgrounds.
      </div>


      <v-img lazy-src="../../assets/logo.png" max-height="1000" max-width="1000" src="../../assets/travel2.jpg"
        class="rounded-image mt-2">
      </v-img>
      <div class=" white-text custom-paragraph">
        Learning languages has been a fulfilling hobby for me as it opens doors to different cultures and enhances my
        communication skills. I enjoy the process of unraveling the intricacies of a language, from its grammar rules to
        its idiomatic expressions. It allows me to connect with people on a deeper level and break down barriers.
        Moreover, language learning provides me with a fresh perspective, enabling me to appreciate diverse perspectives
        and fostering empathy. It also challenges my memory, critical thinking, and problem-solving abilities, making me
        a more versatile and adaptable individual.
      </div>
      <v-img lazy-src="../../assets/family.jpg" max-height="1000" max-width="1000" src="../../assets/family.jpg"
        class="rounded-image mt-4">
      </v-img>
      <div class=" white-text custom-paragraph">
        I love spending time with my family, including my wife and daughter. They bring me so much happiness, and I
        cherish every moment we spend together. We engage in activities, go on outings, play games, and enjoy quality
        time as a family. My family is my greatest treasure, and I am grateful for the love and joy they bring into my
        life.
      </div>
    </div>

  </v-main>
</template>
  
<script>
/* global google */
export default {
  name: 'AboutPage',
  data() {
    return {


    }
  },
  methods: {

  },
  mounted() {
    const mapContainer = document.getElementById('map');

    const center = { lat: 5, lng: 0 };
    const markers = [
      { id: 1, position: { lat: 43.2141, lng: 27.9147 }, label: 'Varna, Bulgaria' },
      { id: 2, position: { lat: -12.9711, lng: -38.5108 }, label: 'Salvador de Bahia, Brazil' },
      { id: 3, position: { lat: 48.1351, lng: 11.5820 }, label: 'Munich, Germany' },
      { id: 4, position: { lat: 31.7683, lng: 35.2137 }, label: 'Jerusalem, Israel' },
      { id: 5, position: { lat: 51.5074, lng: -0.1278 }, label: 'London, England' },
      { id: 6, position: { lat: 48.8566, lng: 2.3522 }, label: 'Paris, France' },
      { id: 7, position: { lat: 41.9028, lng: 12.4964 }, label: 'Rome, Italy' },
      { id: 8, position: { lat: 52.5200, lng: 13.4050 }, label: 'Berlin, Germany' },
      { id: 9, position: { lat: 50.4501, lng: 30.5234 }, label: 'Kiev, Ukraine' },
      { id: 10, position: { lat: 27.9944, lng: -81.7603 }, label: 'Florida, USA' },
      { id: 11, position: { lat: 59.9139, lng: 10.7522 }, label: 'Oslo, Norway' },
      { id: 12, position: { lat: 60.3913, lng: 5.3221 }, label: 'Bergen, Norway' },
      { id: 13, position: { lat: 50.8503, lng: 4.3517 }, label: 'Brussels, Belgium' },
      { id: 14, position: { lat: 52.3702, lng: 4.8952 }, label: 'Amsterdam, Netherlands' },
      { id: 15, position: { lat: 45.8150, lng: 15.9819 }, label: 'Zagreb, Croatia' },
      { id: 16, position: { lat: 48.2082, lng: 16.3738 }, label: 'Vienna, Austria' },
      { id: 17, position: { lat: 50.0755, lng: 14.4378 }, label: 'Prague, Czech Republic' },
      { id: 18, position: { lat: 37.9838, lng: 23.7275 }, label: 'Athens, Greece' },
      { id: 19, position: { lat: 13.1362575, lng: -59.6292806 }, label: 'Barbados, Barbados' },
    ];

    if (typeof google !== 'undefined') {
      // Initialize the map
      const map = new google.maps.Map(mapContainer, {
        center,
        zoom: 2,
      });

      // Add markers to the map
      markers.forEach((marker) => {
        new google.maps.Marker({
          position: marker.position,
          map,
        });
      });

    } else {
      console.error("'google' object is not available.");
    }
  },


}
</script>
  
<style>
.white-text {
  color: white;
}

.custom-card {
  margin-left: 2px;
  /* Adjust the value as per your preference */
}

.custom-paragraph {
  font-size: 20px;
  /* Adjust the font size as needed */
  font-family: Arial, sans-serif;
  /* Specify the font family as needed */
}

.image-card {
  border-radius: 12px;
  /* Adjust the value to control the roundness */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* Adjust the values to control the shadow */
}

.rounded-image {
  border-top-left-radius: 12px;
  /* Should match the border-radius of the parent card */
  border-top-right-radius: 12px;
  /* Should match the border-radius of the parent card */
}

.borderless-card {
  box-shadow: none !important;
}
.map-container {
    position: relative;
    width: 100%;
    padding-bottom: 75%;
    height: 0;
    overflow: hidden;
  }

  .map-container #map {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

</style>
  