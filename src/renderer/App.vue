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
  }

  .livelv{
    background: #9BD7F1;
    color: white;
    border-radius: 2px;
    font-size:10px;
    padding:0 5px;
    display: inline-block;
    margin-bottom: 5px;
  }

  .lv{
    border-radius: 2px;
    color: white;
    font-size:10px;
    padding:0 5px;
    display: inline-block;
    margin-bottom: 5px;
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
