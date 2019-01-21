<template>
  <div class="el-form-item is-required">
    <label v-if="label" class="el-form-item__label" style="width: 80px;">{{label}}</label>
    <div class="el-form-item__content" style="margin-left: 80px;">
      <slot></slot>
      <div v-if="validateStatus=='error'" class="el-form-item__error">{{errorMessage}}</div>
    </div>
  </div>
</template>

<script>
import schema from "async-validator";

export default {
  inject: ["form"],
  props: {
    label: {
      type: String
    },
    prop: {
      type: String
    }
  },
  data() {
    return {
      validateStatus: "",
      errorMessage: ""
    };
  },
  created() {
    this.$on("validate", this.validate);
  },
  mounted() {
    //组件挂载后，判断当前项是否需要校验，需要校验则派发信息，通知Form组件
    if (this.prop) {
      //此处的$parent不够灵活，如果使用组件时在FormItem外面套了一层div的话，this.$parent就不是Form了，需要处理
      this.$parent.$emit("addFormItem", this);
    }
  },
  methods: {
    validate() {
      return new Promise(resolve => {
        //获取校验规则
        const descriptor = {
          [this.prop]: this.form.rules[this.prop]
        };
        const validator = new schema(descriptor);
        validator.validate({
            [this.prop]: this.form.model[this.prop]
          },
          errors => {
            if (errors) {
              this.validateStatus = "error";
              this.errorMessage = errors[0].message;
              resolve(false);
            } else {
              this.validateStatus = "";
              this.errorMessage = "";
              resolve(true);
            }
          }
        );
      });
    }
  }
};
</script>

<style scoped>
</style>