<template>
  <div class="hello">
    <b-input-group class="my-5">
      <b-form-input v-model="todoName"></b-form-input>
      <b-input-group-append>
        <b-button variant="primary" v-on:click.prevent="addTodo"
          >Add todo</b-button
        >
      </b-input-group-append>
    </b-input-group>

    <b-list-group class="mt-5">
      <b-list-group-item v-for="item of this.$store.state.todos" :key="item.id">
        <a href="" @click.prevent="openTodo(item.id)">{{ item.name }}</a>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
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
