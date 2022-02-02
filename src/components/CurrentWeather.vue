
<template>
    <div class="locationHdr">{{location}}</div>
    <div class="curWeatherTitle">{{descrip}}</div>
    <div id="weatherCover" class="currentWeatherWrap">
        <div class="curWeatherTempsWrap">
            <div class="curWeatherTemp">{{Math.round(temp)}}<span>°F</span></div>
            <div class="curWeatherHi">{{Math.round(hi)}}°</div>
            <div class="curWeatherLo">{{Math.round(lo)}}°</div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CurrentWeather',
    props: {
        json: {
            type: Object
        },
        location: {
            type: String
        }
    },
    data() {
        return {
            temp: null,
            hi: null,
            lo: null,
            descip: null
        }
    },
    mounted() {
        this.temp = this.json.current.temp;
        this.hi = this.json.daily[0].temp.max;
        this.lo = this.json.daily[0].temp.min;
        this.descrip = this.json.current.weather[0].description;
        let bkg = this.json.current.weather[0].icon;
        const elem = document.getElementById('weatherCover');
        elem.style.backgroundImage = 'url(https://mike-worden.com/g-assets/weatherimages/'+bkg+'.jpg)';
    }
}

</script>