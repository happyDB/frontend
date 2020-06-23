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
                                <h1 class="display-2  text-white">Likes: Board Games
                                   
                                </h1>
                                <p class="lead  text-white">당신이 '좋아요' 한 바로 그 게임!</p>
                                
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
                                    </icon--> 
                                    <router-link :to="{name : 'boardgame', params: {idx : g.Board_game_ID}}">
                                    <img class="card-img" :src="g.Img_url" >
                                    </router-link>
                                   <div class="row row-grid">
                                  <router-link :to="{name : 'boardgame', params: {idx : g.Board_game_ID}}">
                                    <h4 class="text-primary display-4 text-uppercase" style="margin-left:20px; margin-right:20px; float:left;">{{ checkBoardTitle(g.Title) }}</h4>
                                  </router-link>
                                  <div style="position: absolute; right: 10%;">
                                  <ReviewRating :grade="g.Average_rating" :maxStars="5" :hasCounter="true" />
                                   </div>
                                   
                                
                                   </div>
                                    <p class="description mt-3"> 
                                        
                                    <!--div v-for="genre in getGenreList(g.Board_game_ID)" :key="genre.Board_game_ID"-->
                                    <div>

                                        <badge type="primary" rounded>{{g.Genre}}</badge>
                            
                                    </div>
                                    <router-link :to="{name : 'boardgame', params: {idx : g.Board_game_ID}}">
                                    <base-button tag="a" href="#" type="primary" class="mt-4">
                                        More Detail..
                                    </base-button>
                                    </router-link>
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
import ReviewRating from '../components/ReviewRating.vue'
export default {

  name: "home",
 components: {
    Rating,
    ReviewRating
  },
  data() {
    return {
      pagination: {
        currentPage: 1,
        pageSize: 6,
        
      },
      likeGames: '',
      toggleHeart: [],
      genreList:'',


    }
    
  },
  async beforeCreate() { //백엔드에서 games 가져오는 rest.
            const result = await axios.get("/api/games/likes");
            this.likeGames = result.data;

           
  },

  methods:{
        checkBoardTitle(title) {
            
                if (title.length > 6) return title.substring(0, 7) + "..";
                else return title;
         },
        getPageIndex(index)
        {
            this.pagination.currentPage=index;
        },
        paginatedData() {
            const start = (this.pagination.currentPage-1) * this.pagination.pageSize,
                end = start + this.pagination.pageSize;
            
            let result = this.likeGames.slice(start, end);//get으로 page 크기만큼 보드게임 정보 DB에서 받아오기!!!
            return result;
        },
        
        
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
#non-heart{
    color: gray;
    float: right;
    margin-top: 5px;
    font-size: 20px;
}
#heart{
    color: red;
    float: right;
    margin-top: 5px;
    font-size: 20px;
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
