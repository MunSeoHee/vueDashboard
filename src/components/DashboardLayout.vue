<template>
<div class="row">
    <div class="col-lg-2">
        <side-nav :columns="this.list"></side-nav>
    </div>
    <div class="col-lg-10 bg-light">
        <p>dashboard layout</p>
        <router-view></router-view>
    </div>
</div>
</template>
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
