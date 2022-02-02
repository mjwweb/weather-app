<template>
  <h2>Current Weather</h2>
  <div class="curWeatherDetails">
      <div class="curWeatherItem"><i class="bi bi-sunrise"></i> Sunrise: {{formatTime(json.current.sunrise)}}</div>
      <div class="curWeatherItem"><i class="bi bi-sunset"></i> Sunset: {{formatTime(json.current.sunset)}}</div>
      <div class="curWeatherItem"><i class="bi bi-thermometer-half"></i> Temp: {{Math.round(json.current.temp)}}</div>
      <div class="curWeatherItem"><i class="bi bi-thermometer"></i> Feels Like: {{Math.round(json.current.feels_like)}}</div>
      <div class="curWeatherItem"><i class="bi bi-speedometer2"></i> Pressure: {{json.current.pressure}}</div>
      <div class="curWeatherItem"><i class="bi bi-droplet-half"></i> Humidity: {{json.current.humidity}}</div>
      <div class="curWeatherItem"><i class="bi bi-moisture"></i> Dew Point: {{Math.round(json.current.dew_point)}}</div>
      <div class="curWeatherItem"><i class="bi bi-brightness-high"></i> UVI: {{json.current.uvi}}</div>
      <div class="curWeatherItem"><i class="bi bi-cloud"></i> Clouds: {{json.current.clouds}}</div>
      <div class="curWeatherItem"><i class="bi bi-cloud-fog"></i> Visibility: {{json.current.visibility}}</div>
      <div class="curWeatherItem"><i class="bi bi-wind"></i> Wind: {{Math.round(json.current.wind_speed)}} mph</div>
      <div class="curWeatherItem"><i class="bi bi-arrow-up-right"></i> Wind Deg: {{json.current.wind_deg}}</div>
  </div>
</template>

<script>

export default {
  name: 'WeatherData',
  props: {
    json: {
      type: Object
    }
  },
  data() {
    return {
      curWeatherObj: null,
      sunrise: null
    }
  },
  mounted() {
      this.curWeatherObj = this.json.current;
      this.sunrise = this.curWeatherObj.sunrise;
  }, 
  methods: {
    formatTime(time) {
      let s = new Date(time * 1000).toLocaleTimeString("en-US", {hour: 'numeric', minute:'2-digit'});
      return s;
    }
  }
}
</script>