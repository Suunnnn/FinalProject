<template>
  <div id="table">
    <table style="width: 100%">
      <slot></slot>
    </table>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
#table {
  /* width: 90%; */
  position: relative;
  overflow-x: auto;
  background-color: #FFFFFF;
  color: #000000;
}

table {
  border-spacing: 0px;
}

tr {
    border: 1px solid gray;
}

td {
  text-align: left;
  border-bottom: 1px solid gray;
  height: 60px;
  padding-left: 20px;
}

.icon {
  display: flex;
  align-items: center;
  cursor: pointer;
}

</style>
