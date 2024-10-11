<script setup>
import Input from '../UI/Input.vue';
import Button from '../UI/Button.vue';
</script>

<template>
  <div class="auth auth--reset">
    <div class="auth__img">
      <img class="auth__img-elem" src="/assets/img/auth/4.jpg" alt="" />
    </div>
    <div class="auth__right">
      <div class="auth__inner">
        <div class="auth__title">Create New Password</div>
        <div class="auth__desc">
          Your new password must be different from previous used passwords.
        </div>
        <form class="auth__form" @submit.prevent="">
          <Input type="password" text="Password" errorMess v-model:input-value="email" />
          <Input type="password" text="Confirm Password" errorMess v-model:input-value="email" />
          <Button :purple="true">Reset Password</Button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
