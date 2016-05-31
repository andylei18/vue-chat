<style>
    .loading-bar .progress {
        position: absolute;
        height: 100%;
        background: #007fff;
        -webkit-animation: loading 1.2s linear infinite alternate;
        animation: loading 1.2s linear infinite alternate;
    }
    .fade, .submitting {
        -webkit-transition: opacity,.3s;
        transition: opacity,.3s;
    }
    .loading-bar {
        position: fixed;
        z-index: 101;
        left: 0;
        top: 0;
        right: 0;
        height: 2px;
    }
    @-webkit-keyframes loading {
        0% {
            left: 0;
            width: 0
        }
        45% {
            left: 45%;
            width: 10%
        }
        to {
            left: 100%;
            width: 0
        }
    }
    @keyframes loading {
        0% {
            left: 0;
            width: 0
        }
        45% {
            left: 45%;
            width: 10%
        }
        to {
            left: 100%;
            width: 0
        }
    }
</style>
<template>

    <div class="loading-bar fade fade-transition" v-show="progress.show"><div class="progress"></div></div>

</template>
<script>
    module.exports = {
        replace:true,
        props:['progress']
    }
</script>
