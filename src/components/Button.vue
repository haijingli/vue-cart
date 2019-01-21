<template>
  <!-- 
      请始终为 <button> 元素规定 type 属性。不同的浏览器对 <button> 元素的 type 属性使用不同的默认值。 
      Internet Explorer 的默认类型是 "button"，而其他浏览器中（包括 W3C 规范）的默认值是 "submit"。
      按钮放在 form 中点击会自动提交
  -->
  <button class="my-el-button" :class="type" :type="nativeType" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ""
    },
    nativeType: {
      type: String,
      default: "button"
    }
  },
  methods: {
    handleClick(event) {
      this.$emit("click", event);
    }
  }
};
</script>

<style scoped>
.my-el-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.my-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
.my-el-button + .my-el-button {
  margin-left: 10px;
}
</style>