<template>
  <div>
    <div class="my-5"><a href="#" @click.prevent="goBack()">Back</a></div>
    <h1 v-if="todo">{{ todo.name }}</h1>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      todo: null
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.todo = vm.$store.state.todos.find(
        todo => todo.id === parseInt(to.params.id)
      );
    });
  },

  methods: {
    goBack: function() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>
