<<<<<<< HEAD
<template>
    <div>

        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-primary shape-skew">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0">
                        <div class="row">
                            <div class="col-lg-7">
                                <h1 class="display-2  text-white">Recommad Board Games
                                   
                                </h1>
                                <p class="lead  text-white">이런 게임도 좀 하고 사십셔~~</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>
        <section class="section section-lg pt-lg-0 mt--200">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5" >
                                    
                                    <!--icon name="ni ni-check-bold" type="primary" rounded class="mb-4">
                                    </icon--> <img class="card-img" src="img/games/할리갈리.jpg" >
                                   <div class="row row-grid">
                                  
                                    <h4 class="text-primary display-4 text-uppercase" style="margin-left:20px; margin-right:20px;">할리갈리</h4>
                          
                                 
                                    <GameRating :grade="3" :maxStars="5" :hasCounter="true" />
                                
                                   </div>
                                    <p class="description mt-3"> 
                                    <div>
                                        <badge type="primary" rounded>party game</badge>
                                        <badge type="primary" rounded>speedy</badge>
                                    </div>
                                    <base-button tag="a" href="#" type="primary" class="mt-4">
                                        More Detail..
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                               <card class="border-0" hover shadow body-classes="py-5" >
                                    
                                    <!--icon name="ni ni-check-bold" type="primary" rounded class="mb-4">
                                    </icon--> <img class="card-img" src="img/games/젠가.jpg" >
                                   <div class="row row-grid">
                                  
                                    <h4 class="text-primary display-4 text-uppercase" style="margin-left:20px; margin-right:20px;">젠가</h4>
                          
                                 
                                    <GameRating :grade="1" :maxStars="5" :hasCounter="true" />
                                
                                   </div>
                                    <p class="description mt-3"> 
                                    <div>
                                        <badge type="primary" rounded>party game</badge>
                                    </div>
                                    <base-button tag="a" href="#" type="primary" class="mt-4">
                                        More Detail..
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                               <card class="border-0" hover shadow body-classes="py-5" >
                                    
                                    <!--icon name="ni ni-check-bold" type="primary" rounded class="mb-4">
                                    </icon--> <img class="card-img" src="img/games/팽귄얼음깨기.jpg" >
                                   <div class="row row-grid">
                                  
                                    <h4 class="text-primary display-4 text-uppercase" style="margin-left:20px; margin-right:20px;">팽귄 얼음 깨기</h4>
                          
                                 
                                    <GameRating :grade="5" :maxStars="5" :hasCounter="true" />
                                
                                   </div>
                                    <p class="description mt-3"> 
                                    <div>
                                        <badge type="primary" rounded>party game</badge>
                                        <badge type="primary" rounded>penguin</badge>
                                        <badge type="primary" rounded>crush</badge>
                                    </div>
                                    <base-button tag="a" href="#" type="primary" class="mt-4">
                                        More Detail..
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-istanbul" type="success" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-success text-uppercase">Build Something</h6>
                                    <p class="description mt-3">Argon is a great free UI package based on Bootstrap
                                        4 that includes the most important components and features.</p>
                                    <div>

                                        <badge type="success" rounded>business</badge>
                                        <badge type="success" rounded>vision</badge>
                                        <badge type="success" rounded>success</badge>
                                    </div>
                                    <base-button tag="a" href="#" type="success" class="mt-4">
                                        Learn more
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-planet" type="warning" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-warning text-uppercase">Prepare Launch</h6>
                                    <p class="description mt-3">Argon is a great free UI package based on Bootstrap
                                        4 that includes the most important components and features.</p>
                                    <div>
                                        <badge type="warning" rounded>marketing</badge>
                                        <badge type="warning" rounded>product</badge>
                                        <badge type="warning" rounded>launch</badge>
                                    </div>
                                    <base-button tag="a" href="#" type="warning" class="mt-4">
                                        Learn more
                                    </base-button>
                                </card>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        
            <div class="container">
                <div class="row justify-content-center"> 
                    <base-pagination :page-count="10" v-model="pagination.currentPage" @input="getPageIndex"></base-pagination>
                 </div>
            </div>
            <br/>
            <br/>
        
       

    </div>
</template>

<script>

