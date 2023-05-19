<template>
  <div class="RecordJigPage">
    <div class="container">
      <div class="header">
        <div class="back" @click="mainmenu">
          <font-awesome-icon
            icon="fa-solid fa-arrow-left"
            style="font-size: 40px"
          />
        </div>
        <div class="text1">
          <div class="workcode">รหัสชิ้นงาน</div>
          <div class="textworkcode">472/2022</div>
        </div>
        <div class="text2">
          <div class="workcode">วันกำหนดผลิต</div>
          <div class="textworkcode">D4-191894</div>
        </div>
        <div class="text3">
          <div class="workcode">ลูกค้า</div>
          <div class="textworkcode">CKD</div>
        </div>
      </div>
      <div class="line"></div>
      <div class="recordContainer">
        <div class="mainrecord">
          <div class="recordtext">บันทึกการทำงาน</div>
          <select v-model="selected" class="choose">
            <option disabled value="" class="inchoose">โปรดเลือก</option>
            <option class="inchoose">สถานีที่ 1</option>
            <option class="inchoose">สถานีที่ 2</option>
            <option class="inchoose">สถานีที่ 3</option>
            <option class="inchoose">สถานีที่ 4</option>
            <option class="inchoose">สถานีที่ 5</option>
            <option class="inchoose">สถานีที่ 6</option>
            <option class="inchoose">สถานีที่ 7</option>
          </select>
          <div class="mainrecordtext">
            <div class="fronttext">ล้างไขมัน</div>
            <input type="text" placeholder="นาที" class="placeholder" />
            <div class="standard">STD. 3 นาที</div>
          </div>
          <div class="mainrecordtext">
            <div class="fronttext">ล้างไขมัน</div>
            <input type="text" placeholder="องศา" class="placeholder" />
             <div class="standard">STD. 50-60องศา </div>
          </div>
          <div class="mainrecordtext">
            <div class="fronttext">โซดาไฟ</div>
            <input type="text" placeholder="วินาที" class="placeholder" />
              
          </div>
          <div class="mainrecordtext">
            <div class="fronttext">โซดาไฟ</div>
            <input type="text" placeholder="องศา" class="placeholder" />
          </div>
          <div class="mainrecordtext">
            <div class="thirdtext">ชุบเงา</div>
            <div class="left">
              <input
                type="radio"
                id="onefix"
                value="Onefix"
                v-model="pickeddecide"
                class="radio"
              />
              <label for="onefix" class="radiotextother">1</label>

              <input
                type="radio"
                id="twofix"
                value="Twofix"
                v-model="pickeddecide"
                class="radio"
              />
              <label for="twofix" class="radiotextother">2</label>
              <input
                type="radio"
                id="threefix"
                value="threefix"
                v-model="pickeddecide"
                class="radio"
              />
              <label for="threefix" class="radiotextother">3</label>
              <input
                type="radio"
                id="fourfix"
                value="fourfix"
                v-model="pickeddecide"
                class="radio"
              />
            </div>
            <label for="threefix" class="radiotextother">4</label>
          </div>
          <div class="mainrecordtext">
            <div class="fronttext">ชุบเงา</div>
            <input type="text" placeholder="วินาที" class="placeholder" />
            
          </div>
          <div class="mainrecordtext">
            <div class="fronttext">โซดาไฟ</div>
            <input type="text" placeholder="องศา" class="placeholder" />
         
          </div>
          <div class="mainrecordtext">
            <div class="fronttext">โซดาไฟ</div>
            <input type="text" placeholder="นาที" class="placeholder" />
          </div>
          <div class="singlebutton">
            <button class="save" @click="saverecord">บันทึก</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainMenu",
  data() {
    return {
      picked: "",
      pickeddecide: "",
      pickedoperat: "",
      pickedone: "",
      pickedtwo: "",
      pickedthree: "",
      pickedfour: "",
      pickedfive: "",
      selected: "",
    };
  },
  methods: {
    mainmenu() {
      this.$router.push("/mainmenu/MainChub");
    },
    saverecord() {
         alert("บันทึกเเล้ว");
         this.mainmenu("/mainmenu/MainChub")
    }
  },


};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 100vw;
  height: 100vh;
}
.header {
  display: flex;
  /* justify-content: center;
  align-items: flex-end;
  font-size: 40px; */
  height: 100px;
}
.text1 {
  margin-top: 40px;
  margin-left: 120px;
}
.workcode {
  font-size: 15px;
}
.textworkcode {
  font-size: 30px;
}
.text2 {
  margin-top: 40px;
  margin-left: 60px;
}
.text3 {
  margin-top: 40px;
  margin-left: 60px;
}
.line {
  width: 100%;
  height: 2px;
  background-color: black;
  margin-top: 20px;
}
.recordContainer {
  display: flex;
  justify-content: center;
  flex-direction: row;
  background: #d9d9d9;
  border-radius: 20px;
  margin-top: 40px;
  margin-left: 200px;
  margin-right: 200px;
}
.mainrecord {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 40px 40px 40px 40px;
}
.recordtext {
  font-size: 25px;
}
.mainrecordtext {
  margin-left: 60px;
  margin-top: 20px;
  display: flex;
  font-size: 15px;
}
.placeholder {
  width: 100px;
  height: 20px;
  margin-left: 15px;
}
.fronttext {
  width: 100px;
}
.secondtext {
  width: 130px;
}

.radio {
  width: 50px;
}
.radiotext {
  display: flex;
  width: 100px;
}
.save {
  display: flex;
  justify-content: center;
  width: 80px;
  height: 35px;
  border-radius: 10px;
  border-style: solid;
  border-color: #45bfa2;
  font-size: 15px;
  align-items: center;
}

.save:hover {
  background-color: #1aa886;
}

.singlebutton {
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
}
.back {
  position: absolute;
  top: 3%;
  left: 2%;
  cursor: pointer;
}
.onetext {
  display: flex;
  width: 50px;
  margin-left: 25px;
}
.choose {
  display: flex;
  margin-top: 20px;
  margin-left: 30px;
  width: 100px;
  height: 40px;
  border-radius: 10px;
}
.inchoose {
  font-size: 15px;
}
.standard{
    margin-left: 20px;
}

</style>
