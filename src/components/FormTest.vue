<template>
  <div>
    <h3>登录表单</h3>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
       <el-form-item label="密码"  prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">登录</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    name:'FormTest',
    methods: {
        submitForm() {
            
        }
    },
    data() {
        return {
            form: [
                {
                    name:'',
                    password:''
                }
            ]
        }
    },

};
</script>

<style scoped>
</style>