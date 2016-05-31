<template>

    <!--BEGIN 发送说说窗口组件-->
    <timeline-module></timeline-module>
    <!--END 发送说说窗口组件-->

    <!--BEGIN 说说列表组件-->
    <stream-module></stream-module>
    <!--END 说说列表组件-->


</template>
<script>


  //业务模块组件
  import TimelineModule from './timeline'//发送说说窗口组件
  import StreamModule from './stream'    //说说列表组件

  export default {
    components: {
      TimelineModule,
      StreamModule
    },
    vuex: {
      getters: {
        users: state => state.users
      }
    },

  }

</script>
