<template>
<div class="dashboard">
  <div class="row d-flex justify-content-center mb-4">
    <div class="col-lg-8 pr-0">
      <div class="row">
      <div class="col-lg-6 card mr-4 border-right">
        <div class=" bg-white pb-0">
          <div class="row">
          <p class="col-sm pt-3 pl-4 font-weight-bold mb-4">활동량</p>
            <!-- <el-menu class="col-sm nav justify-content-end card-header-tabs mb-3 border-bottom border-right-0 bg-transparent el-menu-demo" :default-active="bigLineChart.activeIndex" mode="horizontal" >
            <el-menu-item v-for="(option, index) in bigLineChartCategories" 
                    :key="option"
                    :class="{active: bigLineChart.activeIndex === index}"
                    :id="index"
                    :index="index" 
                    @click="initBigChart(index)"
                    name="options" autocomplete="off"
                    :checked="bigLineChart.activeIndex === index">                  
                {{option}}
            </el-menu-item>
            </el-menu> -->
            <div class="line"></div>
        </div>
        </div>
        
        
        <div class="chart-area row">
          <div class="col-lg-9">
            <bar-chart :width="500" :height="200">
            </bar-chart>
          </div>

          <div class="col-lg-3">
            <div class="text">
              <p class="mb-0">평균 거리</p>
              <div class="row d-flex justify-content-start align-items-center">
                    <div class="col-lg-7 pr-0">
                      <h4 >6.59</h4>
                    </div>
                    <div class="col-lg-4 pl-0">
                      <p class="mb-0">km</p>
                    </div>
                  </div>
              <p class="mb-0">평균 걸음 수</p>
              <div class="row d-flex justify-content-start align-items-center">
                    <div class="col-lg-8 pr-0">
                      <h4 >1245</h4>
                    </div>
                    <div class="col-lg-4 pl-0">
                      <p class="mb-0">걸음</p>
                    </div>
                  </div>
              <p class="mb-0">평균 활동 시간</p>
              <div class="row d-flex justify-content-start align-items-center ">
                    <div class="col-lg-5 pr-0">
                      <h4 class="mb-0">68</h4>
                    </div>
                    <div class="col-lg-6 pl-0">
                      <p class="mb-0">분 걷기</p>
                    </div>
                  </div>
              <div class="row d-flex justify-content-start align-items-center">
                    <div class="col-lg-5 pr-0">
                      <h4 >30</h4>
                    </div>
                    <div class="col-lg-6 pl-0">
                      <p class="mb-0">분 뛰기</p>
                    </div>
                  </div>

            </div>
          </div>
        </div>
      </div>
      

 
      <div class="col-lg-5 card ">
        <div class=" bg-white pb-0 text-left ">
          <div class="row mb-3">
          <p class="col-sm pt-3 ml-2 mb-2 font-weight-bold">혈압 혈당</p>
          <el-menu class="col-sm nav justify-content-end card-header-tabs mb-3 border-right-0 bg-transparent el-menu-demo" :default-active="GameLineChart.activeIndex" mode="horizontal">
            <el-menu-item v-for="(option, index) in bigLineChartCategories" 
                    :key="option"
                    :class="{active: bigLineChart.activeIndex === index}"
                    :id="index"
                    :index="index" 
                    @click="initBigChart(index)"
                    name="options" autocomplete="off"
                    :checked="bigLineChart.activeIndex === index">                  
                {{option}}
            </el-menu-item>
            </el-menu>
          </div>
        </div>
        <div class="chart-area">
          <line-chart     ref="bigChart"
                          chart-id="big-line-chart"
                          :chart-data="bigLineChart.chartData"
                          :gradient-colors="bigLineChart.gradientColors"
                          :gradient-stops="bigLineChart.gradientStops"
                          :extra-options="bigLineChart.extraOptions"
                          :width="500" :height="200">
          </line-chart>
         </div>
      </div>
      </div>

      <div class="row">
        
          <div class="card mr-5 mb-4 mt-4">
            <div class=" bg-white pb-0 text-left ">
              <div class="row mb-3">
              <p class="col-sm pt-3 ml-2 mb-2 font-weight-bold">심박수</p>
              </div>
            </div>
            <div class="chart-area row">
              <div class="col-lg-10">
                <line-chart     ref="bigChart"
                              chart-id="big-line-chart"
                              :chart-data="HeartLineChart.chartData"
                              :gradient-colors="HeartLineChart.gradientColors"
                              :gradient-stops="HeartLineChart.gradientStops"
                              :extra-options="HeartLineChart.extraOptions"
                              :width="600" :height="150">
              </line-chart>
              </div>
              
              <div class="col-lg-2">
                <div class="text">
                  <p class="mb-0">지방연소</p>
                  <div class="row d-flex justify-content-start align-items-center">
                    <div class="col-lg-4 pr-0">
                      <h4 >30</h4>
                    </div>
                    <div class="col-lg-1 pl-0">
                      <p class="mb-0">분</p>
                    </div>
                  </div>
                  
                  <p class="mb-0">심장 강화 구간</p>
                  <div class="row d-flex justify-content-start align-items-center">
                    <div class="col-lg-4 pr-0">
                      <h4 >21</h4>
                    </div>
                    <div class="col-lg-1 pl-0">
                      <p class="mb-0">분</p>
                    </div>
                  </div>
                  <p class="mb-0">정점 구간</p>
                  <div class="row d-flex justify-content-start align-items-center">
                    <div class="col-lg-4 pr-0">
                      <h4 >05</h4>
                    </div>
                    <div class="col-lg-1 pl-0">
                      <p class="mb-0">분</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

     
      <div class="card mr-5 mb-4">
        <div class=" bg-white pb-0 text-left ">
          <div class="row">
          <p class="col-sm pt-3 ml-2 mb-2 font-weight-bold">건강 정보</p>
          </div>
        </div>
        <div class="chart-area text-center">
          <h4>22.79</h4>
          <p>홍길동님은 정상 범위에 속합니다</p>
          <HorizontalBar :width="100" :height="70"></HorizontalBar>
         </div>

      </div>
    
      
      </div>
    </div>

    <div class="col-lg-3 pl-0">
      <div class="card mb-4">
        <div class=" bg-white pb-0 text-left ">
          <div class="row mb-3">
          <p class="col-sm pt-3 ml-2 mb-2 font-weight-bold">수면</p>
          </div>
        </div>
        <div class="chart-area d-flex justify-content-center">
          <donut-chart :labels="['깊은 수면 8시간','램 수면 3시간','얕은 수면 1시간']"
                     :data="[8, 3, 1]"
                     :width="300" :height="300"
                     class=""></donut-chart>
         </div>

      </div>

      <div class="card">
        <div class=" bg-white pb-0 text-left ">
          <div class="row mb-3">
          <p class="col-sm pt-3 ml-2 mb-2 font-weight-bold">최근 진단 및 예측 정보</p>
          </div>
        </div>
        <div class="row d-flex justify-content-start align-items-center mb-4">
          <font-awesome-icon icon="smile" size="5x" style="color:rgb(99,202,99);" class="col-sm pr-0"/>
          <h4 class="col-sm pl-0">좋아요</h4>
          
         </div>
         <div class="container ">
           <div class="row d-flex justify-content-start mb-3">
             <div class="col-lg-1">
               <font-awesome-icon icon="smile"  style="color:rgb(99,202,99);"/>
             </div>
             <div class="col-lg-3">
                혈압
             </div>
             <div class="col">
               정상입니다.
             </div>
           </div>
           <div class="row d-flex justify-content-start mb-3">
             <div class="col-lg-1">
               <font-awesome-icon icon="smile" style="color:rgb(99,202,99);"/>
             </div>
             <div class="col-lg-3">
                혈당
             </div>
             <div class="col">
               정상입니다.
             </div>
           </div>
           <div class="row d-flex justify-content-start mb-3">
             <div class="col-lg-1">
               <font-awesome-icon icon="smile" style="color:rgb(99,202,99);"/>
             </div>
             <div class="col-lg-3">
                체중
             </div>
             <div class="col">
               정상입니다.
             </div>
           </div>
           <div class="row d-flex justify-content-start mb-3">
             <div class="col-lg-1">
               <font-awesome-icon icon="smile" style="color:rgb(99,202,99);"/>
             </div>
             <div class="col-lg-3">
                수면
             </div>
             <div class="col">
               정상입니다.
             </div>
           </div>
           <div class="row d-flex justify-content-start mb-3">
             <div class="col-lg-1">
               <font-awesome-icon icon="smile" style="color:rgb(99,202,99);"/>
             </div>
             <div class="col-lg-3 pr-0">
                활동량
             </div>
             <div class="col ">
               정상입니다.
             </div>
           </div>
         </div>

      </div>
    </div>
    </div>



    <!-- ////////////////////// -->



    


    <!-- <div class="row d-flex justify-content-center mb-4">
      <div class="col-12 col-lg-7 card mr-4 border-right">
        <div class=" bg-white pb-0">
          <div class="row">
          <p class="col-sm pt-3 pl-4 border-bottom">활동량</p>
            <el-menu class="col-sm nav justify-content-end card-header-tabs mb-3 border-bottom border-right-0 bg-transparent el-menu-demo" :default-active="bigLineChart.activeIndex" mode="horizontal" >
            <el-menu-item v-for="(option, index) in bigLineChartCategories" 
                    :key="option"
                    :class="{active: bigLineChart.activeIndex === index}"
                    :id="index"
                    :index="index" 
                    @click="initBigChart(index)"
                    name="options" autocomplete="off"
                    :checked="bigLineChart.activeIndex === index">                  
                {{option}}
            </el-menu-item>
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
          <div class="row border-bottom mb-3">
          <p class="col-sm pt-3 ml-2 mb-2">최근 한 달 주요 활동 기록</p>
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
          <div class="row border-bottom">
          <p class="col-sm pt-3 ml-2 mb-2">최근 저장된 건강 정보</p>
          </div>
        </div>
        <base-table :data="this.chart1.data"
                    :columns="this.chart1.columns"
                    thead-classes="text-center border-bottom text-muted border-bottom-0"
                    class="text-center table-borderless table mb-3 table-striped "
                    tbodyClasses="">
        </base-table>
      </div>
      <div class="col-lg-5 card">
        <div class=" bg-white pb-0 text-left ">
          <div class="row border-bottom">
          <p class="col-sm pt-3 ml-2 mb-2">최근 진단 및 예측 정보</p>
          </div>
        </div>
        <base-table :data="this.chart2.data"
                    :columns="this.chart2.columns"
                    thead-classes="text-center border-bottom text-muted border-bottom-0"
                    class="text-center table-borderless table mb-3 table-striped"></base-table>
      </div>
    </div> -->

    <div class="row d-flex justify-content-center mb-4">
    <div class=" card container-fluid ml-4 mr-4" style="width:94%">
      <div class=" bg-white pb-0">
          <div class="row">
          <p class="col-sm pt-3 pl-4 font-weight-bold">게임 별 점수 변화</p>
          <el-menu class="col-sm nav justify-content-end card-header-tabs mb-3 border-right-0 bg-transparent el-menu-demo" :default-active="GameLineChart.activeIndex" mode="horizontal">
            <el-menu-item v-for="(option, index) in GameLineChartCategories" 
                    :key="option"
                    :class="{active: GameLineChart.activeIndex === index}"
                    :id="index"
                    :index="index" 
                    @click="initGameChart(index)"
                    name="options" autocomplete="off"
                    :checked="GameLineChart.activeIndex === index">                  
                {{option}}
            </el-menu-item>
            </el-menu>


          
            <div class="line"></div>
          
        </div>
        </div>

      
        <div class="chart-area container-fluid">
        <line-chart     :width="200" :height="200"
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

