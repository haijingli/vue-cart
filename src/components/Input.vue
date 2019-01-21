<template>
  <div class="el-input">
    <!-- <input :type="type" :value="inputValue" @input="handleInput" class="el-input__inner"> -->
     <input :type="type" :value="inputValue" @input="handleInput" @blur="handleBlur" class="el-input__inner">
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      inputValue: this.value
    };
  },
  methods: {
    handleInput(e) {
      //dom输入时给inputValue绑定值
      this.inputValue = e.target.value;
      //通知父组件更新值
      this.$emit("input", this.inputValue);
      // 通知FormItem做校验
      // this.$parent.$emit("validate", this.inputValue);
    },
    handleBlur(){       
      // 通知FormItem做校验
      this.$parent.$emit("validate", this.inputValue);
    }
  }
};
</script>

<style scoped>
</style>