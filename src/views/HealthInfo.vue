<!-- 차트 오버레이 찾아보기
1. https://vuejsexamples.com/create-interactive-charts-easily-with-vue-highcharts/
2. https://hackernoon.com/creating-stunning-charts-with-vue-js-and-chart-js-28af584adc0a
3. https://stackoverflow.com/questions/51022003/vue-chartjs-create-gradient-background-for-chart-from-child-component-canvas
 -->
<template>
<div class="bg-light container-flex m-3 mb-0" style="font-size:20px; min-height: 100vh;">
    <div class="card border-0 mt-4">
        <div class="card-title font-weight-bold pt-3 pl-3">상세정보</div>
        <div class="row p-3">
            <div class="col-4 btn-group btn-group-sm">
                <!-- 각각의 버튼 on off로 변경 -->
                <button class="btn btn-sm btn-dark p-0" @click="selectdata(0)" :class="{active: !isActive1}" style="border-top-left-radius:30px !important; border-bottom-left-radius:30px !important;">활동량</button>
                <button class="btn btn-sm btn-dark p-0" @click="selectdata(1)" :class="{active: isActive2}">혈압/혈당</button>
                <button class="btn btn-sm btn-dark p-0" @click="selectdata(2)" :class="{active: isActive3}">심박수</button>
                <button class="btn btn-sm btn-dark p-0" @click="selectdata(3)" :class="{active: isActive4}" style="border-top-right-radius:30px !important; border-bottom-right-radius:30px !important;">몸무게</button>
            </div>
            <div class="col-1"></div>
            <div class="col-2 btn-group btn-group-sm">
                <button class="btn btn-sm btn-dark p-0" style="border-top-left-radius:30px !important; border-bottom-left-radius:30px !important;" id="stable" @click="toggleshowType('a')" :class="{active: isActive}">표</button>
                <button class="btn btn-sm btn-dark p-0" style="border-top-right-radius:30px !important; border-bottom-right-radius:30px !important;" id="schart" @click="toggleshowType('b')" :class="{active: !isActive}">차트</button>
            </div>
            <div class="col-1"></div>
            <div class="col-4 form-group">
                <div class="row m-0">
                    <label class="col-3 text-right" for="period">기간</label>
                    <select class="col-6 form-control rounded-pill" id="period">
                        <option v-for="option in Periods" v-bind:key="option.value">{{ option.period }}</option>
                    </select>
                    <div class="col-1"></div>
                    <button class="col-2 aliign-right btn btn-sm btn-dark rounded-pill m-0">조회</button>
                </div>
            </div>
        </div>
        <div v-if="showType === 'chart'">
            <div class="row m-0 p-3" key="chart">
                <line-chart
                    ref="bigChart"
                    chart-id="big-line-chart"
                    :chart-data="bigLineChart.chartData"
                    :extra-options="bigLineChart.extraOptions"
                    style="height: auto;">
                </line-chart>
            </div>
        </div>
        <div v-else>
            <div class="row m-0 p-3" key="table">
                <paginated-table
                    class="table"
                    :data="table.allData[index]"
                    :columns="columns"
                    thead-classes="bg-dark text-white">
                </paginated-table>
            </div>
        </div>
    </div>
</div>
</template>

<style>
.btn {
    max-height: 35px;
}
</style>

<script>
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import PaginatedTable from "../components/PaginatedTable.vue";
import LineChart from '../components/Chart/LineChart.js';
import * as chartConfigs from '../components/Chart/config.js';
import config from '../config';

