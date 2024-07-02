<template>
  <div class="add-story">
    <h1>Add New Story</h1>
    <form @submit.prevent="addStory">
      <div>
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="story.title" required>
      </div>
      <div>
        <label for="author">Author:</label>
        <input type="text" id="author" v-model="story.author" required>
      </div>
      <div>
        <label for="synopsis">Synopsis:</label>
        <textarea id="synopsis" v-model="story.synopsis" required></textarea>
      </div>
      <div>
        <label for="category">Category:</label>
        <input type="text" id="category" v-model="story.category" required>
      </div>
      <div>
        <label for="storyCover">Story Cover (URL):</label>
        <input type="text" id="storyCover" v-model="story.storyCover" required>
      </div>
      <div>
        <label for="tags">Tags (comma separated):</label>
        <input type="text" id="tags" v-model="tagInput">
        <button type="button" @click="addTag">Add Tag</button>
        <div v-if="story.tags.length > 0">
          <span v-for="(tag, index) in story.tags" :key="index" class="tag">{{ tag }}</span>
        </div>
      </div>
      <div>
        <label for="status">Status:</label>
        <select id="status" v-model="story.status" required>
          <option value="Draft">Draft</option>
          <option value="Publish">Publish</option>
        </select>
      </div>
      <div>
        <button type="submit">Add Story</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
  name: "AddStory",
  setup() {
    const story = ref({
      title: '',
      author: '',
      synopsis: '',
      category: '',
      storyCover: '',
      tags: [],
      status: 'Draft'
    });

    const tagInput = ref('');

    const addStory = async () => {
      try {
        // Ensure tags are converted to an array before sending
        const dataToSend = {
          ...story.value,
          tags: story.value.tags.map(tag => tag.trim())
        };

        await axios.post('https://us-central1-fullstack-api-38a4f.cloudfunctions.net/api/api/stories', dataToSend);
        router.push('/'); // Assuming 'router' is imported from Vue Router
      } catch (error) {
        console.error('Error adding story:', error);
      }
    };

    const addTag = () => {
      if (tagInput.value) {
        story.value.tags.push(tagInput.value.trim());
        tagInput.value = '';
      }
    };

    return {
      story,
      tagInput,
      addStory,
      addTag
    };
  }
};
</script>

<style scoped>
/* Your scoped styles */
</style>
