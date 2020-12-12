<template>
<div class="row">
    <div class=" mr-0 pr-0 col-lg-2 left" style="background-color:rgb(18,41,55);">
        <side-nav :columns="this.list" ></side-nav>
    </div>
    <div class="col-lg-10 container-fluid ml-0 mr-0" style="background-color:rgb(241,244,246)!important">
        <router-view class="mt-3" ></router-view>
    </div>
</div>
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
            list:[['대시보드','/maindashboard'], ['개인 정보 조회/수정','/info'],['개인 건강 정보 조회','/healthinfo']]
        }
    }
}
</script>
