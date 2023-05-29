<template>
  <div class="planPage">
    <div class="container">
      <div class="popup">
        <div id="modalpopup" v-if="modal">
          <div class="containerpopup">
            <div class="headderpopup">
              <div class="text1">
                <div class="workcode">รหัสชิ้นงาน</div>
                <div class="textworkcode">472/2022</div>
              </div>
              <div class="text2">
                <div class="workcode">เลขที่อ้างอิง</div>
                <div class="textworkcode">D4-191894</div>
              </div>
              <div class="text3">
                <div class="workcode">วันที่รับ</div>
                <div class="textworkcode">31/8/65</div>
              </div>
              <div class="text4">
                <div class="workcode">ลูกค้า</div>
                <div class="textworkcode">CKD</div>
              </div>
              <div class="text5">
                <div class="workcode">วันกำหนดส่ง</div>
                <div class="textworkcode">14 ก.ย 65</div>
              </div>
            </div>
            <div class="twoheadderpopup">
              <div class="row">
                <div class="twotext1">
                  <div class="workcode">คอนดิชั่น</div>
                  <div class="textworkcode">
                    <input
                      type="text"
                      placeholder=""
                      class="placeholder"
                      v-model="details[0].condition"
                      disabled
                    />
                  </div>
                </div>
                <div class="twotext2">
                  <div class="workcode">mat</div>
                  <div class="textworkcode">
                    <input
                      type="text"
                      placeholder=""
                      class="placeholder"
                      v-model="details[0].mat"
                      disabled
                    />
                  </div>
                </div>
                <div class="twotext3">
                  <div class="workcode">ประเภทการชุบ</div>
                  <div class="textworkcode">
                    <input
                      type="text"
                      placeholder=""
                      class="placeholder"
                      v-model="details[0].platingtype"
                      disabled
                    />
                  </div>
                </div>
                <div class="twotext4">
                  <div class="workcode">กระบวนการอื่นๆ</div>
                  <div class="textworkcode">
                    <input
                      type="text"
                      placeholder=""
                      class="placeholder"
                      v-model="details[0].otherprocesses"
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="twotext1">
                  <div class="workcode">ราคา(บาท)</div>
                  <div class="textworkcode">
                    <input
                      type="text"
                      placeholder=""
                      class="placeholder"
                      v-model="details[0].price"
                      disabled
                    />
                  </div>
                </div>
                <div class="twotext2">
                  <div class="workcode">จำนวนตามบิล</div>
                  <div class="textworkcode">
                    <input
                      type="text"
                      placeholder=""
                      class="placeholder"
                      v-model="details[0].amountbill"
                      disabled
                    />
                  </div>
                </div>
                <div class="twotext3">
                  <div class="workcode">ยอดคงเหลือ</div>
                  <div class="textworkcode">
                    <input
                      type="text"
                      placeholder=""
                      class="placeholder"
                      v-model="details[0].balance"
                      disabled
                    />
                  </div>
                </div>
                <div class="twotext4">
                  <div class="workcode">หัก stock</div>
                  <div class="textworkcode">
                    <input
                      type="text"
                      placeholder=""
                      class="placeholder"
                      v-model="details[0].stock"
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="twotext1">
                  <div class="workcode">กะผลิต</div>
                  <div class="textworkcode">
                    <input
                      type="text"
                      placeholder=""
                      class="placeholder"
                      v-model="details[0].time"
                      disabled
                    />
                  </div>
                </div>
                <div class="twotext2">
                  <div class="workcode">จิ๊ก</div>
                  <div class="textworkcode">
                    <input
                      type="text"
                      placeholder=""
                      class="placeholder"
                      v-model="details[0].jig"
                      disabled
                    />
                  </div>
                </div>
                <div class="twotext3">
                  <div class="workcode">ชุบ(รอบ)</div>
                  <div class="textworkcode">
                    <input
                      type="text"
                      placeholder=""
                      class="placeholder"
                      v-model="details[0].Chub"
                      disabled
                    />
                  </div>
                </div>
                <div class="twotext4">
                  <div class="workcode">คนสั่งผลิต</div>
                  <div class="textworkcode">
                    <input
                      type="text"
                      placeholder=""
                      class="placeholder"
                      v-model="details[0].productionorder"
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="singlebutton">
              <button class="save" @click="save">CLOSE</button>
            </div>
          </div>
        </div>

        <div id="modalpopup" v-if="tracking">
          <div class="containertrackingpopup">
            <div class="headdertrackingpopup">
              <div class="texttracking">
                <div class="workcode">ณัฐพร</div>
                <div class="workcode">24/10/2565</div>
                <div class="workcode">10.30</div>
                <div class="circlepopup"></div>
              </div>
              <div class="texttracking">
                <div class="workcode">ณัฐพร</div>
                <div class="workcode">24/10/2565</div>
                <div class="workcode">11.30</div>
                <div class="circlepopup"></div>
              </div>
              <div class="texttracking">
                <div class="workcode">ณัฐพร</div>
                <div class="workcode">24/10/2565</div>
                <div class="workcode">12.30</div>
                <div class="circlepopup"></div>
              </div>
              <div class="texttracking">
                <div class="workcode">คนตรวจ</div>
                <div class="workcode">วันที่</div>
                <div class="workcode">เวลา</div>
                <div class="circlepopupnon"></div>
              </div>
            </div>
            <div class="singlebutton">
              <button class="save" @click="save">CLOSE</button>
            </div>
          </div>
        </div>

        <div class="header">
          <div class="back" @click="mainmenu">
            <font-awesome-icon
              icon="fa-solid fa-arrow-left"
              style="font-size: 40px"
            />
          </div>
          <div class="singleMenu">
            <div class="textmenu">ติดตามสถานะ</div>
            <div class="circle">
              <img src="../assets/IconMainMenu/tidtam.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="headtableContainer">
          <div class="headbutton">
            <div class="headinputdate">
            <!-- <button class="headtabledate" @click="opendateinput">
              <font-awesome-icon
                icon="fa-regular fa-calendar-days"
                style="font-size: 25px"
              />
              <div class="fontbutton">DATE</div>
            </button> -->
            <form action="/action_page.php">
                    <input type="date" id="selectdate" name="selectdate" />
                    <!-- <input type="submit"> -->
                  </form>
                  </div>
          </div>
          <div class="tableContainer">
            <table style="width: 100%" class="bodertable">
              <tr>
                <td>วันกำหนดส่ง</td>
                <td>รหัสชิ้นงาน</td>
                <td>เลขที่อ้างอิง</td>
                <td>ลูกค้า</td>
                <td>ติดตามสถานะ</td>
                <td>ดูรายละเอียด</td>
              </tr>
              <tr v-for="(equipment, index) in tableData" :key="index">
                <td>{{ equipment.deadline }}</td>
                <td>{{ equipment.workpiececode }}</td>
                <td>{{ equipment.reference }}</td>
                <td>{{ equipment.customer }}</td>

                <td>
                  <div class="icontd">
                    <font-awesome-icon
                      @click="openTracking"
                      icon="fa-regular fa-clock"
                      style="font-size: 20px"
                      class="icon"
                    />
                  </div>
                </td>
                <td>
                  <div class="icontd" @click="openModal">
                    <font-awesome-icon
                      icon="fa-regular fa-eye"
                      style="font-size: 20px"
                      class="icon"
                    />
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div class="backdrop" v-if="backdrop" @click="closeModal"></div>
        <div class="inputdate" v-if="input" @click="inputdate">
          <form action="/action_page.php">
            <input type="date" id="selectdate" name="selectdate" />
            <!-- <input type="submit"> -->
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TableComponent from "../components/TableComponent.vue";
import PopUp from "../components/PopUp.vue";

