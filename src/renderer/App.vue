<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'zijian',
    beforeCreate(){
      document.title='梓贱助手'
    }
  }
</script>

<style>


  /* CSS */
  #app{
    overflow: hidden;
    width: 100%;
    height: 100vh;
  }

  .livelv{
    background: #9BD7F1;
    color: white;
    border-radius: .02rem;
    font-size:.10rem;
    padding:0 .05rem;
    display: inline-block;
  }

  .lv{
    border-radius: .02rem;
    color: white;
    font-size:.10rem;
    padding:0 .05rem;
    display: inline-block;
  }

  .lv6{
    background: red;
    color: white;
  }

   .lv5{
    background: #FF6C00;
    color: white;
  }

  .lv4{
    background: #FFB37C;
    color: white;
  }

  .lv3{
    background: #92D1E5;
    color: white;
  }

  .lv2{
    background: #95DDB2;
    color: white;
  }

  .lv1{
    background: #BFBFBF;
    color: white;
  }

  *{
   font-family:"Microsoft YaHei",微软雅黑;
   -webkit-user-select:none;
   -moz-user-select:none;
   -ms-user-select:none;
   user-select:none;
   cursor: default;
   padding: 0;
   margin: 0;
   font-size: 0.13rem;
  }

  img{
    -webkit-user-drag: none;
  }
</style>
