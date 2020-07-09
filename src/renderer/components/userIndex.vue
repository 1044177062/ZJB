<template>
    <div>
        <div class="main">
            <div class="leftBox">
                <div class="btnBox" @click="isShow('1')">基本信息</div>
                <div class="btnBox" @click="isShow('2')">日志</div>
                <div class="btnBox">等待添加</div>
                <div class="btnBox" @click="exitLogin()">退出登入</div>
            </div>
            <div class="rightBox">
                 <userinfo :class="isShowValue==1?'topIndex':'bottomIndex'"  rel="userindex" v-if="isShowValue==1"></userinfo>
                 <util :class="isShowValue==2?'topIndex':'bottomIndex'"></util>
            </div>
        </div>
    </div>
</template>

<script>
import {userInfo,exitLogin} from '../api/api'
import Cookie from 'js-cookie'
import userinfo from './userInfo.vue'
import util from './util.vue'
import Utils from '../util/utilz'
export default {
    data(){
        return{
            userList:[],
            isShowValue:1
        }
    },
    components:{
        userinfo,
        util
    },
    methods:{
        exitLogin(){
            exitLogin().then(res=>{
                this.$router.push('/')
            })
        },
        isShow(value){
            this.isShowValue=value
        }
    }
}
</script>

<style scoped>
    .topIndex{
        z-index: 99999;
        height: 100vh;
        position: relative;
    }

    .bottomIndex{
        z-index: 9;
        height: 100vh;
        position: relative;
    }

    .rv{
        width: 100%;
    }

    .main{
        display: flex;
    }

    .leftBox{
        width: 15%;
        border-right: 1px solid white;
        height: 100vh;
    }

    .rightBox{
        width: 85%;
    }

    .btnBox{
        border-bottom: 1px solid white;
        border-right: 1px solid white;
        text-align: center;
        height: 24.7vh;
        line-height: 24.7vh;
        color: white;
        background: #26AFDD;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .btnBox:hover{
        border-bottom: 1px solid white;
         border-right: 5px solid #24708a;
        text-align: center;
        height: 24.7vh;
        line-height: 24.7vh;
        color: white;
        background:#3096b8;
        cursor: pointer;
    }

    
</style>