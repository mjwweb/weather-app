
<template>
    <h2>Forcast</h2>
    <div class="sevenDayWrap">
        <div v-for="day in sevenDayObj" :key="day.dt" class="sevenDayItem">
            <div class="sevenDayDate">{{convertDate(day.dt)}}</div>
            <div class="sevenDayTempsWrap">
                <div class="sevenDayHi">{{Math.round(day.temp.max)}}°</div>
                <div class="sevenDayLo">{{Math.round(day.temp.min)}}°</div>
            </div>
            <img class="sevenDayIcon" v-bind:src="'http://openweathermap.org/img/wn/'+day.weather[0].icon+'.png'" />
            <div class="sevenDayDescrip">{{day.weather[0].description}}</div>
        </div>
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
            sevenDayObj: null
        }
    },
    mounted() {
        this.sevenDayObj = this.json.daily;
    },
    methods: {
        convertDate(dt) {
            var a = new Date(dt * 1000);
            var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            var month = months[a.getMonth()];
            var date = a.getDate();
            var time = date + ' ' + month;
            return time;
        }
    }
}

</script>