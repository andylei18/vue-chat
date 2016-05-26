<template>

  <div class="ui-view">

    <!--BEGIN 对话列表组件-->
    <threadlist-module></threadlist-module>
    <!--END  对话列表组件-->

  </div>

</template>

<script>


  //业务模块组件
  import ThreadlistModule from './threadlist'//对话列表组件

  export default {
      components:{
        ThreadlistModule
      },
      vuex :{
        
      }
  }

</script>