import Rating from '../components/Ratings.vue'
import GameRating from '../components/GameRating.vue'
export default {

  name: "home",
 components: {
    Rating,
    GameRating
  },
  data() {
    return {
      pagination: {
        currentPage: 1,
        pageSize: 6,
      }
    }
    
  },
  methods:{
        
        getPageIndex(index)
        {
            this.pagination.currentPage=index;
        },
        paginatedData() {
            const start = this.pagination.currentPage * this.pagination.pageSize,
                end = start + this.pagination.pageSize;
            
            let result;//get으로 page 크기만큼 보드게임 정보 DB에서 받아오기!!!
            return result;
        }
    },
    
};
</script>
=======
<template>
    <div>

        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-primary shape-skew">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0">
                        <div class="row">
                            <div class="col-lg-7">
                                <h1 class="display-2  text-white">Recommand Board Games
                                   
                                </h1>
                                <p class="lead  text-white">이런 게임도 좀 하고 사십셔~~</p>
                                
                            </div>
                            
                        </div>
                    </div>
                   
                    
                </div>
                 
            </section>
            
            <!-- 1st Hero Variation -->
        </div>
       
        <section class="section section-lg pt-lg-0 mt--200">
            <div class="container">
                         
                <div class="order-menu">
                  <span style="margin: 7px;">
                      <a slot="title" href="#/recommand" > 
                      <i class="fa fa-check"/> 맞춤 추천 
                      </a> 
                      </span>|  
                      <span style="margin: 7px;"> 
                          <a slot="title" href="#/recommand"> 
                          <i class="fa fa-star"/> 평점순  
                          </a>
                      </span>
                </div>
                <div class="row justify-content-center">

                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4" v-for="g in paginatedData()" :key="g.Board_game_ID">
                               
                                <card class="border-0" hover shadow body-classes="py-5" >
                                    
                                    <!--icon name="ni ni-check-bold" type="primary" rounded class="mb-4">
                                    </icon--> <img class="card-img" :src="g.Img_url" >
                                   <div class="row row-grid">
                                  
                                    <h4 class="text-primary display-4 text-uppercase" style="margin-left:20px; margin-right:20px;">{{ checkBoardTitle(g.Title) }}</h4>
                          
                                 
                                    <GameRating :grade="5" :maxStars="5" :hasCounter="true" />
                                
                                   </div>
                                    <p class="description mt-3"> 
                                    <div>
                                        <badge type="primary" rounded>party game</badge>
                                        <badge type="primary" rounded>speedy</badge>
                                    </div>
                                    <base-button tag="a" href="#" type="primary" class="mt-4">
                                        More Detail..
                                    </base-button>
                                </card>
                            </div>
                           
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        
            <div class="container">
                <div class="row justify-content-center"> 
                    <base-pagination :page-count="10" v-model="pagination.currentPage" @input="getPageIndex"></base-pagination>
                 </div>
            </div>
            <br/>
            <br/>
        
       

    </div>
</template>

<script>
import axios from 'axios'
import Rating from '../components/Ratings.vue'
import GameRating from '../components/GameRating.vue'
export default {

  name: "home",
 components: {
    Rating,
    GameRating
  },
  data() {
    return {
      pagination: {
        currentPage: 1,
        pageSize: 6,
        
      },
      recommandGames: '',
    }
    
  },
  async beforeCreate() { //백엔드에서 games 가져오는 rest.
            const result = await axios.get("/api/games/recommand");
            this.recommandGames = result.data;
           // alert(this.recommandGames[1].Title);
  },

  methods:{
        checkBoardTitle(title) {
            
                if (title.length > 6) return title.substring(0, 6) + "...";
                else return title;
         },
        getPageIndex(index)
        {
            this.pagination.currentPage=index;
        },
        paginatedData() {
            const start = (this.pagination.currentPage-1) * this.pagination.pageSize,
                end = start + this.pagination.pageSize;
            
            let result = this.recommandGames.slice(start, end);//get으로 page 크기만큼 보드게임 정보 DB에서 받아오기!!!
            return result;
        }
    },
    
};





///아래 css는 정렬방식 효과 때문에 넣은거임
</script>

<style>
.order-menu{
   
    position: relative; 
    margin-top: -50px; 
    padding-bottom: 30px;
}
.order-menu a:link {
   color: #706f72;
   white-space: nowrap;
   text-decoration: none;
}
.order-menu a:visited {
     text-decoration: none;
     color: #706f72;
}
.order-menu a:hover {
     color:#b1b0b1 !important;
     text-decoration: none;
     background-repeat: repeat-x;
     background-position: 100% 100%;
     padding-bottom: 3px;
     
     transition: color 0.5s;
}
@media all and (min-width:1000px) {
    .order-menu{
    color: white;
    }
    .order-menu a:link {
    color: white;
    }
    .order-menu a:visited {
     color: white;
    }
    .order-menu a:hover {
     color:#b1b0b1;
    }
}
</style>
>>>>>>> master
