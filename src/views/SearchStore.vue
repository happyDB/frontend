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
                                <p class="lead  text-white">매장 찾기</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>
        <section class="section section-lg pt-lg-0" style="padding-bottom:0px;">
            <div class="container">
                <div class="card card-profile mt--300 shadow">
                    <div class="px-4">
                        <div class="row justify-content-center">
            
                        </div>
                        <div class="text-center mt-5">
                            
                        </div>
                            <div class="row justify-content-center" style="padding-bottom:50px;">
                                <div class="col-lg-9">
                                    <div class="row">
                                        <div class="col-lg-12 ">
                                            <div id = "root" class="form-group input-group">
                                                <input aria-describedby="addon-right addon-left" placeholder="Search Store" @keyup.enter="onSubmitForm" class="form-control" v-model = "always">
                                                <div class="input-group-append">
                                                    <span class="input-group-text">
                                                        <div class="btn-wrapper">
                                                            
                                                            <i class="ni ni-zoom-split-in" v-on:click = "onSubmitForm">
                                                            </i>
                                                             
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-9">
                                    <span><base-button v-on:click="foldOption" type="info" size="sm" class="mr-4">상세 조건</base-button></span>
                                </div>
                                
                                <div v-if="fold" class="col-lg-12" style="margin-top:20px;">
                                    <hr style="margin-bottom:50px;"/>
                                    <div class="col-lg-9" style="margin-left:120px;">
                                        <p style="text-align:left;">
                                            <span>게임으로 매장찾기 : <input type="text" @keyup.enter="onSubmitForm" id="byGame" v-model="game"  placeholder = ""/></span>
                                            <span style="float:right;">오 픈 시 간 : <input type="text" @keyup.enter="onSubmitForm" id="byOpen" v-model="open"  placeholder = ""/></span>
                                            
                                        </p>
                                        <p style="text-align:left;">
                                            <span>지역으로 매장찾기 : <input type="text" @keyup.enter="onSubmitForm" id="byRegion" v-model="region"  placeholder = ""/></span>
                                            <span style="float:right;">마 감 시 간 : <input type="text" @keyup.enter="onSubmitForm" id="byClose" v-model="close"  placeholder = ""/></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
        <div v-if="!oSF" class="container">
        </div>
        <div v-else class="container">
            <div class="card card-profile mt-300 shadow">
                <div class="px-4">
                    <div class="row justify-content-center">
                        <div style="padding-top:3%; padding-left:5%; width:1500px; text-align: left;">
                                         </div>
                                         <div class="sub">
                                        <span id="commentWriter"> 레드버튼 </span>
                                        <span id="commentContent">경기도 수원시 영통구 신원로 136번길 10| 11:00 | 00:00 </span>
                                    
                                         </div>
                                         <div class="sub" >
                                        <span id="commentWriter"> 영통보드게임방 </span>
                                        <span id="commentContent">경기도 수원시 영통구 영통동 998-4번지| 13:00 | 03:30 </span>
                                        
                                         </div>
                                         <div class="sub" >
                                        <span id="commentWriter"> 보드보드 </span>
                                        <span id="commentContent">경기도 수원시 영통구 이의동 1258-4| 10:00 | 00:00 </span>
                                        
                                         </div>
                                         <div class="sub" >
                                        <span id="commentWriter"> 탁상공론 </span>
                                        <span id="commentContent">경기도 수원시 영통구 청명남로 32| 08:30 | 21:30 </span>
                                        
                                         </div>
                                         <div class="sub" >
                                        <span id="commentWriter"> 아주보드게임 </span>
                                        <span id="commentContent">경기도 수원시 팔달구 인계동 1043-9 | 09:00 | 22:00 </span>
                                       
                                         </div>
                                         <div class="sub" >
                                        <span id="commentWriter"> 논현홀덤 오프홀덤 </span>
                                        <span id="commentContent">경기도 수원시 팔달구 인계동 1042-7번지 | 09:30 | 23:30 </span>
                                       
                                         </div>
                                         <div  class="sub">
                                         <span id="commentWriter"> 할리갈리보드카페 </span>
                                        <span id="commentContent">경기도 수원시 팔달구 행궁동 102-7 | 09:00 | 23:30 </span>
                                        
                                         </div>
                                         <div class="sub" >
                                        <span id="commentWriter"> 러브스토리 </span>
                                        <span id="commentContent">경기도 수원시 팔달구 매산로1가 40-1| 11:00 | 00:00 </span>
                                        
                                         </div>
                                         <div class="sub" >
                                        <span id="commentWriter"> 공간보드게임 </span>
                                        <span id="commentContent">경기도 수원시 장안구 영화동 166-15번지| 10:00 | 22:00 </span>
                                       
                                         </div>
                                         <div class="sub" >
                                        <span id="commentWriter"> 모두의 보드카페 </span>
                                        <span id="commentContent">경기도 수원시 장안구 율전동 287번지| 09:00 | 21:00 </span>
                                        
                                         </div>
                                         
                                   
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row justify-content-center"> 
                    <base-pagination :page-count="10" v-model="pagination.currentPage" @input="getPageIndex"></base-pagination>
                 </div>
            </div>
            <br/>
            <br/>
        </div>
       

    </div>
</template>
<style scoped>
#commentWriter{
    font-size: 15px;
    font-weight: bold;
    margin-right: 1%;
}
#commentContent{
     margin-right: 1%;
     color: gray;
     padding-left: 10px;
     
}
#commentContent{
     margin-right: 1%;
     width: 80%;
     
}
.sub{
    margin:10px;
     width:600px;
       text-align: left;
        margin-left: 10%;
}

</style>
<script>
import Rating from '../components/Ratings.vue'
import GameRating from '../components/GameRating.vue'
/*
const app = new Vue({
    el : ".form-group .input-group",
    data : {
        always : ""
    },
    methods : {
        
    }
})
*/
export default {

    name: "home",
    components: {
        Rating,
        GameRating
    },
    data() {
        return {
            fold : false,
            oSF : false,
            always: "",
            pagination: {
                currentPage: 1,
                pageSize: 6,
            }
        }
    },

/*
    created(){
        EventBus.$emit('value-input', ()=>{
            value : this.always
        });
    }, 

*/
  methods:{
        foldOption() {
            this.fold =! this.fold;
        },
        onSubmitForm() {
            this.oSF =! this.oSF;
        },
        getPageIndex(index)
        {
            this.pagination.currentPage=index;
        },
        paginatedData() {
            const start = this.pagination.currentPage * this.pagination.pageSize,
                end = start + this.pagination.pageSize;
            
            let result;//get으로 page 크기만큼 보드게임 정보 DB에서 받아오기!!!
            return result;
        },
    },
};
</script>