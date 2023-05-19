<template>
  <div class="RecordJigPage">
    <div class="container">
      <div class="header">
        <div class="back" @click="mainmenuJig">
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
          <div class="mainrecordtext">
            <div class="standardfront">สุ่มความหนา?</div>
            <div class="standardthick">STD. ไม่เกิน 10-15 ไมโครเมตร</div>
            </div>
          <div class="mainrecordtext">
            <div class="fronttext">ชิ้นที่ 1</div>
            <input type="text" placeholder="ชิ้น" class="placeholder" />
          </div>
          <div class="mainrecordtext">
            <div class="fronttext">ชิ้นที่ 2</div>
            <input type="text" placeholder="ชิ้น" class="placeholder" />
          </div>
          <div class="mainrecordtext">
            <div class="fronttext">ชิ้นที่ 3</div>
            <input type="text" placeholder="ชิ้น" class="placeholder" />
          </div>
          <div class="mainrecordtext">
            <div class="fronttext">ชิ้นที่ 4</div>
            <input type="text" placeholder="ชิ้น" class="placeholder" />
          </div>
          <div class="mainrecordtext">
            <div class="fronttext">ชิ้นที่ 5</div>
            <input type="text" placeholder="ชิ้น" class="placeholder" />
          </div>
          
          <div class="mainrecordtext">
            <div class="thirdtext">ปัญหาที่พบ?</div>
          </div>
          <div class="mainrecordtext">
            <input
              type="radio"
              id="one"
              value="One"
              v-model="picked"
              class="radio"
            />
            <label for="one" class="radiotext">ตัวเลือกที่ 1</label>

            <input
              type="radio"
              id="two"
              value="Two"
              v-model="picked"
              class="radio"
            />
            <label for="two" class="radiotext">ตัวเลือกที่ 2</label>
          </div>
          <div class="mainrecordtext">
            <input
              type="radio"
              id="three"
              value="three"
              v-model="picked"
              class="radio"
            />
            <label for="three" class="radiotext">ตัวเลือกที่ 3</label>

            <input
              type="radio"
              id="four"
              value="four"
              v-model="picked"
              class="radio"
            />
            <label for="four" class="radiotext">ตัวเลือกที่ 4</label>
          </div>
          <div class="mainrecordtext">
            <input
              type="radio"
              id="five"
              value="five"
              v-model="picked"
              class="radio"
            />
            <label for="five" class="radiotext">ตัวเลือกที่ 5</label>

            <input
              type="radio"
              id="six"
              value="six"
              v-model="picked"
              class="radio"
            />
            <label for="six" class="radiotextother">อื่นๆ</label>
            <input type="text" placeholder="" class="placeholder" />
          </div>
          <div class="mainrecordtext">
            <div class="thirdtext">การตัดสินใจ?</div>
          </div>
          <div class="mainrecordtext">
            <input
              type="radio"
              id="onefix"
              value="Onefix"
              v-model="pickeddecide"
              class="radio"
            />
            <label for="onefix" class="radiotextother">ซ่อม</label>

            <input
              type="radio"
              id="twofix"
              value="Twofix"
              v-model="pickeddecide"
              class="radio"
            />
            <label for="twofix" class="radiotextother">ส่งคืน</label>
            <input
              type="radio"
              id="threefix"
              value="threefix"
              v-model="pickeddecide"
              class="radio"
            />
            <label for="threefix" class="radiotextother">อนุมัติใช้</label>
          </div>
          <div class="mainrecordtext">
            <div class="thirdtext">ผู้ปฏิบัติงาน?</div>
          </div>
          <div class="mainrecordtext">
            <input
              type="radio"
              id="oneoperat"
              value="Oneoperat"
              v-model="pickedoperat"
              class="radio"
            />
            <label for="oneoperat" class="radiotext">ธนธัช</label>

            <input
              type="radio"
              id="twooperat"
              value="Twooperat"
              v-model="pickedoperat"
              class="radio"
            />
            <label for="twooperat" class="radiotext">ธนธัช</label>
          </div>
          <div class="mainrecordtext">
            <input
              type="radio"
              id="threeoperat"
              value="threeoperat"
              v-model="pickedoperat"
              class="radio"
            />
            <label for="threeoperat" class="radiotext">ธนธัช</label>

            <input
              type="radio"
              id="fouroperat"
              value="fouroperat"
              v-model="pickedoperat"
              class="radio"
            />
            <label for="fouroperat" class="radiotext">ธนธัช</label>
          </div>
          <div class="mainrecordtext">
            <input
              type="radio"
              id="fiveoperat"
              value="fiveoperat"
              v-model="pickedoperat"
              class="radio"
            />
            <label for="fiveoperat" class="radiotext">ธนธัช</label>

            <input
              type="radio"
              id="sixoperat"
              value="sixoperat"
              v-model="pickedoperat"
              class="radio"
            />
            <label for="sixoperat" class="radiotextother">ธนธัช</label>
          </div>
          <div class="mainrecordtext">
            <div class="thirdtext">ผู้ตรวจสอบ?</div>
          </div>
          <div class="mainrecordtext">
            <input
              type="radio"
              id="oneoperat"
              value="Oneoperat"
              v-model="pickedoperat"
              class="radio"
            />
            <label for="oneoperat" class="radiotext">ธนธัช</label>

            <input
              type="radio"
              id="twooperat"
              value="Twooperat"
              v-model="pickedoperat"
              class="radio"
            />
            <label for="twooperat" class="radiotext">ธนธัช</label>
          </div>
          <div class="mainrecordtext">
            <input
              type="radio"
              id="threeoperat"
              value="threeoperat"
              v-model="pickedoperat"
              class="radio"
            />
            <label for="threeoperat" class="radiotext">ธนธัช</label>

            <input
              type="radio"
              id="fouroperat"
              value="fouroperat"
              v-model="pickedoperat"
              class="radio"
            />
            <label for="fouroperat" class="radiotext">ธนธัช</label>
          </div>
          <div class="mainrecordtext">
            <input
              type="radio"
              id="fiveoperat"
              value="fiveoperat"
              v-model="pickedoperat"
              class="radio"
            />
            <label for="fiveoperat" class="radiotext">ธนธัช</label>

            <input
              type="radio"
              id="sixoperat"
              value="sixoperat"
              v-model="pickedoperat"
              class="radio"
            />
            <label for="sixoperat" class="radiotextother">ธนธัช</label>
          </div>
          <div class="boxbottom">
          <div class="mainrecordtext">
            <div class="fronttext">งานดี</div>
            <input type="text" placeholder="ชิ้น" class="placeholder" />
          </div>
          
          <div class="mainrecordtext">
            <div class="fronttext">งานเสีย</div>
            <input type="text" placeholder="ชิ้น" class="placeholder" />
          </div>
          <div class="singlebutton">
            <button class="save" @click="saverecord">บันทึก</button>
          </div>
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
    };
  },
  methods: {
    mainmenuJig() {
      this.$router.push("/mainmenu/MainPack/PackPage");
    },
    saverecord() {
      alert("บันทึกเเล้ว");
      this.$router.push("/mainmenu/MainPack/PackPage");
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
.thirdtext {
  margin-top: 6px;
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
.standardthick{
  font-size: 20px;
  margin-left: 30px;
}
.standardfront{
  font-size: 20px;
}
.boxbottom{
  margin-top: 10px;
}
</style>
