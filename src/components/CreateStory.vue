<template>
  <div>
    <h1>Create Story</h1>
    <form @submit.prevent="addStory">
      <input v-model="title" placeholder="Title" required />
      <input v-model="content" placeholder="Content" required />
      <button type="submit">Add Story</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  methods: {
    async addStory() {
      const newStory = { title: this.title, content: this.content };
      await axios.post(
        "https://us-central1-fullstack-api-38a4f.cloudfunctions.net/api/api/stories",
        newStory
      );
      this.$router.push("/");
    },
  },
};
</script>

<style>
input {
  margin-right: 10px;
}
</style>
