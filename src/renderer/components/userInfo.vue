<template>
    <div class="main-user">
        <div v-if="userList">
            <div class="userImgBox">
                <img class="userImg"  :src="userList.face"/>
                <div class="uname">{{userList.uname}}</div>

                <!-- <div class="livelv">LV{{userList3.user_level}}</div> -->
                <div class="lvbox">
                    <div class="progressbar">
                        <div class="bluebar" :style="{width:probar+'%'}"></div>
                        <div class="exp"><span>{{userList.level_info.current_exp}}/{{userList.level_info.next_exp}}</span></div>
                    </div>
                    <div :class="'lv lv'+userList.level_info.current_level">LV{{userList.level_info.current_level}}</div>
                </div>

                <div class="lvbox">
                    <div class="progressbar">
                        <div class="bluebar" :style="{width:proba2r+'%'}"></div>
                        <div class="exp"><span>{{userList3.user_intimacy}}/{{userList3.user_next_intimacy}}</span></div>
                    </div>
                     <div class="livelv">LV{{userList3.user_level}}</div>
                </div>
                
                <div class="info">
                    <div><span class="iconUid">UID</span>&nbsp;{{userList.wallet.mid}}</div>
                    <div><span class="iconUid">硬币数</span>&nbsp;{{userList.money}}</div>
                    <div><span class="iconUid">银瓜子</span>&nbsp;{{userList3.silver}}</div>
                    <div><span class="iconUid">金瓜子</span>&nbsp;{{userList3.gold}}</div>
                </div>
            </div>
             <div class="userImgBox fffline">
                 321321
             </div>
        </div>
    </div>
</template>

<script>
import {userInfo,liveUserInfo} from '../api/api'
import Utils from '../util/utilz'
export default {
    data(){
        return{
            userList:[],
            userList2:[],
            userList3:[],
            probar:0,
            proba2r:0
        }
    },
     methods:{
        //计算百分比
        getPercent(curNum, totalNum, isHasPercentStr) {
         curNum = parseFloat(curNum)
            totalNum = parseFloat(totalNum)
            if (isNaN(curNum) || isNaN(totalNum)) {
                return '100';
            }
            return isHasPercentStr ?
                totalNum <= 0 ? '0%' : (Math.round(curNum / totalNum * 10000) / 100.00 + '%') :
                totalNum <= 0 ? 0 : (Math.round(curNum / totalNum * 10000) / 100.00);
        },
        getUserInfo(){
            userInfo().then(res=>{
                this.userList=res.data
                this.probar=parseInt(this.getPercent(res.data.level_info.current_exp,res.data.level_info.next_exp))
                console.log(this.probar)
            })
            liveUserInfo().then(res=>{
                this.userList3=res.data
                this.proba2r=parseInt(this.getPercent(res.data.user_intimacy,res.data.user_next_intimacy))
                console.log(res.data)
            })
            
            
        },
    },
    created(){
        this.getUserInfo()
    }
}
</script>

<style scoped>

    .fffline{
        border-top: 1px solid white;
    }
    
    .iconUid{
        font-size: 0.13rem;
        padding: 0.02rem 0.05rem;
        color: white;
        background: #9BD7F1;
    }
    .info{
        color: white;
        display: flex;
        flex-wrap: wrap;
        padding: 0 0.10rem;
    }

    .info div{
        text-align: center;
        width: 25%;
        padding: 0.10rem 0;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }

    .icon img{
        width: 0.20rem;
        height: 0.20rem;
        vertical-align: text-bottom;
    }

    .progressbar{
        border: 0.01rem solid white;
        position: relative;
        display: inline-block;
        width: 2rem;
        height: 0.14rem;
        background: transparent;
        margin: 0.05rem auto;
        border-radius: 0.10rem;
    }

    .bluebar{
        position: absolute;
        border-radius: 0.10rem;
        left: 0;
        transition: all 0.3s ease;
        background: #7bdeff;
        width: 0%;
        height: 0.14rem;
    }

    .exp{
        color: white;
        font-size: 0.13rem;
        line-height: 0.13rem;
        position: relative;
        z-index: 999;
    }

    .userImgBox{
        padding: 0.20rem 0;
        background: #26AFDD;
        background-position: center;
        background-size: cover;
    }


    .uname{
        font-weight: bold;
        color: white;
        font-size: 0.18rem;
    }

    .userImg{
        width: 0.80rem;
        height: 0.80rem;
        border-radius: 50%;
    }
    
    .main-user{
        width: 100%;
        text-align: center;
    }
</style>