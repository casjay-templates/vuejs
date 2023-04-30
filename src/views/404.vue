<template>
  <div class="container">
    <div class="jumbotron">
      <div class="align-items-center text-center">
        <br />
        <div style="font-size: 48px">
          <span class="fa fa-ban red" />
          <a href="https://duckduckgo.com/?q=http+status+code+404" target="_blank" rel="noopener noreferrer">404 Not Found </a>
          <br /><br />
        </div>
        <div style="font-size: 24px" class="lead body-content">
          We apologize but we can't seem to be able<br />
          to find what you're looking for!!<br />
          <img alt="error" height="400" width="400" src="/images/oops.gif" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class NotFound extends Vue {}
</script>

<style></style>
