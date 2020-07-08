<template>
  <div id="wrapper">
    <div class="loginBox">
        <div class="tipscodeBox"  @mouseenter="chageTips()" @mouseleave="chageTipsOut()">
           <div v-show="isTips==true" class="qrcode" ref="qrCodeUrl"></div>
           <div v-show="isTips==false" class="tipsImg"><img src="../../../static/tips.png"/></div>
        </div>
       <div class="tpsLogin">扫描二维码登入</div>
       <div class="tpsLogin">请使用哔哩哔哩客户端</div>
       <div class="tpsLogin">扫码登录</div>
       <div class="tpsLogin">或扫码下载APP</div>
    </div>
  </div>
</template>

<script>
 import QRCode from 'qrcodejs2'
 import {loginCode,judgelogin,userInfo} from '../api/api'
 import Cookie from 'js-cookie'
 import { getUrlKey } from '../util/urlvalue';
  export default {
    name: 'landing-page',
    data(){
      return{
        loginCode:"",
        timer:"",
        isTips:true
      }
    },
    methods: {
      chageTips(){
        this.isTips=false
      },
      chageTipsOut(){
        this.isTips=true
      },
      getUserInfo(){
       userInfo().then(res=>{
         if(res.code==0){
           console.log(res)
           clearInterval(this.timer)
           this.$router.push('/userIndex')
         }
       })
      },
      getCode(){
        loginCode().then(res=>{
          this.loginCode=res.data.oauthKey
          this.creatQrCode(res.data.url)
          this.timer=setInterval(() => {
            this.setLogin()
          }, 1500);
        })
      },

      setLogin(){
        let obj={"oauthKey":this.loginCode}
        judgelogin(obj).then(res=>{
          if(res.code==0){
            clearInterval(this.timer)
            let sessdata=getUrlKey("SESSDATA",res.data.url)
            let bili_jct=getUrlKey("bili_jct",res.data.url)
            let DedeUserID=getUrlKey("DedeUserID",res.data.url)
            let DedeUserID__ckMd5=getUrlKey("DedeUserID__ckMd5",res.data.url)
            let Expires=getUrlKey("Expires",res.data.url)

            Cookie.set('SESSDATA',sessdata,{domain:'.bilibili.com'})
            Cookie.set('bili_jct',bili_jct,{domain:'.bilibili.com'})
            Cookie.set('DedeUserID',DedeUserID,{domain:'.bilibili.com'})
            Cookie.set('DedeUserID__ckMd5',DedeUserID__ckMd5,{domain:'.bilibili.com'})
            Cookie.set('Expires',Expires,{domain:'.bilibili.com'})

            console.log(sessdata)
            this.getUserInfo()
          }
        }).catch(err => {
           console.log(err)
        })
      },

      creatQrCode(value) {
            var qrcode = new QRCode(this.$refs.qrCodeUrl, {
                text:  value, // 需要转换为二维码的内容
                width: 180,
                height: 180,
                colorDark: '#000000',
                colorLight: '#ffffff',
                correctLevel: QRCode.CorrectLevel.H
            })
        },
      },
      created() {
        this.getCode()
        this.getUserInfo()
      },
    }
</script>

<style  scoped>

  .tipscodeBox{
    width: 100%;
    height: 200px;
  }

  .tpsLogin{
    font-size:17px;
    width: 100%;
  }

  #wrapper{
    background: url('../../../static/2233login.png') no-repeat;
    background-position: center 270px;
  }

  .qrcode{
   text-align: center;
   overflow: hidden;
   padding-bottom: 20px;
  }

  .tipsImg img{
    width: 600px;
    height: 205px;
  }

  .loginBox{
    position: fixed;
    top:45%;
    left: 50%;
    text-align: center;
    transform: translate(-50%,-50%);
  }

  #wrapper{
    height: 100vh;
  }
</style>

