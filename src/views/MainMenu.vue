<template>
  <div class="mainmanuPage">
    <div class="container">
      <div class="header">MAIN MENU</div>
      <div class="sline"></div>
      <div class="menu">
        <div class="singleMenu">
          <div class="circle" @click="JigPage">
            <img src="../assets/IconMainMenu/jig.svg" alt="" />
          </div>
          <div class="textmenu" @click="JigPage">จิ๊ก</div>
        </div>
        <div class="line"></div>
        <div class="singleMenu">
          <div class="circle" @click="ChubPage">
            <img src="../assets/IconMainMenu/chub.svg" alt="" />
          </div>
          <div class="textmenu" @click="ChubPage">ชุบ</div>
        </div>
        <div class="line"></div>
        <div class="singleMenu">
          <div class="circle" @click="PackPage">
            <img src="../assets/IconMainMenu/packing.svg" alt="" />
          </div>
          <div class="textmenu" @click="PackPage">แพ็คกิ้ง</div>
        </div>
      </div>
      <div class="menu">
        <div class="singleMenu">
          <div class="circle" @click="PlanPage">
            <img src="../assets/IconMainMenu/plan.svg" alt="" />
          </div>
          <div class="textmenu" @click="PlanPage">วางแผนผลิต</div>
        </div>
        <div class="line"></div>
        <div class="singleMenu">
          <div class="circle" @click="Trackingpage">
            <img src="../assets/IconMainMenu/tidtam.svg" alt="" />
          </div>
          <div class="textmenu" @click="Trackingpage">ติดตามสถานะ</div>
        </div>
        <div class="line"></div>
        <div class="singleMenu">
          <div class="circle" @click="QcPage">
            <img src="../assets/IconMainMenu/qc.svg" alt="" />
          </div>
          <div class="textmenu" @click="QcPage">QC</div>
        </div>
        <div class="line"></div>
        <div class="singleMenu">
          <div class="circle" @click="StockPage">
            <img src="../assets/IconMainMenu/stock.svg" alt="" />
          </div>
          <div class="textmenu" @click="StockPage">สต๊อก</div>
        </div>
      </div>
      <div class="menu">
        <div class="singleMenu">
          <div class="circle">
            <img src="../assets/IconMainMenu/database.svg" alt="" />
          </div>
          <div class="textmenu">ฐานข้อมูล</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainMenu",

  methods: {
    QcPage() {
      this.$router.push({ path: "/mainmenu/MainQC" });
    },
    JigPage() {
      this.$router.push({ path: "/mainmenu/MainJig" });
    },
    ChubPage() {
      this.$router.push({ path: "/mainmenu/MainChub" });
    },
    PackPage() {
      this.$router.push({ path: "/mainmenu/MainPack" });
    },
    PlanPage() {
      this.$router.push({ path: "/mainmenu/PlanPage" });
    },
    Trackingpage() {
      this.$router.push({ path: "/mainmenu/TrackIng" });
    },
    StockPage() {
      this.$router.push({ path: "/mainmenu/StockPage"});
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
  height: 25%;
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
  width: 148px;
  height: 2px;
  background-color: #45bfa2;
  margin-bottom: 3%;
}

.textmenu {
  font-size: 20px;
  text-decoration: underline;
  cursor: pointer;
}
</style>
