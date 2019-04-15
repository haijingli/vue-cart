<template>
    <div>
         <h2>Page2</h2>
         <ul>
            <li>{{$route.params.id}}</li>
            <li>{{$route.params.msg}}</li>
            <li>{{$route.query.foo}}</li>
        </ul>

         <ul>
            <li>id:{{id}}</li>
            <li>msg:{{msg}}</li>
            <li>foo:{{foo}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:['id','msg','foo'],
        created(){
            /* eslint-disable */
            console.log(this.$route.params.id);
            
        }
    }
</script>

<style lang="scss" scoped>

</style>