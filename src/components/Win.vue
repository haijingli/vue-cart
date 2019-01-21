<template>
<div class="win">
    <div class="header">
        <slot name="header"></slot>
    </div>
    <div class="content">
        <slot></slot>
    </div>
    <div class="footer">
        <slot name="footer"></slot>
    </div>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>