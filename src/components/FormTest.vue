<template>
  <div>
    <h3>登录表单</h3>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">登录</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>

    <my-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px">
      <my-form-item label="用户名" prop="name">
        <my-input v-model="ruleForm.name"></my-input>
      </my-form-item>
      <my-form-item label="密码" prop="password">
        <my-input v-model="ruleForm.password" type="password"></my-input>
      </my-form-item>
      <my-form-item>
         <my-button type="primary" @click="submitMyForm">登录</my-button>
        <my-button>取消</my-button>
      </my-form-item>
    </my-form>
  </div>
</template>

<script>
import MyForm from "./Form.vue";
import MyFormItem from "./FormItem.vue";
import MyInput from "./Input.vue";
import MyButton from "./Button.vue";
export default {
  name: "FormTest",
  components: {
    MyInput,
    MyFormItem,
    MyForm,
    MyButton
  },
  data() {
    return {
      ruleForm: {
        name: "",
        password: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 3, max: 6, message: "长度在3到6个字符", trigger: "blur" }
        ],
        password: { required: true, message: "请输入密码", trigger: "blur" }
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          //console.log("error submit!!");
          return false;
        }
      });
    },
    submitMyForm() {
      //调用form组件中的validate方法，参数为回调函数
      this.$refs["ruleForm"].validate(valid => {
        /* eslint-disable */ 
        console.log(valid);
        if (valid) {
          alert("submit!");
        } else {
          //console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
</style>