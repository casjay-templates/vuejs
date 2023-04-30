<template>
  <div v-if="setProfile == '' || isLoading == true">
    <spinner />
  </div>
  <div v-else>
    <div class="text-center align-items-center mt-3">
      <div class="text-center p-3">
        <div class="header">
          <div class="section">
            <div class="row text-center">
              <div class="col-md-3">
                <a href="/"><img style="white-space: pre-line width: 100px; height: 100px" class="img" alt="ICON" v-bind:src="`${setProfile.icon}`" /></a>
              </div>
              <div class="col-md-6">
                <h1 class="fs-1">{{ setProfile.name }}</h1>
                <div class="fs-4">{{ setProfile.tagLine }}</div>
              </div>
              <div class="col-md-3">
                <div class="fs-4 mb-2" v-for="side_right in setProfile.side_right" v-bind:key="side_right.link">
                  <a :href="`${side_right.link}`">{{ side_right.text }}</a>
                </div>
              </div>
              <div class="pr-1">
                <span
                  style="padding-right: .5rem';padding-right: .5rem"
                  class="text-center align-items-center fs-4 nav-text"
                  v-for="nav in setProfile.nav"
                  v-bind:key="nav.link"
                >
                  <a class="btn btn-github icon mr-1" style="padding-left: 1rem; padding-right: 1rem; color: aqua" :href="`${nav.link}`">{{ nav.text }}</a>
                </span>
              </div>
            </div>
            <hr />
          </div>
          <br />
        </div>
        <div class="container text-center align-items-center" style="width: 90%">
          <span class="fs-4">
            <span style="white-space: pre-line" v-for="content in setProfile.contents" v-bind:key="content">
              {{ content }}
            </span>
          </span>
          <br />
          <br />
          <div>
            <hr class="text-center" style="" />
            <h2>Admin Info</h2>
            <span style="padding-right: 1rem" class="fs-4" v-for="info in setProfile.info" v-bind:key="info.text">
              <a :href="`${info.link}`">{{ info.text }}</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mb-5" />
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import axios from 'axios';
import Spinner from '@/loaders/spinner.vue';

const api = process.env.API_URL || '/api/profile.json';

@Options({
  props: {
    msg: String,
    msgSpinner: { type: String },
  },
  components: { Spinner },
  computed: {},
  methods: {
    isLoading() {
      this.isLoading = true;
    },
  },
  data() {
    return {
      setProfile: [],
    };
  },
  mounted() {
    axios
      .get(api, { timeout: 5000 })
      .then((response) => {
        this.status = response.status;
        this.setProfile = response.data;
        if (this.status === 200) {
          if (!this.setProfile) {
            this.isLoading = true;
          }
        } else {
          throw new Error('An error has occured');
        }
      })
      .catch((Error) => Error);
    this.isLoading = false;
  },
})
export default class Welcome extends Vue {}
</script>
