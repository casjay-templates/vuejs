<template>
  <div v-if="setProfile == '' || isLoading == true">
    <spinner />
  </div>
  <div v-else>
    <div class="row text-center">
      <div class="col-md-6 offset-md-3">
        <div class="text-center">
          <h1>{{ setProfile.name }}</h1>
          <p class="fs-4">{{ setProfile.tagLine }}</p>
          <br />
        </div>
        <span class="fs-2">
          <span v-for="content in setProfile.contents" v-bind:key="content">
            {{ content }}
          </span>
          <br />
          <br />
        </span>
        <h1>Bio</h1>
        <div class="fs-3" v-for="bio in setProfile.bio" v-bind:key="bio">
          {{ bio }}
        </div>
        <br />
        <br />
        <h2>Email</h2>
        <span class="fs-4" v-for="email in setProfile.email" v-bind:key="email">
          <a :href="`mailto:${email}`">{{ email }}</a>
          <br />
        </span>
        <br />
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
