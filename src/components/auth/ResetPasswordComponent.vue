<script setup>
import Input from '../UI/Input.vue';
import Button from '../UI/Button.vue';
</script>

<template>
  <div class="auth auth--reset">
    <div class="auth__img">
      <img class="auth__img-elem" src="/assets/img/auth/3.jpg" alt="" />
    </div>
    <div class="auth__right">
      <div class="auth__inner">
        <div class="auth__title">Reset Your Password</div>
        <div class="auth__desc">
          Enter your email and we'll send you a link to reset your password.
        </div>
        <div class="auth__desc">Please check it.</div>
        <form class="auth__form" @submit.prevent="">
          <Input type="text" text="Email Address" errorMess v-model:input-value="email" />
          <Button :purple="true">Send</Button>
          <div class="auth__not-account">
            Back to
            <router-link class="auth__not-accoun-link" to="/signin">Login</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
