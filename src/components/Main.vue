<template>
  <div class="hello">
    <b-input-group class="my-5">
      <b-form-input v-model="todoName" id="v-step-0"></b-form-input>
      <b-input-group-append>
        <b-button variant="primary" v-on:click.prevent="addTodo" id="v-step-1"
          >Add todo
        </b-button>
      </b-input-group-append>
    </b-input-group>

    <b-list-group class="mt-5" id="v-step-2">
      <b-list-group-item
        v-for="item of this.$store.state.todos"
        :key="item.id"
        class="d-flex justify-content-center"
      >
        <a href="" @click.prevent="openTodo(item.id)">{{ item.name }}</a>
      </b-list-group-item>
    </b-list-group>
    <v-tour name="mainPageTour" :steps="steps" />
  </div>
</template>

<script>
import { TourMixin } from "../mixins/TourMixin";

export default {
  mixins: [TourMixin("mainPage")],
  data: function() {
    return {
      todoName: ""
    };
  },
  methods: {
    addTodo: function() {
      this.$store.commit("addTodo", { name: this.todoName });
    },
    openTodo: function(id) {
      this.$router.push({ name: "todo", params: { id } });
    }
  }
};
</script>

<style scoped></style>
