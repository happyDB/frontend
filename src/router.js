<<<<<<< HEAD
import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Recommand from "./views/Recommand.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import SearchGame from "./views/SearchGame.vue";
import SearchStore from "./views/SearchStore.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      }
    },
    {
      path: "/recommand",
      name: "recommand",
      components: {
        header: AppHeader,
        default: Recommand,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    },
    {
      path: "/searchgame",
      name: "searchgame",
      components: {
        header: AppHeader,
        default: SearchGame,
        footer: AppFooter
      }
    },
    {
      path: "/searchstore",
      name: "searchstore",
      components: {
        header: AppHeader,
        default: SearchStore,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
=======
import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Recommand from "./views/Recommand.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import SearchGame from "./views/SearchGame.vue";
import SearchStore from "./views/SearchStore.vue";
import Review from "./views/Review.vue"

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      }
    },
    {
      path: "/recommand",
      name: "recommand",
      components: {
        header: AppHeader,
        default: Recommand,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    },
    {
      path: "/searchgame",
      name: "searchgame",
      components: {
        header: AppHeader,
        default: SearchGame,
        footer: AppFooter
      }
    },
    {
      path: "/searchstore",
      name: "searchstore",
      components: {
        header: AppHeader,
        default: SearchStore,
        footer: AppFooter
      }
    },
    {
      path: "/review",
      name: "review",
      components: {
        header: AppHeader,
        default: Review,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
>>>>>>> master