export default {
    components: {
      PaginatedTable,
      LineChart
    },
    data() {
        return {
            active:false,
            showType: 'chart',
            index:0,
            itemNum:3,
            pageNum:2,
            fDate: '1900-01-01',
            lDate: new Date().toISOString().slice(0,10),
            columns: ["Num", "Date", "Type", "Info"],
            Periods: [
                {period: '1주(7일)'},
                {period: '2주'},
                {period: '4주(한달)'},
                {period: '3달(1분기)'},
                {period: '6달'},
                {period: '1년'},
                {period: '3년'}
            ],
            table: {
                allData: [
                    [{
                        num: 1,
                        date: '2019-01-01',
                        type: 'Life',
                        info: 'info'
                    },
                    {
                        num: 2,
                        date: '2019-01-01',
                        type: 'Life',
                        info: 'info'
                    },
                    {
                        num: 3,
                        date: '2019-01-01',
                        type: 'Life',
                        info: 'info'
                    },
                    {
                        num: 4,
                        date: '2019-01-01',
                        type: 'Life',
                        info: 'info'
                    },
                    {
                        num: 5,
                        date: '2019-01-01',
                        type: 'Life',
                        info: 'info'
                    }],
                    [{
                        num: 1,
                        date: '2019-01-01',
                        type: 'Blood',
                        info: 'info'
                    },
                    {
                        num: 2,
                        date: '2019-01-01',
                        type: 'Blood',
                        info: 'info'
                    },
                    {
                        num: 3,
                        date: '2019-01-01',
                        type: 'Blood',
                        info: 'info'
                    },
                    {
                        num: 4,
                        date: '2019-01-01',
                        type: 'Blood',
                        info: 'info'
                    },
                    {
                        num: 5,
                        date: '2019-01-01',
                        type: 'Blood',
                        info: 'info'
                    }],
                    [{
                        num: 1,
                        date: '2019-01-01',
                        type: 'Heart',
                        info: 'info'
                    },
                    {
                        num: 2,
                        date: '2019-01-01',
                        type: 'Heart',
                        info: 'info'
                    },
                    {
                        num: 3,
                        date: '2019-01-01',
                        type: 'Heart',
                        info: 'info'
                    },
                    {
                        num: 4,
                        date: '2019-01-01',
                        type: 'Heart',
                        info: 'info'
                    },
                    {
                        num: 5,
                        date: '2019-01-01',
                        type: 'Heart',
                        info: 'info'
                    }],
                    [{
                        num: 1,
                        date: '2019-01-01',
                        type: 'Weight',
                        info: 'info'
                    },
                    {
                        num: 2,
                        date: '2019-01-01',
                        type: 'Weight',
                        info: 'info'
                    },
                    {
                        num: 3,
                        date: '2019-01-01',
                        type: 'Weight',
                        info: 'info'
                    },
                    {
                        num: 4,
                        date: '2019-01-01',
                        type: 'Weight',
                        info: 'info'
                    },
                    {
                        num: 5,
                        date: '2019-01-01',
                        type: 'Weight',
                        info: 'info'
                    }]
                ]
            },
            bigLineChart: {
                allData: [
                    [6, 9, 7, 7, 10, 5],
                    [800, 532, 1023, 1006, 693, 310],
                    [80, 85, 83, 90, 75, 82],
                    [10, 58, 29, 34, 29, 68]
                ],
                activeIndex: 0,
                chartData: null,
                extraOptions: chartConfigs.purpleChartOptions,
                categories: ['수면시간', '활동량', '심박수']
            }
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
    methods: {
        initBigChart(index) {
            let Data = {
                datasets: [{
                    fill: true,
                    borderColor: 'config.colors.dark',
                    borderWidth: 3,
                    pointBackgroundColor: 'config.colors.dark',
                    pointBorderColor: 'config.colors.dark',
                    pointHoverBackgroundColor: 'config.colors.dark',
                    pointRadius: 5,
                    data: this.bigLineChart.allData[index]
                }],
                labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
            }
            this.bigLineChart.chartData = Data;
            this.bigLineChart.activeIndex = index;
        },
        selectdata(value){
            if(value===0) {
                this.index=0;
                this.isActive1=!this.isActive1;
            } else if(value===1) {
                this.index=1;
                this.isActive2=!this.isActive2;
            } else if(value===2) {
                this.index=2;
                this.isActive3=!this.isActive3;
            } else{
                this.index=3;
                this.isActive4=!this.isActive4;
            }
        },
        toggleshowType(x) {
            if(x=='a'){
                this.showType = 'table'
                this.isActive=!this.isActive;
            }
            else{
                this.showType = 'chart'
                this.isActive=!this.isActive;
            }
        }
    },
    mounted() {
        this.initBigChart(0);
    }
}
</script>