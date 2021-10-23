<template>
  <div class="card-body">
    <div class="card-body__card-label">
      <p>{{name}} - {{level}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyCard",
  props: {
    name: String,
    level: String
  }
}
</script>

<style scoped>
  .card-body{
    padding: 10px 20px;
    background-color: white;
    display: flex;
    justify-content: center;
    color: black;
    border-radius: 10px;
  }
</style>