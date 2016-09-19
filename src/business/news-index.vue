<template>
    <h1 class="main-body">
        this is template body -- {{msg}}
    </h1>
</template>
<style>
    .main-body {
        background-color: #e4393c;
    }
</style>
<script>
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        }
    }
</script>
