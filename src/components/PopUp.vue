<template>
  <div id="modal">
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopUp",
};
</script>

<style scoped>
#modal {
  position: absolute;
  top: 10%;
  left: 15%;
  margin: auto; 
  z-index: 99;
}

.container {
  width: 70vw;
  height: 80vh;
  background-color: white;
  border-radius: 20px;
  margin: auto; 
}
</style>