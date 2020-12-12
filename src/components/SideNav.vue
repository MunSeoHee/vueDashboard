<template>
    <div class="">
        <div style="background-color:rgb(67,98,127)" class="pb-5">
            <div class="justify-content-left text-light">
                <h5>OHDEP</h5>
            </div>

            <div class="container-fluid mt-5 d-flex justify-content-center text-light text-center">
                <div class="row">
                    <h5 class="username col">{{this.name}}</h5>
                    <div class="w-100"></div>
                    <p class="username col" style="font-size:50%">1996.02.12</p>
                </div>     
            </div>

            <div class="container mt-1 justify-content-center text-light mr-5 ml-3" style="font-size:80%; width:80%">
                <div class="row">
                    <div class="col">AGE</div>
                    <div class="col text-right">32</div>
                </div>
                <div class="row">
                    <div class="col">HEIGHT</div>
                    <div class="col text-right">185</div>
                </div>
                <div class="row">
                    <div class="col-lg-8">BLOOD TYPE</div>
                    <div class="col-lg-4 text-right">A</div>
                </div>
            </div>
        
        </div>

        <div class="container" >
            <div class="row">
                <div v-for="(i,index) in this.columns"
                    :key="index"
                    :default-active="0"
                     class="row d-flex justify-content-center mt-4">
                    <a v-bind:href="i[1]" class="text-secondary text-center" style="font-size:100%">
                        <i class="el-icon-s-platform" v-if="index==0" style="font-size:200%"></i>
                        <i class="el-icon-user-solid" v-if="index==1" style="font-size:200%"></i>
                        <i class="el-icon-info" v-if="index==2" style="font-size:200%"></i>
                        <i class="el-icon-s-marketing" v-if="index==3" style="font-size:200%"></i>
                        <p>{{i[0]}}</p>
                    </a>
                </div>
                </div>
                
            </div>
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
            default: () => '홍길동',
            description: "User Name"
        },
        active:{
            type: Number,
            default: () => 0,
        }
    },

}
</script>