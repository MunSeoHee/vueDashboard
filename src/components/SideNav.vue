<template>
    <div class="">
        <!--로고-->
        <div class="row mt-4 justify-content-center">
            <font-awesome-icon icon="leaf" size="2x" class="mr-2"/>
            <h3>Ohdep</h3>
        </div>

        <!-- 유저 이름 / 로그인 로그아웃-->
        <div class="row mt-5 justify-content-center">
            <h3>{{this.name}}</h3>
        </div>
        <div class="row font-weight-light justify-content-center">
            <div class="col text-right  pl-0 pr-1">
                <a href="#">Login</a>
            </div>
            <div class="col text-left  pl-1 pr-0">
                <a href="#">Logout</a>
            </div>
        </div>

        <!-- 사이드 네브 항목 -->
        <div class="row mt-5 ">
        <ul class="nav flex-column container-fluid">
            <li class="nav-item mt-3 justify-left-center" v-for="(i,index) in this.columns" :key="index">
                <a class="nav-link collapsed" href="#sidebarDashboards" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarDashboards">
                    <font-awesome-icon icon="home" v-if="index==0" size="2x"/> 
                    <font-awesome-icon icon="user" v-if="index==1" size="2x"/>
                    <font-awesome-icon icon="info" v-if="index==2" size="2x"/>
                    {{i[0]}}
                </a>
            </li>
        </ul>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        columns: {
        type: Array,
        default: () => [],
        description: "Table columns"
      },
        name : {
            type: String,
            default: () => 'User Name',
            description: "User Name"
        }
    }
}
</script>
