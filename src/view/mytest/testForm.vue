<template>
  <div>
    <a-form-model ref="ruleForm" :model="form" :rules="rules">
      <a-form-model-item prop="pas">
        <a-input v-model="form.pas"></a-input>
      </a-form-model-item>
      <a-form-model-item prop="againPas">
        <a-input v-model="form.againPas"></a-input>
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="onSubmit"> Create </a-button>
        <a-button style="margin-left: 10px" @click="resetForm">
          Reset
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
export default {
  name: "testForm",
  data() {
    return {
      form: {
        pas: "",
        againPas: ""
      },
      rules: {
        pas: [
          {
            required: true,
            message: "请填写密码"
          }
        ],
        againPas: [{ validator: this.pasVerify }]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate((err) => {
        console.log(err);
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
    pasVerify(rule, value, callback) {
      console.log(value, this.form.pas);
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value !== this.form.pas) {
        callback(new Error("两次输入不一样"));
      } else {
        callback();
      }
    }
  }
};
</script>

<style></style>
