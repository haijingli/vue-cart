<template>
    <div id="app">
        <router-link to="/">Home</router-link> |
        <router-link to="/dashboard/page1/1/Lily">page1</router-link> |
        <router-link to="/dashboard/page2/2/Tom?foo=bar">page2</router-link>
        <router-view/>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>