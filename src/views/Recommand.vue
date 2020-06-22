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
