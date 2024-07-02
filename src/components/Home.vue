<template>
  <div class="home">
    <h1>List Buku</h1>
    <router-link to="/create" class="create-link"
      >Tambah Data Cerita</router-link
    >
    <table class="stories-table">
      <thead>
        <tr>
          <th>Judul</th>
          <th>Penulis</th>
          <th>Kategori</th>
          <th>Tags</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="story in stories" :key="story.id">
          <td>{{ story.title }}</td>
          <td>{{ story.author }}</td>
          <td>{{ story.category }}</td>
          <td>
            <span v-for="tag in story.tags" :key="tag" class="tag">{{
              tag
            }}</span>
          </td>
          <td>{{ story.status }}</td>
          <td>
            <router-link :to="`/edit/${story.id}`" class="action-link"
              >✏️</router-link
            >
            <button @click="deleteStory(story.id)" class="action-button">
              🗑️
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      stories: [],
    };
  },
  methods: {
    async fetchStories() {
      try {
        const response = await axios.get(
          "https://us-central1-fullstack-api-38a4f.cloudfunctions.net/api/api/stories"
        );
        this.stories = response.data;
      } catch (error) {
        console.error("Error fetching stories:", error);
      }
    },
    async deleteStory(id) {
      try {
        await axios.delete(
          `https://us-central1-fullstack-api-38a4f.cloudfunctions.net/api/api/stories/${id}`
        );
        this.stories = this.stories.filter((story) => story.id !== id); // Assuming your API uses 'id'
      } catch (error) {
        console.error("Error deleting story:", error);
      }
    },
  },
  mounted() {
    this.fetchStories();
  },
};
</script>