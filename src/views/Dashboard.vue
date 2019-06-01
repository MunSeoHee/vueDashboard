<template>
<div class="dashboard">
    <div class="row d-flex justify-content-center mb-4">
      <div class="col-12 col-lg-7 card mr-4">
        <div class=" bg-white pb-0">
          <div class="row">
          <p class="col-sm pt-3 ml-2">LIFE LOG 추이</p>
            <el-menu class="col-sm nav justify-content-end card-header-tabs mb-3">
            <div v-for="(option, index) in bigLineChartCategories"
                    :default-active="bigLineChart.activeIndex" class="el-menu-demo el-menu--horizontal" mode="horizontal"
                    :key="option"
                    :class="{active: bigLineChart.activeIndex === index}"
                    :id="index">
                <el-menu-item :index="index" 
                    @click="initBigChart(index)"
                    name="options" autocomplete="off"
                    :checked="bigLineChart.activeIndex === index">
                {{option}}
                </el-menu-item>
            </div>
            </el-menu>
            <div class="line"></div>
        </div>
        </div>
        
        <div class="chart-area">
          <line-chart     ref="bigChart"
                          chart-id="big-line-chart"
                          :chart-data="bigLineChart.chartData"
                          :gradient-colors="bigLineChart.gradientColors"
                          :gradient-stops="bigLineChart.gradientStops"
                          :extra-options="bigLineChart.extraOptions"
                          style="height:300px">
          </line-chart>
         </div>
      </div>
      <div class="col-12 col-lg-4 card">
        <div class=" bg-white pb-0 text-left ">
          <div class="row">
          <p class="col-sm pt-3 ml-2">최근 한 달 주요 활동 기록</p>
          </div>
        </div>
        <donut-chart :labels="['수면','걷기','달리기']"
                     :data="[8, 3, 1]"
                     style="height: 70%"
                     class=""></donut-chart>
      </div>
    </div>
    
    <div class="row d-flex justify-content-center mb-4">
      <div class="col-lg-6 card mr-4">
        <div class=" bg-white pb-0 text-left ">
          <div class="row">
          <p class="col-sm pt-3 ml-2">최근 저장된 건강 정보</p>
          </div>
        </div>
        <base-table :data="this.chart1.data"
                    :columns="this.chart1.columns"
                    thead-classes="text-center border-bottom text-muted"
                    class="text-center table-borderless table mb-3">
        </base-table>
      </div>
      <div class="col-lg-5 card">
        <div class=" bg-white pb-0 text-left ">
          <div class="row">
          <p class="col-sm pt-3 ml-2">최근 진단 및 예측 정보</p>
          </div>
        </div>
        <base-table :data="this.chart2.data"
                    :columns="this.chart2.columns"
                    thead-classes="text-center border-bottom text-muted"
                    class="text-center table-borderless table mb-3"></base-table>
      </div>
    </div>

    <div class="row d-flex justify-content-center mb-4">
    <div class=" card container-fluid ml-4 mr-4" style="width:94%">
      <div class=" bg-white pb-0">
          <div class="row">
          <p class="col-sm pt-3 ml-2">게임 별 점수 변화</p>
          <el-menu class="col-sm nav justify-content-end card-header-tabs mb-3">
            <div v-for="(option, index) in GameLineChartCategories"
                    :default-active="GameLineChart.activeIndex" class="el-menu-demo el-menu--horizontal" mode="horizontal"
                    :key="option"
                    :class="{active: GameLineChart.activeIndex === index}"
                    :id="index">
                <el-menu-item :index="index" 
                    @click="initGameChart(index)"
                    name="options" autocomplete="off"
                    :checked="GameLineChart.activeIndex === index">
                {{option}}
                </el-menu-item>
            </div>
            </el-menu>
            <div class="line"></div>
          
        </div>
        </div>

      
        <div class="chart-area container-fluid">
        <line-chart style="height: 300px" class=""
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
</div>
</template>
<style>
.table{
  font-size: 80%
}

</style>

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
        chart1:{
          //data Type : LIFE LOG, MED_RECORD, DIAG_PREDICT, TRAINING
          data:[{'date':'2019.05.01 00:01:00', 'datatype':'LIFE LOG', "tag":'mobileapp'},
                {'date':'2019.05.01 00:10:00', 'datatype':'DIAG_PREDICT', "tag":'ECG'},
                {'date':'2019.05.02 00:03:30', 'datatype':'TRAINING', "tag":'game'},
                {'date':'2019.05.09 00:07:17', 'datatype':'MED_RECORD', "tag":'hospital'},
                {'date':'2019.05.10 00:10:00', 'datatype':'DIAG_PREDICT', "tag":'ECG'}],
          columns:['date', 'datatype', 'tag']
        },
        chart2:{
          //date : 진단 및 예측 정보 발생 날짜, datatype : 데이터 타입, content : 예측 및 진단 정보
          data:[{'date':'2019.05.01 00:01:00', 'datatype':'diagnosis', "content":'cold'},
                {'date':'2019.05.01 00:10:00', 'datatype':'prediction', "content":'fever'},
                {'date':'2019.05.02 00:03:30', 'datatype':'diagnosis', "content":'stomachache'},
                {'date':'2019.05.09 00:07:17', 'datatype':'diagnosis', "content":'toothache'},
                {'date':'2019.05.10 00:10:00', 'datatype':'prediction', "content":'headache'}],
          columns:['date', 'datatype', 'content']
        },
        bigLineChart: {
          allData: [
            [6, 9, 7, 7, 10, 5],
            [800, 532, 1023, 1006, 693, 310],
            [80, 85, 83, 90, 75, 82]
          ],
          activeIndex: 0,
          chartData: null,
          extraOptions: chartConfigs.purpleChartOptions,
          gradientColors: config.colors.primaryGradient,
          gradientStops: [1, 0.4, 0],
          categories: ['수면시간', '활동량', '심박수']
        },
        GameLineChart: {
          allData: [
            [100, 70, 90, 70, 85, 60],
            [800, 532, 1023, 1006, 693, 310],
            [80, 85, 83, 90, 75, 82]
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
          labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
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
          labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
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