export default {
  component: {
    TableComponent,
    PopUp,
  },

  data() {
    return {
      backdrop: false,
      modal: false,
      editmodal: false,
      input: false,
      addmodal: false,
      tracking: false,

      tableData: [
        {
          id: 1,
          datereceipt: "31/8/65",
          workpiececode: "472/2022",
          reference: "D4-191894 ",
          customer: "CKD",
          deadline: "14/10/65",
        },
        {
          id: 2,
          datereceipt: "25/3/65",
          workpiececode: "11477 GPV",
          reference: "1520038304",
          customer: "GPV",
          deadline: "14/10/65",
        },
        {
          id: 3,
          datereceipt: "12/9/65",
          workpiececode: "2209001",
          reference: "1 IA2AAL-0004-00",
          customer: "KYOWA",
          deadline: "14/9/65",
        },
        {
          id: 4,
          datereceipt: "31/8/65",
          workpiececode: "472/2022",
          reference: "D4-191894",
          customer: "CKD",
          deadline: "14/9/65",
        },
        {
          id: 5,
          datereceipt: "25/3/65",
          workpiececode: "11477 GPV",
          reference: "1520038304",
          customer: "GPV",
          deadline: "14/9/65",
        },
      ],
      editData: [
        {
          id: 1,
          datereceipt: "31/8/65",
          workpiececode: "202.49.251.62",
          reference: "Bang rak",
          customer: "THIX-01",
          deadline: "14/9/65",
        },
        {
          id: 2,
          datereceipt: "Online",
          workpiececode: "202.49.251.62",
          reference: "Bang rak",
          customer: "THIX-01",
          deadline: "14/9/65",
        },
        {
          id: 3,
          datereceipt: "Online",
          workpiececode: "202.49.251.62",
          reference: "Bang rak",
          customer: "THIX-01",
          deadline: "14/9/65",
        },
        {
          id: 4,
          datereceipt: "Online",
          workpiececode: "202.49.251.62",
          reference: "Bang rak",
          customer: "THIX-01",
          deadline: "14/9/65",
        },
        {
          id: 5,
          datereceipt: "Online",
          workpiececode: "202.49.251.62",
          reference: "Bang rak",
          customer: "THIX-01",
          deadline: "14/9/65",
        },
      ],
      details: [
        {
          id: 1,
          condition: "C22",
          mat: "AL5052",
          platingtype: "อโนไดซ์สีขาวเงา",
          otherprocesses: "พ้นทราย#6",
          price: "30",
          amountbill: "18",
          balance: "18",
          stock: "-18",
          time: "เช้า",
          jig: "30",
          Chub: "1",
          productionorder: "ธนธัช",
        },
      ],
      editdetails: [
        {
          id: 1,
          condition: "C22",
          mat: "AL5052",
          platingtype: "อโนไดซ์สีขาวเงา",
          otherprocesses: "พ้นทราย#6",
          price: "30",
          amountbill: "18",
          balance: "18",
          stock: "-18",
          time: "เช้า",
          jig: "30",
          Chub: "1",
          productionorder: "ธนธัช",
        },
      ],
      newdetails: [
        {
          id: 1,
          condition: "",
          mat: "",
          platingtype: "",
          otherprocesses: "",
          price: "",
          amountbill: "",
          balance: "",
          stock: "",
          time: "",
          jig: "",
          Chub: "",
          productionorder: "",
        },
      ],
    };
  },
  methods: {
    mainmenu() {
      this.$router.push("/mainmenu");
    },
    openModal() {
      this.modal = true;
      this.backdrop = true;
    },
    closeModal() {
      this.modal = false;
      this.editmodal = false;
      this.backdrop = false;
      this.addmodal = false;
      this.tracking = false;
    },
    openTracking() {
      this.tracking = true;
      this.backdrop = true;
    },
    save() {
      this.closeModal();
    },
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
  height: 15%;
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
  margin: 40px 40px 0 0;
}
.circlepopup {
  height: 90px;
  width: 90px;
  background-color: #45bfa2;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000000;
  margin-top: 20px;
}
.circlepopupnon {
  height: 90px;
  width: 90px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000000;
  margin-top: 20px;
}
.singleMenu {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.textmenu {
  font-size: 32px;
  margin: 40px 30px 0 0;
}

#table {
  /* width: 90%; */
  position: relative;
  overflow-x: auto;
  background-color: #ffffff;
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
  border-bottom: 2px solid #45bfa2;
  height: 60px;
  padding-left: 20px;
  width: 3000px;
}

.headtableContainer {
  display: flex;
  justify-content: center;
  background: #d9d9d9;
  border-radius: 20px;
  margin-top: 40px;
  margin-left: 100px;
  margin-right: 100px;
  flex-direction: column;
}
.back {
  position: absolute;
  top: 3%;
  left: 2%;
  cursor: pointer;
}
.headtableadd {
  display: flex;
  flex-direction: row;
  background: #ffffff;
  border: #45bfa2 solid 2px;
  border-radius: 20px;
  padding: 6px 20px;
  align-items: center;
  margin-left: 80px;
}
.headtabledate {
  display: flex;
  flex-direction: row;
  background: #ffffff;
  border: #45bfa2 solid 2px;
  border-radius: 20px;
  padding: 6px 20px;
  align-items: center;
  margin-left: 80px;
}
.headbutton {
  display: flex;
  flex-direction: row;
  margin: 13px;
}
.tableContainer {
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 40px;
  background: #ffffff;
  border: #45bfa2 solid 2px;
  border-bottom: none;
}
.fontbutton {
  font-size: 15px;
  margin-left: 10px;
}
.headtableadd:hover {
  background: #45bfa2;
}
.headtabledate:hover {
  background: #45bfa2;
}
.icon {
  cursor: pointer;
}
.backdrop {
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: grey;
  opacity: 80%;
  z-index: 98;
}
.modal {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  /* align-items: center; */
}
#modalpopup {
  position: absolute;
  top: 10%;
  left: 15%;
  margin: auto;
  z-index: 99;
}

