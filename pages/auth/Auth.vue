<script setup>
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
</script>

<template>
  <div>
    <Authenticator>
      Logged In This is what we see if we are wrapped in the Authenticator
      component
      <br />
      <p>This is a paragraph that we will see only after we re logged in</p>
    </Authenticator>
  </div>
</template>
