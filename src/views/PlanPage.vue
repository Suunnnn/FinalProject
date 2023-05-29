<template>
  <div class="planPage">
    <div class="container">
      <div class="popup">
        <div id="modalpopup" v-if="modal">
          <div class="containerpopup">
            <div class="headderpopup">
              <div class="text1">
                <div class="workcode">รหัสชิ้นงาน</div>
                <div class="textworkcode">{{ edittable.workCode }}</div>
              </div>
              <div class="text2">
                <div class="workcode">เลขที่อ้างอิง</div>
                <div class="textworkcode">{{ edittable.referenceId }}</div>
              </div>
              <div class="text3">
                <div class="workcode">วันที่รับ</div>
                <div class="textworkcode">
                  {{ edittable.dateReceipt.split("T")[0] }}
                </div>
              </div>
              <div class="text4">
                <div class="workcode">ลูกค้า</div>
                <div class="textworkcode">{{ edittable.customer }}</div>
              </div>
              <div class="text5">
                <div class="workcode">วันกำหนดส่ง</div>
                <div class="textworkcode">
                  {{ edittable.deadline.split("T")[0] }}
                </div>
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
                      v-model="edittable.condition"
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
                      v-model="edittable.mat"
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
                      v-model="edittable.platingType"
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
                      v-model="edittable.otherPro"
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
                      v-model="edittable.price"
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
                      v-model="edittable.amountBill"
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
                      v-model="edittable.balance"
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
                      v-model="edittable.invenUpdate"
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
                      v-model="edittable.workShift"
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
                      v-model="edittable.jig"
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
                      v-model="edittable.chub"
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
                      v-model="edittable.productOrder"
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

        <div id="modalpopup" v-if="editmodal">
          <div class="containerpopup">
            <div class="headderpopup">
              <div class="text1">
                <div class="workcode">รหัสชิ้นงาน</div>
                <div class="textworkcode">
                  <input
                    type="text"
                    placeholder=""
                    class="newplaceholder"
                    v-model="edittable.workCode"
                  />
                </div>
              </div>
              <div class="text2">
                <div class="workcode">เลขที่อ้างอิง</div>
                <div class="textworkcode">
                  <input
                    type="text"
                    placeholder=""
                    class="newplaceholder"
                    v-model="edittable.referenceId"
                  />
                </div>
              </div>
              <div class="text3">
                <div class="workcode">วันที่รับ</div>
                <div class="textworkcode">
                  <input
                    type="text"
                    placeholder=""
                    class="newplaceholder"
                    v-model="edittable.dateReceipt"
                  />
                </div>
              </div>
              <div class="text4">
                <div class="workcode">ลูกค้า</div>
                <div class="textworkcode">
                  <input
                    type="text"
                    placeholder=""
                    class="newplaceholder"
                    v-model="edittable.customer"
                  />
                </div>
              </div>
              <div class="text5">
                <div class="workcode">วันกำหนดส่ง</div>
                <div class="textworkcode">
                  <input
                    type="text"
                    placeholder=""
                    class="newplaceholder"
                    v-model="edittable.deadline"
                  />
                </div>
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
                      v-model="edittable.condition"
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
                      v-model="edittable.mat"
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
                      v-model="edittable.platingType"
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
                      v-model="edittable.otherPro"
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
                      v-model="edittable.price"
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
                      v-model="edittable.amountBill"
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
                      v-model="edittable.balance"
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
                      v-model="edittable.invenUpdate"
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
                      v-model="edittable.workShift"
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
                      v-model="edittable.jig"
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
                      v-model="edittable.chub"
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
                      v-model="edittable.productOrder"
                    />
                  </div>
                </div>
              </div>
              <div class="productpage">
                <div class="productpagetext">วันกำหนดผลิต</div>
                <form action="/action_page.php">
                  <input type="date" id="selectdate" name="selectdate" />
                  <!-- <input type="submit"> -->
                </form>
              </div>
            </div>
            <div class="singlebutton">
              <button class="save" @click="save">CLOSE</button>
              <button class="savebutton" @click="saveRecord">SAVE</button>
            </div>
          </div>
        </div>

        <div id="modalpopup" v-if="addmodal">
          <div class="containerpopup">
            <div class="headderpopup">
              <div class="text1">
                <div class="workcode">รหัสชิ้นงาน</div>
                <div class="textworkcode">
                  <input
                    type="text"
                    placeholder=""
                    class="newplaceholder"
                    v-model="addtable.workCode"
                  />
                </div>
              </div>
              <div class="text2">
                <div class="workcode">เลขที่อ้างอิง</div>
                <div class="textworkcode">
                  <input
                    type="text"
                    placeholder=""
                    class="newplaceholder"
                    v-model="addtable.referenceId"
                  />
                </div>
              </div>
              <div class="text3">
                <div class="workcode">วันที่รับ</div>
                <div class="textworkcode">
                  <input
                    type="text"
                    placeholder="yyyy-mm-dd"
                    class="newplaceholder"
                    v-model="addtable.dateReceipt"
                  />
                </div>
              </div>
              <div class="text4">
                <div class="workcode">ลูกค้า</div>
                <div class="textworkcode">
                  <input
                    type="text"
                    placeholder=""
                    class="newplaceholder"
                    v-model="addtable.customer"
                  />
                </div>
              </div>
              <div class="text5">
                <div class="workcode">วันกำหนดส่ง</div>
                <div class="textworkcode">
                  <input
                    type="text"
                    placeholder="yyyy-mm-dd"
                    class="newplaceholder"
                    v-model="addtable.deadline"
                  />
                </div>
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
                      v-model="addtable.condition"
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
                      v-model="addtable.mat"
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
                      v-model="addtable.platingType"
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
                      v-model="addtable.otherPro"
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
                      placeholder="บาท"
                      class="placeholder"
                      v-model="addtable.price"
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
                      v-model="addtable.amountBill"
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
                      v-model="addtable.balance"
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
                      v-model="addtable.invenUpdate"
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
                      v-model="addtable.workShift"
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
                      v-model="addtable.jig"
                    />
                  </div>
                </div>
                <div class="twotext3">
                  <div class="workcode">ชุบ(รอบ)</div>
                  <div class="textworkcode">
                    <input
                      type="text"
                      placeholder="รอบ"
                      class="placeholder"
                      v-model="addtable.chub"
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
                      v-model="addtable.productOrder"
                    />
                  </div>
                </div>
              </div>
              <div class="productpage">
                <div class="productpagetext">วันกำหนดผลิต</div>
                <form action="/action_page.php">
                  <input
                    type="date"
                    id="selectdate"
                    name="selectdate"
                    v-model="addtable.createdAt"
                  />
                  <!-- <input type="submit"> -->
                </form>
              </div>
            </div>
            <div class="singlebutton">
              <button class="save" @click="save">CLOSE</button>
              <button class="savebutton" @click="checkMessages">SAVE</button>
            </div>
          </div>
        </div>

        <div id="modaldeletepopup" v-if="deletepopup">
          <div class="containerdeletepopup">
            <div class="headderdeletepopup">
              <div class="backdeletepopup" @click="mainmenu">
                <font-awesome-icon
                  icon="fa-solid fa-xmark"
                  style="font-size: 25px"
                />
              </div>

              <div class="circledelete">
                <div class="icondelete">
                  <font-awesome-icon
                    icon="fa-regular fa-trash-can"
                    style="color: #45bfa2"
                  />
                </div>
              </div>
              <div class="textdeletepopup">Delete?</div>
              <div class="textdeletepopuptwo">ยืนยันในการลบข้อมูลทั้งหมด</div>
              <div class="singledeletebutton">
                <button class="save" @click="deleteing">Yes</button>
                <button class="savebutton" @click="nosavedelete">No</button>
              </div>
            </div>
          </div>
        </div>

        <div id="alert" v-if="alert">
          <div class="alertnaja">
            <p>*กรุณากรอกให้ครบทุกช่อง</p>
            <button class="save" @click="hideAlert">Close</button>
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
            <div class="textmenu">วางแผนผลิต</div>
            <div class="circle">
              <img src="../assets/IconMainMenu/plan.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="headtableContainer">
          <div class="headbutton">
            <button class="headtableadd" @click="addclick">
              <font-awesome-icon
                icon="fa-regular fa-square-plus"
                style="font-size: 25px"
              />
              <div class="fontbutton" @click="addclick">ADD</div>
            </button>
            <!-- <div class="headinputdate">
              <form action="/action_page.php">
                <input type="date" id="selectdate" name="selectdate" />
                <input type="submit">
              </form>
            </div> -->
            <!-- <button class="headtabledate" @click="opendateinput">
              <font-awesome-icon
                icon="fa-regular fa-calendar-days"
                style="font-size: 25px"
              />
              <div class="fontbutton">DATE</div>
            </button> -->
          </div>
          <div class="tableContainer">
            <table style="width: 100%" class="bodertable">
              <tr>
                <td>วันที่รับ</td>
                <td>รหัสชิ้นงาน</td>
                <td>เลขที่อ้างอิง</td>
                <td>ลูกค้า</td>
                <td>วันกำหนดผลิต</td>
                <td>วันกำหนดส่ง</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr v-for="(tableplan, index) in plan()" :key="index">
                <td>{{ tableplan.dateReceipt.split("T")[0] }}</td>
                <td>{{ tableplan.workCode }}</td>
                <td>{{ tableplan.referenceId }}</td>
                <td>{{ tableplan.customer }}</td>
                <td>{{ tableplan.createdAt.split("T")[0] }}</td>
                <td>{{ tableplan.deadline.split("T")[0] }}</td>
                <td>
                  <div class="IconPopup" @click="openEditModal(tableplan)">
                    <font-awesome-icon
                      icon="fa-regular fa-pen-to-square"
                      style="font-size: 20px"
                      class="icon"
                    />
                  </div>
                </td>
                <td>
                  <div
                    class="actiondelete"
                    @click="opendeletemodal(tableplan._id)"
                  >
                    <font-awesome-icon
                      icon="fa-regular fa-trash-can"
                      style="font-size: 20px"
                      class="icon"
                    />
                  </div>
                </td>

                <td>
                  <div class="IconPopup" @click="openModal(tableplan)">
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
        <div id="dateinputmodal">
          <div class="inputdate" @click="inputdate">
            <!-- <form action="/action_page.php">
            <input type="date" id="selectdate" name="selectdate" />
            <input type="submit">
          </form> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TableComponent from "../components/TableComponent.vue";