.table-striped tbody tr:nth-of-type(odd){
  background-color: rgb(242, 247, 252, 0.7)!important
}

.text{
  font-size: 60%;
}
</style>

<script>
import LineChart from '../components/Chart/LineChart.js';
import DonutChart from '../components/Chart/DonutChart.js';
import BaseTable from "../components/BaseTable.vue";
import * as chartConfigs from '../components/Chart/config.js';
import config from '../config';
import BarChart from '../components/Chart/BarChart.js';
import HorizontalBar from "../components/Chart/HorizontalBar.js";


export default {
    components: {
      LineChart,
      BaseTable,
      DonutChart,
      LineChart,
      BarChart,
      HorizontalBar
      
    },
    data() {
      return {
        // chart1:{
        //   //data Type : LIFE LOG, MED_RECORD, DIAG_PREDICT, TRAINING
        //   data:[{'date':'2019.05.01 00:01:00', 'datatype':'LIFE LOG', "tag":'mobileapp'},
        //         {'date':'2019.05.01 00:10:00', 'datatype':'DIAG_PREDICT', "tag":'ECG'},
        //         {'date':'2019.05.02 00:03:30', 'datatype':'TRAINING', "tag":'game'},
        //         {'date':'2019.05.09 00:07:17', 'datatype':'MED_RECORD', "tag":'hospital'},
        //         {'date':'2019.05.10 00:10:00', 'datatype':'DIAG_PREDICT', "tag":'ECG'}],
        //   columns:['date', 'datatype', 'tag']
        // },
        // chart2:{
        //   //date : 진단 및 예측 정보 발생 날짜, datatype : 데이터 타입, content : 예측 및 진단 정보
        //   data:[{'date':'2019.05.01 00:01:00', 'datatype':'diagnosis', "content":'cold'},
        //         {'date':'2019.05.01 00:10:00', 'datatype':'prediction', "content":'fever'},
        //         {'date':'2019.05.02 00:03:30', 'datatype':'diagnosis', "content":'stomachache'},
        //         {'date':'2019.05.09 00:07:17', 'datatype':'diagnosis', "content":'toothache'},
        //         {'date':'2019.05.10 00:10:00', 'datatype':'prediction', "content":'headache'}],
        //   columns:['date', 'datatype', 'content']
        // },
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
          categories: ['혈압', '혈당']
        },
        HeartLineChart: {
          allData: [
            [10, 9, 7, 3, 10, 2],
            [800, 532, 1023, 1006, 693, 310],
            [80, 85, 83, 90, 75, 82]
          ],
          activeIndex: 0,
          chartData: null,
          extraOptions: chartConfigs.purpleChartOptions,
          gradientColors: config.colors.primaryGradient,
          gradientStops: [1, 0.4, 0],
          categories: ['혈압', '혈당']
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
      },
      HeartLineChartCategories() {
        return this.HeartLineChart.categories;
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
      },
      initHeartChart(index) {
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
            data: this.HeartLineChart.allData[index]
          }],
          labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
        }
        this.$refs.bigChart.updateGradients(Data);
        this.HeartLineChart.chartData = Data;
        this.HeartLineChart.activeIndex = index;
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
      this.initHeartChart(0);
    }
}


</script>
