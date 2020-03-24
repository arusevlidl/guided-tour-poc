<template>
  <div>
    <div class="my-5">
      <a href="#" @click.prevent="goBack()" id="v-step-4">Back</a>
    </div>
    <h1 v-if="todo">
      <span id="v-step-3"> {{ todo.name }}</span>
    </h1>
    <v-tour name="todoPageTour" :steps="steps" />
  </div>
</template>

<script>
import { TourMixin } from "../mixins/TourMixin";

export default {
  mixins: [TourMixin("todoPage")],
  data: function() {
    return {
      todo: null
    };
  },
  created: function() {
    this.todo = this.$store.state.todos.find(
      todo => todo.id === parseInt(this.$route.params.id)
    );
  },
  methods: {
    goBack: function() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>
