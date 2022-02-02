
<template>
    <h2>Minute Rain Cast</h2>
    <div class="minCastChart">
        <apexchart
        height="200"
        type="bar"
        :options="chartOptions"
        :series="series">
        </apexchart>
    </div>
</template>

<script>

import VueApexCharts from "vue3-apexcharts";

export default {
    name: 'MinuteCast',
    components: {
        apexchart: VueApexCharts
    },
    props: {
        json: {
            type: Object
        }
    },
    data() {
        return {
            chartOptions: {
                chart: {
                    id: "vuechart-example",
                },
                dataLabels: {
                    enabled: false,
                },
                xaxis: {
                    categories: ['now',5,10,15,20,25,30,35,40,45,50,55,'1 hour'],
                },
            },
            series: [

            ],
        };
    },
    mounted() {
        var obj = this.json.minutely;
        var dts = [];
        var precips = [];

        for (let i=0; i < obj.length; i++) {
            let dt = obj[i].dt;
            let precip = obj[i].precipitation;
            dts.push(dt);
            precips.push(precip);
        }

        this.series = [
            {
            name: 'precip',
            data: precips,
            }
        ];

        this.$nextTick(() => {
            window.dispatchEvent(new Event('resize'));
        });
    }
}

</script>