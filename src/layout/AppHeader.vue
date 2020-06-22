<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="img/brand/happy-white.png" alt="logo" style="width:110px; height:45px;">
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                        <img src="img/brand/Happy-blue.png" style="width: 110px; height: 40px">
                    </router-link>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>
            
            <ul v-if="loginCheck" class="navbar-nav navbar-nav-hover align-items-lg-center">
                <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                        <span class="nav-link-inner--text">Search</span>
                    </a>
                    <div class="dropdown-menu-inner">
                       <router-link to="/searchgame"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                <i class="ni ni-spaceship"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h6 class="heading text-primary mb-md-1">게임 찾기</h6>
                                <p class="description d-none d-md-inline-block mb-0">다양한 카테고리를 통해 원하는 게임을 검색하기</p>
                            </div>
                       </router-link>
                        <router-link to="/searchstore"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                <i class="ni ni-ui-04"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-warning mb-md-1">매장 찾기</h5>
                                <p class="description d-none d-md-inline-block mb-0">내 주변에 있는 보드게임 매장 찾기</p>
                            </div>
                        </router-link>
                    </div>
                </base-dropdown>
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i> Review
                        <span class="nav-link-inner--text"></span>
                    </a>
                    <router-link to="/landing" class="dropdown-item">여기 쓸거 있나?</router-link>
                    <router-link to="/profile" class="dropdown-item">냐냔냐?</router-link>
                    
                   
                </base-dropdown>
       
                    <router-link to="/recommand" class="nav-link">
                        <i class="ni ni-collection d-lg-none"></i> Recommand
                        <span class="nav-link-inner--text"></span>
                    </router-link>
                   

               
                 <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i> Manage
                        <span class="nav-link-inner--text"></span>
                    </a>
                    <router-link to="/landing" class="dropdown-item">이건 매장 주인만 보이게</router-link>

                   
                </base-dropdown>
            </ul>
            <ul  v-if="loginCheck" class="navbar-nav align-items-lg-center ml-lg-auto">
            
                <li class="nav-item">
                    <router-link class="nav-link nav-link-icon" 
                       to="/profile" title="my Page">
                        <span  class="description d-none d-md-inline-block mb-0" style="margin-right: 10px; font-size:12px;">환영합니다 ! </span>
                        <i class="fa fa-user"></i>
                        <span class="nav-link-inner--text "> {{this.user.nickName}} 님</span>
                    </router-link>
                </li>
                <li class="nav-item" v-if="loginCheck">
                    <span class="nav-link nav-link-icon" v-on:click="logout"
                       title="byebye">
                        <i class="fa fa-sign-out"></i>
                        <span class="nav-link-inner--text ">Logout</span>
                    </span>
                </li>
                
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";
import axios from 'axios'

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  },
  data() {
    return {
      loginCheck : false,
      user:{
          nickName: '',
          Id: '',
      },
    
    }
  },
   async beforeCreate() {
    const result = await axios.get("/api/login");
    this.loginCheck = result.data.logined;
    if(this.loginCheck) 
    {
        this.user.nickName= result.data.nickname;
    }

  }, 
  methods:{
    logout : function() {
      axios.delete("/api/logout");
      this.logoutCheck = true;
      alert("Logout Success!");
      setTimeout(()=> {
        location.replace('/'); //로그아웃하면 메인으로 가게 수정. (기존엔 free board 등에서 로그아웃하면 404 떴음)
       // location.reload();//freeboard 로그아웃 freeboard link 남음. 덮어씌워서 따라서 이걸 없앰
      },1500);
    }
  }
};
</script>
<style>
</style>
