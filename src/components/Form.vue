<template>
  <form class="el-form">
    <slot></slot>
  </form>
</template>

<script>
export default {
  provide() {
    return {
      form: this
    };
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  },
  created() {
    //注意此处是this.fields,不是var fields
    this.fields = [];
    //组件创建后监听添加FormItem事件，将需验证的FormItem添加都fields数组中
    this.$on("addFormItem", item => this.fields.push(item));
  },
  methods: {
      async validate(callback) {
          // 将FormItem数组转换为validate()返回的promise数组
          const tasks = this.fields.map(item => item.validate());
          const results = await Promise.all(tasks);

          let ret  = true;
          results.forEach(valid => {
              if(!valid){
                  ret = false;
              }
          });
          //执行回调函数
          callback(ret);
      }
  },
};
</script>

<style scoped>
</style>