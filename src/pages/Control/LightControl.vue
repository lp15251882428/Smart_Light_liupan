<template>
  <div>
    <leftnav v-bind:act-value="'/light/lightcontrol'"></leftnav>
    <div class="content">
      <h3>路灯</h3>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped>
.content {
  min-width: 1000px;
  z-index: 0;
  margin-left: 100px;
  background-color: #000;
}
</style>
