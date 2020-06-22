<template>
    <div id="app">
        <router-view name="header"></router-view> <!--맨위 header 메뉴바 있는 곳, 여기서 logout두고 Logoutcheck값 받아와야할 듯, 그런데 router에서 emit(props반대)가능???-->
        <main>
            <fade-transition origin="center" mode="out-in" :duration="250">
                <Login id = "login" v-if="!sessionCheck"/>
                <router-view v-if ="sessionCheck && !logoutCheck"></router-view>
            </fade-transition>
        </main>
      
        <!--router-view name="footer">안 필요 할듯?</router-view-->
    </div>
</template>
<script>
import { FadeTransition } from "vue2-transitions";
import Login from './views/Login.vue'
import axios from 'axios'

export default {
  components: {
    FadeTransition,
    Login
  },
  data() {
    return {
      sessionCheck : false,
      logoutCheck : false,
    }
  },
  async beforeCreate() {
    const result = await axios.get("/api/login");
    this.sessionCheck = result.data.logined;
  },
};
</script>
