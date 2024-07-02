<template>
  <div>
    <h1>Edit Story</h1>
    <form @submit.prevent="updateStory">
      <input v-model="story.title" placeholder="Title" required />
      <input v-model="story.content" placeholder="Content" required />
      <button type="submit">Update Story</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      story: {
        title: '',
        content: ''
      }
    };
  },
  methods: {
    async fetchStory() {
      const response = await axios.get(`https://us-central1-fullstack-api-38a4f.cloudfunctions.net/api/api/stories/${this.$route.params.id}`);
      this.story = response.data;
    },
    async updateStory() {
      await axios.put(`https://us-central1-fullstack-api-38a4f.cloudfunctions.net/api/api/stories/${this.$route.params.id}`, this.story);
      this.$router.push('/');
    }
  },
  mounted() {
    this.fetchStory();
  }
};
</script>

<style>
input {
  margin-right: 10px;
}
</style>
