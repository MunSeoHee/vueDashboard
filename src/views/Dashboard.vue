<template>
<div>
    <h1>dashboard</h1>
    <div class="row ">
      <div class="col-lg-8 card">
        <div class="nav justify-content-end card-header-tabs btn-group-toggle btn-sm mb-2"
            data-toggle="buttons">
            <label v-for="(option, index) in bigLineChartCategories"
                    :key="option"
                    class="nav-item btn btn-sm btn-light btn-simple"
                    :class="{active: bigLineChart.activeIndex === index}"
                    :id="index">
                <input type="radio"
                    class="nav-link active"
                    @click="initBigChart(index)"
                    name="options" autocomplete="off"
                    :checked="bigLineChart.activeIndex === index">
                {{option}}
            </label>
        </div>
        <div class="chart-area">
        <line-chart style="height: 100%"
                        ref="bigChart"
                        chart-id="big-line-chart"
                        :chart-data="bigLineChart.chartData"
                        :gradient-colors="bigLineChart.gradientColors"
                        :gradient-stops="bigLineChart.gradientStops"
                        :extra-options="bigLineChart.extraOptions">
        </line-chart>
         </div>
      </div>
      <div class="col-lg-4 card">
        <donut-chart></donut-chart>
      </div>
    </div>
    <div class="row card">
      <div class="col">
        <base-table></base-table>
      </div>
      <div class="col card">
        <base-table></base-table>
      </div>
    </div>
    <div class="row card">
      <div class="nav justify-content-end card-header-tabs btn-group-toggle btn-sm mb-2"
            data-toggle="buttons">
            <label v-for="(option, index) in GameLineChartCategories"
                    :key="option"
                    class="nav-item btn btn-sm btn-light btn-simple"
                    :class="{active: GameLineChart.activeIndex === index}"
                    :id="index">
                <input type="radio"
                    class="nav-link active"
                    @click="initGameChart(index)"
                    name="options" autocomplete="off"
                    :checked="GameLineChart.activeIndex === index">
                {{option}}
            </label>
        </div>
        <div class="chart-area container-fluid">
        <line-chart style="height: 100%" class=""
                        ref="bigChart"
                        chart-id="big-line-chart"
                        :chart-data="GameLineChart.chartData"
                        :gradient-colors="GameLineChart.gradientColors"
                        :gradient-stops="GameLineChart.gradientStops"
                        :extra-options="GameLineChart.extraOptions">
        </line-chart>
         </div>
    </div>
</div>
</template>
<script>
import LineChart from '../components/Chart/LineChart.js';
import DonutChart from '../components/Chart/DonutChart.js';
import BaseTable from "../components/BaseTable.vue";
import * as chartConfigs from '../components/Chart/config.js';
import config from '../config';



export default {
    components: {
      LineChart,
      BaseTable,
      DonutChart
    },
    data() {
      return {
        bigLineChart: {
          allData: [
            [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100],
            [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120],
            [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130]
          ],
          activeIndex: 0,
          chartData: null,
          extraOptions: chartConfigs.purpleChartOptions,
          gradientColors: config.colors.primaryGradient,
          gradientStops: [1, 0.4, 0],
          categories: ['심박수', '수면', '심박']
        },
        GameLineChart: {
          allData: [
            [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100],
            [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120],
            [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130]
          ],
          activeIndex: 0,
          chartData: null,
          extraOptions: chartConfigs.purpleChartOptions,
          gradientColors: config.colors.primaryGradient,
          gradientStops: [1, 0.4, 0],
          categories: ['게임1', '게임2', '게임3']
        },
      }
    },
    computed:{
      enableRTL() {
        return this.$route.query.enableRTL;
      },
      bigLineChartCategories() {
        return this.bigLineChart.categories;
      },
      GameLineChartCategories() {
        return this.GameLineChart.categories;
      }
    },
    methods:{
      initBigChart(index) {
        let Data = {
          datasets: [{
            fill: true,
            borderColor: config.colors.primary,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: config.colors.primary,
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: config.colors.primary,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.bigLineChart.allData[index]
          }],
          labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        }
        this.$refs.bigChart.updateGradients(Data);
        this.bigLineChart.chartData = Data;
        this.bigLineChart.activeIndex = index;
      },
      initGameChart(index) {
        let Data = {
          datasets: [{
            fill: true,
            borderColor: config.colors.primary,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: config.colors.primary,
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: config.colors.primary,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.GameLineChart.allData[index]
          }],
          labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        }
        this.$refs.bigChart.updateGradients(Data);
        this.GameLineChart.chartData = Data;
        this.GameLineChart.activeIndex = index;
      }
    },
    mounted() {
      this.i18n = this.$i18n;
      if (this.enableRTL) {
        this.i18n.locale = 'ar';
        this.$rtl.enableRTL();
      }
      this.initBigChart(0);
      this.initGameChart(0);
    }
}
</script>
