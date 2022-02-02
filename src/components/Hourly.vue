
<template>
    <h2>Hourly</h2>
    <div class="hourlyWrap">
        <div v-for="hour in json.hourly.slice(0, hourlyLimit)" :key="hour.dt" @click="expandHourly(hour.dt)" class="hourlyItem" v-bind:id="'h'+hour.dt">
            <div class="hourlyRow">
                <div class="hTime">{{formatTime(hour.dt)}}</div>
                <div class="hTemp">{{Math.round(hour.temp)}}°</div>
                <img class="hIcon" v-bind:src="'http://openweathermap.org/img/wn/'+hour.weather[0].icon+'.png'" />
                <div class="hDescrip">{{hour.weather[0].description}}</div>
                <i class="bi bi-chevron-down hChevron" v-bind:id="'ht'+hour.dt"></i>
            </div>
            <div v-bind:id="'he'+hour.dt" class="hDetails">
                <div class="hDetailsInner">
                    <div><i class="bi bi-thermometer-half"></i> Feels Like: {{hour.feels_like}}</div>
                    <div><i class="bi bi-wind"></i> Wind Speed: {{Math.round(hour.wind_speed)}}</div>
                    <div><i class="bi bi-droplet-half"></i> Humidity: {{hour.humidity}}</div>
                    <div><i class="bi bi-moisture"></i> Dew Point: {{hour.dew_point}}</div>
                    <div><i class="bi bi-sun"></i> UVI: {{hour.uvi}}</div>
                    <div><i class="bi bi-speedometer2"></i> Pressure: {{hour.pressure}}</div>
                </div>
            </div>
        </div>
        <button @click="toggleHours" expanded="false" class="hourlyMore">Show More</button>
    </div>
</template>

<script>

export default {
    name: 'SevenDay',
    props: {
        json: {
            type: Object
        }
    },
    data() {
        return {
            sevenDayObj: null,
            hourlyLimit: 10
        }
    },
    mounted() {
        this.hourlyObj = this.json.hourly;
    },
    methods: {
        formatTime(time) {
            let s = new Date(time * 1000).toLocaleTimeString("en-US", {hour: 'numeric', minute: '2-digit'});
            return s;
        },
        expandHourly(id) {
            let exId = 'he'+id;
            let exElem = document.getElementById(exId);
            let tId = 'ht'+id;
            let tElem = document.getElementById(tId);

            exElem.classList.toggle("hDetailsExpand");
            tElem.classList.toggle('bi-chevron-down');
            tElem.classList.toggle('bi-chevron-up');
        },
        toggleHours(e) {
            let expanded = e.currentTarget.getAttribute('expanded');

            if (expanded == 'false') {
                e.currentTarget.setAttribute('expanded', 'true');
                this.hourlyLimit = this.json.hourly.length;
                e.currentTarget.innerText = 'show less';
            } else {
                e.currentTarget.setAttribute('expanded', 'false');
                this.hourlyLimit = 10;
                e.currentTarget.innerText = 'show more';
            }
        }
    },

}

</script>