<template>
    <div>

        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default shape-skew">
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
                                <h1 class="display-2  text-white">Search Stores
                                   
                                </h1>
                                <p class="lead  text-white">여기 매장 검색하는거 짜주세요, 검색 결과는 API이용하면 될듯!(map)</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>
        
       

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
