<template>
  <div class="QCmainmanuPage">
    <div class="container">
      <div class="back" @click="mainmenu">
        <font-awesome-icon icon="fa-solid fa-arrow-left" style="font-size: 40px"/>
      </div>
      <div class="header">QC</div>
      <div class="sline"></div>
      <div class="menu">
        <div class="singleMenu">
          <div class="circle" @click="iqcpage">
            <img src="../assets/IconMainQC/IQC.svg" alt="" />
          </div>
          <div class="textmenu" @click="iqcpage">IQC</div>
          <div class="IQCline"></div>
        </div>
        <div class="line"></div>
        <div class="singleMenu">
          <div class="circle" @click="qcrundom">
            <img src="../assets/IconMainQC/Qcall.svg" alt="" />
          </div>
          <div class="textmenu" @click="qcrundom">QC รวม(สุ่ม)</div>
          <div class="QCJigline"></div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainMenu",
  methods: {
    mainmenu() {
      this.$router.push("/mainmenu/MainQC");
    },
    qcrundom() {
      this.$router.push("/mainmenu/QcPage/QCAllRanPage");
    },
    iqcpage() {
      this.$router.push("/mainmenu/QcPage/IQCPage")
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
.header {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 40px;
  height: 15%;
}

.menu {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 30%;
}

.singleMenu {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.circle {
  height: 100px;
  width: 100px;
  background-color: #45bfa2;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 20px;
}

.line {
  width: 2px;
  height: 50%;
  background-color: black;
}

.sline {
  width: 46px;
  height: 2px;
  background-color: #45bfa2;
  margin-bottom: 3%;
}

.textmenu {
  font-size: 20px;
  cursor: pointer;
}

.back {
  position: absolute;
  top: 3%;
  left: 2%;
  cursor: pointer;
}

.IQCline{
  width: 34px;
  height: 2px;
  background-color: #45bfa2;
  margin-bottom: 3%;
}

.QCJigline{
  width: 74px;
  height: 2px;
  background-color: #45bfa2;
  margin-bottom: 3%;
}

.QCPackline{
  width: 107px;
  height: 2px;
  background-color: #45bfa2;
  margin-bottom: 3%;
}

</style>
