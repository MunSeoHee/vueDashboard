<template>
<el-row>
    <el-col :span="3" class="be-left-sidebar mr-0 pr-0">
        <side-nav :columns="this.list"></side-nav>
    </el-col>
    <el-col :span="21" class=" bg-light container-fluid ml-0 mr-0">
        <router-view class="mt-3"></router-view>
    </el-col>
</el-row>
</template>
<style>
.row > div{
    width: 150%
}
</style>

<script>
import SideNav from './SideNav';
export default {
    components:{
        SideNav
    },
    data(){
        return{
            list:[['dashboard','/maindashboard'], ['info','/info'],['healthinfo','/healthinfo']]
        }
    }
}
</script>