import PopUp from "../components/PopUp.vue";
import { mapActions, mapGetters } from "vuex";

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
      deletepopup: false,
      alert: false,
      id: "",
      edittable: {},
      clear: [],

      addtable: {
        workCode: "",
        referenceId: "",
        dateReceipt: "",
        customer: "",
        deadline: "",
        condition: "",
        mat: "",
        platingType: "",
        otherPro: "",
        price: "",
        amountBill: "",
        balance: "",
        invenUpdate: "",
        workShift: "",
        jig: "",
        chub: "",
        productOrder: "",
        createdAt: "",
        updatedAt: "",
      },

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

  created() {
    this.fetchPlan();
  },
  computed: {
    plan() {
      console.log(this.getPlan);
      return this.getPlan;
    },
    isMessageMissing() {
      return (key) => {
        return !this.addtable[key];
      };
    },
  },
  methods: {
    ...mapActions(["fetchPlan"]),
    ...mapGetters(["getPlan"]),
    ...mapActions(["addMenuPlan"]),
    ...mapActions(["deletePlan"]),
    ...mapActions(["editPlan"]),
    mainmenu() {
      this.$router.push("/mainmenu");
    },
    openModal(tableplan) {
      this.edittable = tableplan;
      this.modal = true;
      this.backdrop = true;
    },
    closeModal() {
      this.modal = false;
      this.editmodal = false;
      this.backdrop = false;
      this.addmodal = false;
      this.deletepopup = false;
      this.alert = false;
    },
    save() {
      this.editdetails[0].condition = this.details[0].condition;
      this.closeModal();
    },
    splitText(data) {
      var date = data.split("T");
      return date[0];
    },
    openEditModal(tableplan) {
      this.edittable = tableplan;
      // console.log(tableplan);
      // console.log(this.edittable);
      this.editmodal = true;
      this.backdrop = true;
      this.edittable.dateReceipt = this.splitText(this.edittable.dateReceipt);
      this.edittable.deadline = this.splitText(this.edittable.deadline);
    },
    addrecord() {
      this.closeModal();
      this.addMenuPlan(this.addtable);
      this.addtable = this.clear;
    },
    deleteing() {
      this.deletePlan(this.id);
      this.closeModal();
    },
    saveRecord() {
      // this.details[0].condition = this.editdetails[0].condition;
      this.closeModal();
      this.editPlan(this.edittable);
    },
    opendateinput() {
      this.dateinput = true;
    },
    addclick() {
      this.addmodal = true;
      this.backdrop = true;
    },
    opendeletemodal(id) {
      this.id = id;
      this.deletepopup = true;
      this.backdrop = true;
    },
    nosavedelete() {
      this.closeModal();
    },
    checkMessages() {
      if (
        this.addtable.amountBill &&
        this.addtable.balance &&
        this.addtable.mat &&
        this.addtable.otherPro &&
        this.addtable.platingType &&
        this.addtable.price &&
        this.addtable.productOrder &&
        this.addtable.referenceId &&
        this.addtable.workCode &&
        this.addtable.workShift &&
        this.addtable.chub &&
        this.addtable.condition &&
        this.addtable.customer &&
        this.addtable.dateReceipt &&
        this.addtable.invenUpdate &&
        this.addtable.deadline &&
        this.addtable.jig &&
        this.addtable.createdAt
      ) {
        this.addrecord();
        // Perform your desired actions when all messages are present
      } else {
        this.alert = true;
        // Perform your desired actions when one or more messages are missing
      }
    },
     hideAlert() {
      this.alert = false;
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
  margin-left: 20px;
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
#dateinputmodal {
  position: absolute;
  top: 21%;
  left: 21%;
  margin: auto;
  z-index: 99;
  opacity: 1;
}
.headinputdate {
  margin-left: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 6px;
}
.productpage {
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 15px;
}
.productpagetext {
  font-size: 15px;
}
#modaldeletepopup {
  position: absolute;
  top: 30%;
  left: 35%;
  margin: auto;
  z-index: 99;
}
.containerdeletepopup {
  width: 30vw;
  height: 40vh;
  background-color: white;
  border-radius: 20px;
  margin: auto;
  border-color: #000000;
  border-style: solid;
  border-width: 2px;
}
.headderdeletepopup {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.backdeletepopup {
  position: absolute;
  top: 3%;
  right: 4%;
  cursor: pointer;
}
.icondelete {
  font-size: 45px;
}
.circledelete {
  height: 90px;
  width: 90px;
  background-color: #b5f0e2;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.textdeletepopup {
  font-size: 30px;
  margin-top: 10px;
}
.singledeletebutton {
  display: flex;
  margin-top: 30px;
}
.textalert {
  font-size: 16px;
  color: red;
}
#alert {
  position: absolute;
  left: 45%;
  margin: auto;
  z-index: 99;
}
.alertnaja {
  background-color: #f8d7da;
  color: #721c24;
  padding: 10px;
  margin-bottom: 10px;
}

</style>
