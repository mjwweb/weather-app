<template>
  <Navbar @updateLocation="updateLocation" :json="weatherData" v-if="weatherData" :key="weatherData" />
  <div class="content-container">
    <CurrentWeather :json="weatherData" :location="locationTitle" v-if="weatherData" :key="weatherData"/>
    <SevenDay :json="weatherData" v-if="weatherData" :key="weatherData"/>
    <Hourly :json="weatherData" v-if="weatherData" :key="weatherData" />
    <MinuteCast :json="weatherData" v-if="weatherData" :key="weatherData"/>
    <CurrentWeatherDetails :json="weatherData" v-if="weatherData" :key="weatherData"/>
  </div>
</template>

<script>
import CurrentWeather from './CurrentWeather.vue'
import SevenDay from './SevenDay.vue'
import CurrentWeatherDetails from './CurrentWeatherDetails'
import MinuteCast from './MinuteCast';
import Hourly from './Hourly.vue';
import Navbar from './navbar.vue';

export default {
  name: 'WeatherData',
  components: {
    Navbar,
    CurrentWeather,
    SevenDay,
    CurrentWeatherDetails,
    MinuteCast,
    Hourly
  },
  data() {
    return {
      weatherData: null,
      lat: 40.71,
      lon: -74.00,
      locationTitle: 'New York City'
    }
  },
  mounted() {
    this.getWeatherData(this.lat, this.lon);
  },
  methods: {
    updateLocation(lat, lon, city) {
      this.lat = lat;
      this.lon = lon;
      this.locationTitle = city;
      this.getWeatherData(lat, lon);
    },
    getWeatherData(lat, lon) {
      fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&units=imperial&appid=42ea1de4e2faa59a9dcbf2a2c7cf8b2c')
      .then(resp => resp.json())
      .then(json => this.weatherData = json)
      .catch(err => console.log(err.message));
    }
  }
}
</script>