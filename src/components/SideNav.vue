<template>
    <div class="">
        <!--로고-->
        <div class="row mt-4 justify-content-center">
            <font-awesome-icon icon="leaf" size="1x" class="mr-2" color="#409EFF"/>
            <h5>Ohdep</h5>
        </div>

        <!-- 유저 이름 / 로그인 로그아웃-->
        <div class="row mt-5 justify-content-center">
            <h5 class="username">{{this.name}}</h5>
        </div>
        <div class="row font-weight-light justify-content-center">
            <div class="col text-right  pl-0 pr-1">
                <a href="#">Login</a>
            </div>
            <div class="col text-left  pl-1 pr-0">
                <a href="#">Logout</a>
            </div>
        </div>

        <el-row class="tac mt-5">
        <el-col>
            <el-menu
                :default-active="active"
                class="el-menu-vertical-demo border-right-0"
                v-for="(i,index) in this.columns" :key="index">
                <router-link :to="i[1]"
                    style="text-decoration:none" 
                    @click="active(index)"
                    data-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarDashboards">
                    <el-menu-item :index="index" class="">
                        <i class="el-icon-s-platform" v-if="index==0"></i>
                        <i class="el-icon-user-solid" v-if="index==1"></i>
                        <i class="el-icon-info" v-if="index==2"></i>
                        <span>{{i[0]}}</span>
                    </el-menu-item>
                </router-link>
            </el-menu>
        </el-col>
        </el-row>

    


    </div>
</template>
<style>
div a{
    font-size: 70%
}
a span{
    font-size: 150%
}
</style>

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
        },
        active:{
            type: Number,
            default: () => 0,
        }
    },
    methods:{
        active(index){
            console.log(index)
        }
    }
}
</script>
