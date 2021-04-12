<template>
  <div class="login-form d-flex align-center justify-center">
    <LoginFormComponent 
      color="teal"
      login-button-alignment="center"
      login-button-block
      login-button-outlined
      clearable
      :style="this.style"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginFormComponent from '@bit/likablehair.default.vuetify.login-form'

export default {
  name: 'Login',
  components: {
    LoginFormComponent,
  },
  data: () => ({
    style :{ width:'300px'}
  }),
}
</script>

<style scoped>
.login-form {
  height: 100vh;
  width: 100vw;
}
</style>
