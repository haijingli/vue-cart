<template>
    <div>
        <h2>Page1</h2>
        <ul>
            <li>{{$route.params.id}}</li>
            <li>{{$route.params.msg}}</li>
        </ul>

        <ul>
            <li>id:{{id}}</li>
            <li>msg:{{msg}}</li>
        </ul>
        
    </div>
</template>

<script>
    export default {
        props:['id','msg'],
    }
</script>

<style lang="scss" scoped>

</style>