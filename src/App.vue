<template>
  <WeatherData />
</template>

<script>
import WeatherData from './components/WeatherData.vue'

export default {
  name: 'App',
  components: {
    WeatherData
  }
}
</script>

<style>
  @import './styles/main.css';
</style>
