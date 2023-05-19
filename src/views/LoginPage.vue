<template>
  <div class="loginPage">
    <div class="container">
      <div class="logo">
        <img src="../assets/logoPB.jpg" style="width: 100%; height: 100%" />
      </div>
      <div class="loginBox">
        <div class="loginText">LOGIN</div>
        <div class="inputBox">
          <div class="username">
            <font-awesome-icon
              icon="fa-solid fa-user"
              style="font-size: 30px"
            />
            <input type="text" placeholder="Username" v-model="user.username"/>
            <hr />
          </div>
          <div class="password">
            <font-awesome-icon
              icon="fa-solid fa-lock"
              style="font-size: 30px"
            />
            <input type="password" placeholder="Password" v-model="user.password"/>
            <hr />
          </div>
          <div class="signup">
            <button @click="login">LOGIN</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginPage",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.$router.push({ path: "/mainmenu" });
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

.logo {
  width: 100%;
  height: 25%;
}

.loginBox {
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.loginText {
  width: 500px;
  height: 80px;
  background-color: #5e5e5e;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  border-radius: 50px 50px 0 0;
  letter-spacing: 2px;
}

.inputBox {
  width: 500px;
  height: 250px;
  background-color: #cbc6c6;
  border-radius: 0 0 50px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
}

button {
  width: 143px;
  height: 42px;
  background-color: #45bfa2;
  font-size: 14px;
  border-radius: 10px 10px 10px 10px;
  margin-top: 15px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #1aa886;
}

input {
  border: none;
  outline: none;
  width: 370px;
  height: 40px;
  font-size: 18px;
  background-color: #cbc6c6;
  margin-left: 20px;
}

::placeholder {
  color: black;
}

hr {
  border: 0.5px solid black;
  width: 420px;
  margin-bottom: 20px;
}
</style>
