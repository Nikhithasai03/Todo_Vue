<template>
  <div id="app">
    <div class="container">
    <AddTodo/>
    <FilterTodos/>
    <ToDos2/>
  </div>
  </div>
</template>

<script>
import ToDos2 from './components/ToDos2.vue'
import AddTodo from './components/AddTodo.vue'
import FilterTodos from './components/FilterTodos.vue'
export default {
  name: 'App',
  components: {
    ToDos2,
    AddTodo,
    FilterTodos
  }
}
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
