<template>
<div class="container mt-4 ml-5 pb-5 mr-0 pr-0 pl-0 bg-light">
    <div class="row pb-4 pt-2">
        <div class="col-12"><h1 class="row font-weight-bold">Prediction</h1></div>
    </div>

    <!-- 정보:search -->
    <div class="row bg-white border-top border-primary pt-3 pb-2 pr-0 pl-0">
        <div class="col-2"><input type="Date" class="form-control" v-model="fDate" style="font-size:13px"></div>
        <div class="col-2"><input type="Date" class="form-control" v-model="lDate" style="font-size:13px"></div>
        <div class="col-8 text-right"><button type="button" class="btn btn-primary" style="font-size:13px"><font-awesome-icon icon="search" size="1x" class="mr-1"/>Search</button></div>
    </div>

    <!-- 정보:health info table -->
    <div class="row bg-white p-3"> 
        <paginated-table
            :data="tdata"
            :columns="columns"
            :pageSize="itemNum"
            thead-classes="bg-primary text-white">
        </paginated-table>
    </div>
</div>
</template>

<script>
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import PaginatedTable from "../components/PaginatedTable.vue";


export default {
    components: {
      PaginatedTable
    },
    data() {
        return {
            index:0,
            itemNum:5,
            fDate: '1900-01-01',
            lDate: new Date().toISOString().slice(0,10),
            columns: ["Num", "Tag","Date", "Type", "Data"],
            tdata: [
                {
                    num: 1,
                    tag: 'tag',
                    date: '2019-01-01',
                    type: 'LIFE LOG',
                    data: 'AA'
                },
                {
                    num: 2,
                    tag: 'tag',
                    date: '2019-01-01',
                    type: 'LIFE LOG',
                    data: 'AA'
                },
                {
                    num: 3,
                    tag: 'tag',
                    date: '2019-01-01',
                    type: 'LIFE LOG',
                    data: 'AA'
                },
                {
                    num: 4,
                    tag: 'tag',
                    date: '2019-01-01',
                    type: 'LIFE LOG',
                    data: 'AA'
                },
                {
                    num: 5,
                    tag: 'tag',
                    date: '2019-01-01',
                    type: 'LIFE LOG',
                    data: 'AA'
                },
                {
                    num: 6,
                    tag: 'tag',
                    date: '2019-01-01',
                    type: 'LIFE LOG',
                    data: 'AA'
                },
                {
                    num: 7,
                    tag: 'tag',
                    date: '2019-01-01',
                    type: 'LIFE LOG',
                    data: 'AA'
                },
                {
                    num: 8,
                    tag: 'tag',
                    date: '2019-01-01',
                    type: 'LIFE LOG',
                    data: 'AA'
                },
                {
                    num: 9,
                    tag: 'tag',
                    date: '2019-01-01',
                    type: 'LIFE LOG',
                    data: 'AA'
                },
                {
                    num: 10,
                    tag: 'tag',
                    date: '2019-01-01',
                    type: 'LIFE LOG',
                    data: 'AA'
                }
            ],
        }
    },
    methods: {
        selectdata(value){
            if(value===0) {
                this.index=0;
            } else if(value===1) {
                this.index=1;
            } else if(value===2) {
                this.index=2;
            } else {
                this.index=3;
            }
        }
    }
}
</script>