.containerpopup {
  width: 70vw;
  height: 80vh;
  background-color: #d9d9d9;
  border-radius: 20px;
  margin: auto;
  border-color: #000000;
  border-style: solid;
  border-width: 2px;
}
.containertrackingpopup {
  width: 45vw;
  height: 50vh;
  background-color: #d9d9d9;
  border-radius: 20px;
  border-color: #000000;
  border-style: solid;
  border-width: 2px;
  margin-left: 180px;
}
.inpopup {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  background: #45bfa2;
}
.headderpopup {
  display: flex;
  /* justify-content: center; */
  background: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-top: 40px;
  margin-left: 80px;
  margin-right: 80px;
  flex-direction: row;
  align-items: center;
  height: 100px;
}
.headdertrackingpopup{
      display: flex;
  /* justify-content: center; */
  background: white;
  margin-top: 40px;
  margin-left: 60px;
  margin-right: 60px;
  flex-direction: row;
  align-items: flex-start;
  height: 240px;
}
.twoheadderpopup {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ededed;
  margin-left: 80px;
  margin-right: 80px;
  flex-direction: column;
  height: 380px;
}
.singlebutton {
  display: flex;
  justify-content: center;
  margin-top: 30px;
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
.savebutton {
  display: flex;
  justify-content: center;
  width: 80px;
  height: 35px;
  border-radius: 10px;
  border-style: solid;
  border-color: #45bfa2;
  font-size: 15px;
  align-items: center;
  margin-left: 40px;
}
.savebutton:hover {
  background-color: #1aa886;
}

.workcode {
  font-size: 15px;
}
.textworkcode {
  font-size: 25px;
}
.text1 {
  margin-left: 80px;
}
.text2 {
  margin-left: 80px;
}
.text3 {
  margin-left: 80px;
}
.text4 {
  margin-left: 80px;
}
.text5 {
  margin-left: 80px;
}
.row {
  display: flex;
  flex-direction: row;
}
.placeholder {
  width: 130px;
  height: 30px;
}
.twotext1 {
  margin-left: 10px;
  margin-bottom: 40px;
}
.twotext2 {
  margin-left: 70px;
}
.twotext3 {
  margin-left: 70px;
}
.twotext4 {
  margin-left: 70px;
}
.newplaceholder {
  width: 80px;
  height: 30px;
}
.icontd {
  display: flex;
  align-items: center;
  justify-items: center;
  margin-left: 33px;
}
.texttracking {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 40px;
  margin-top: 20px;
}
.headinputdate{
  margin-left: 90px;
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
